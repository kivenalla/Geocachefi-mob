import { Controller, Get, Query, Res, Post, Body, Req, BadRequestException, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { OAuthService } from './oauth.service';
import { Response, Request } from 'express';
import axios from "axios";
import { AuthService } from "@app/auth";
import { GeocachingApiService } from "@app/geocaching-api";
import { UsersService } from "@app/users";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";


@Controller('oauth')
export class OAuthController {
    constructor(
        private readonly oauthService: OAuthService,
        private readonly geocachingApiService: GeocachingApiService,
        private readonly usersService: UsersService,
        private readonly configService: ConfigService
    ) {
    }
    
    @Get('authorize')
    async login(@Res() res: Response, @Req() req: Request) {
        const { url, state, codeVerifier } = this.oauthService.getAuthorizeUrl()
        req.session.oauthState = state;
        req.session.codeVerifier = codeVerifier;
        console.log(url)
        
        // Ensure session is saved before redirect
        req.session.save((err) => {
            if (err) {
                console.error('Error saving session:', err);
                throw new InternalServerErrorException('Could not save session');
            }
            res.redirect(url);
        });
    }
    
    @Get('login')
    async callback(
        @Query('code') code: string,
        @Query('state') state: string,
        @Res({ passthrough: true }) res: Response,
        @Req() req: Request
    ) {
        if (state !== req.session.oauthState) {
            this.cleanupSession(req);
            throw new UnauthorizedException('Invalid state');
        }
        if (!code) {
            this.cleanupSession(req);
            throw new BadRequestException('Authorization code is required');
        }
        const tokenResponse = await this.oauthService.exchangeCodeForToken(code, req.session.codeVerifier as string);
        this.cleanupSession(req);
        
        // Fetch user profile using access_token
        const gcUser = await this.geocachingApiService.getAuthorizedUser(tokenResponse.access_token,[
            "referenceCode",
            "username",
            "membershipLevelId",
        ])
        if (!gcUser.referenceCode) {
            throw new BadRequestException('User does not have referenceCode set in geocaching')
        }
        
        // Use referenceCode as unique identifier
        const referenceCode = gcUser.referenceCode;
        const name = gcUser.username || 'Geocacher';
        const membershipLevelId = gcUser.membershipLevelId || 0;
        
        // Find or create local user
        let user = await this.usersService.findByGeocachingRef(referenceCode);
        if (!user) {
            user = await this.usersService.createOAuthUser({ name, referenceCode });
        }

        await this.usersService.updateUserRoles(user.id, membershipLevelId);
        await this.usersService.updateGeocachingTokens(user.id, tokenResponse);
        
        // Generate JWT
        const access_token = this.usersService.signAccessToken(user);
        this.usersService.setAuthCookie(res,access_token)
        // configurable redirect
        const frontendRedirect = this.configService.get<string>('FRONTEND_REDIRECT_URI','https://host.docker.internal:3004')

        
        // You can also pass some query params if needed
        const redirectUrl = new URL(frontendRedirect);
        redirectUrl.searchParams.set('success', 'true');
        redirectUrl.searchParams.set('user', user.id);
        redirectUrl.searchParams.set('user', user.id);
        
        
        return res.redirect(redirectUrl.toString());
    }
    
    @Post('refresh')
    async refresh(@Body('refresh_token') refreshToken: string) {
        if (!refreshToken) {
            throw new BadRequestException('Refresh token is required');
        }
        return this.oauthService.refreshAccessToken(refreshToken);
    }
    
    private cleanupSession(req: any) {
        delete req.session.oauthState;
        delete req.session.codeVerifier;
    }
}

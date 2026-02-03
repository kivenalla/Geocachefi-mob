import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from "@app/users/user.entity";
import { Request } from 'express';
export type JwtPayload = { sub: string; email: string; tv?: number };

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(User) private readonly users: Repository<User>,
    ) {
        console.log("JwtStrategy")
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                // Default: read from Authorization header
                ExtractJwt.fromAuthHeaderAsBearerToken(),
                // 👇 Add this custom extractor to also support cookies
                (req: Request) => {
                    if (req && req.cookies) {
                        return req.cookies['authorization'];
                    }
                    return null;
                },
            ]),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        });
    }
    
    async validate(payload: JwtPayload) {
        // reject tokens with stale tokenVersion
        const user = await this.users.findOne({ where: { id: payload.sub } });
        if (!user || user.tokenVersion !== payload.tv) return null;
        
        // attaches to req.user
        return {
            sub: user.id,
            email: user.email,
            tv: user.tokenVersion,
            isGuestUser: user.isGuestUser,
            isAdminUser: user.isAdminUser,
            isPremiumUser: user.isPremiumUser,
            geocachingAccessToken: user.geocachingAccessToken,
            geocachingRefreshToken: user.geocachingRefreshToken,
            geocachingTokenExpiresAt: user.geocachingTokenExpiresAt,
        };
    }
}

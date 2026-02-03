import { Body, Controller, Get, Post, UseGuards, Request, UsePipes, ValidationPipe, Res, ClassSerializerInterceptor, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from "@app/auth";
import { ApiSecurity } from "@nestjs/swagger";
import { SwaggerSecuritySchemas } from "@app/auth/enums/swagger-security-schemas";
import { ConfigService } from '@nestjs/config';
import { plainToInstance } from "class-transformer";
import { User } from "@app/users/user.entity";

@Controller('users')
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly configService: ConfigService
    ) {
    }
    
    @Post('register')
    async register(@Body() dto: RegisterDto) {
        return this.usersService.register(dto);
    }
    
    @Post('login')
    async login(
        @Body() dto: LoginDto,
        @Res({ passthrough: true }) res: Response) {
        const result = await this.usersService.login(dto.email, dto.password);
        this.usersService.setAuthCookie(res, result.access_token);
        return {
            user: plainToInstance(User,result.user),
            access_token: result.access_token
        };
    }
    
    @UseGuards(JwtAuthGuard)
    @Post('logout')
    @ApiSecurity(SwaggerSecuritySchemas.JWT)
    async logout(
        @Request() req: any,
        @Res({ passthrough: true }) res: Response) {
        await this.usersService.logout(req.user.sub);
        this.usersService.clearAuthCookie(res);
        return { message: 'Logged out' };
    }

    // example protected endpoint
    @UseGuards(JwtAuthGuard)
    @Get('me')
    @ApiSecurity(SwaggerSecuritySchemas.JWT)
    async me(@Request() req: any) {
        const user = await this.usersService.findById(req.user.sub);
        const { passwordHash, ...safe } = user;
        const userWithExposes = plainToInstance(User, safe);
        return userWithExposes;
    }
}

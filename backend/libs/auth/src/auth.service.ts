import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AUTH_OPTIONS, AUTH_USER_SERVICE } from './tokens';
import { AuthModuleOptions, AuthUserService } from './interfaces/auth-options.interface';
import { AuthUserWithPassword, AuthUserPublic } from './interfaces/auth-user.interface';
import { PasswordService } from './password.service';
import { JwtPayload } from "../strategies/jwt.strategy";

@Injectable()
export class AuthService {
    private readonly toPublic: (u: AuthUserWithPassword) => AuthUserPublic;
    
    constructor(
        private readonly jwt: JwtService,
        @Inject(AUTH_OPTIONS) private readonly opts: AuthModuleOptions,
        @Inject(AUTH_USER_SERVICE) private readonly users: AuthUserService,
        private readonly password: PasswordService,
    ) {
        this.toPublic = opts.toPublicUser ?? ((u) => ({ id: u.id, email: u.email }));
    }
    
    async login(email: string, password: string) {
        const user = await this.users.findByEmail(email);
        if (!user) throw new UnauthorizedException('Invalid credentials');
        
        const ok = await this.password.compare(password, user.passwordHash);
        if (!ok) throw new UnauthorizedException('Invalid credentials');
        
        const payload = { sub: user.id, email: user.email } ;
        const access_token = await this.jwt.signAsync<JwtPayload>(payload, {
            secret: this.opts.jwtSecret,
            expiresIn: this.opts.jwtExpiresIn ?? 3600,
        });
        
        return { access_token, user: this.toPublic(user) };
    }
    
    // helper if your app wants to sign tokens for an existing user
    async signFor(user: AuthUserWithPassword) {
        const payload = { sub: user.id, email: user.email };
        const access_token = await this.jwt.signAsync<JwtPayload>(payload, {
            secret: this.opts.jwtSecret,
            expiresIn: this.opts.jwtExpiresIn ?? 3600,
        });
        return { access_token, user: this.toPublic(user) };
    }
}

import { DynamicModule, Module, Provider } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';

import { PasswordService } from './password.service';
import { AUTH_OPTIONS, AUTH_USER_SERVICE } from './tokens';
import { AuthModuleAsyncOptions, AuthModuleOptions, AuthUserService } from './interfaces/auth-options.interface';
import { JwtStrategy } from "../strategies/jwt.strategy";

@Module({})
export class AuthModule {
    static register(options: AuthModuleOptions, userService: AuthUserService): DynamicModule {
        const optionsProvider: Provider = { provide: AUTH_OPTIONS, useValue: options };
        const userProvider: Provider = { provide: AUTH_USER_SERVICE, useValue: userService };
        
        return {
            module: AuthModule,
            imports: [PassportModule, JwtModule.register({})],
            providers: [AuthService, JwtStrategy, PasswordService, optionsProvider, userProvider],
            exports: [AuthService, PasswordService, JwtStrategy],
        };
    }
    
    static registerAsync(asyncOpts: AuthModuleAsyncOptions & { userService: Provider }): DynamicModule {
        const optionsProvider: Provider = {
            provide: AUTH_OPTIONS,
            useFactory: async (...args: any[]) => asyncOpts.useFactory!(...args),
            inject: asyncOpts.inject ?? [],
        };
        
        return {
            module: AuthModule,
            imports: [PassportModule, JwtModule.register({}), ...(asyncOpts.imports ?? [])],
            providers: [AuthService, JwtStrategy, PasswordService, optionsProvider, asyncOpts.userService],
            exports: [AuthService, PasswordService, JwtStrategy],
        };
    }
}

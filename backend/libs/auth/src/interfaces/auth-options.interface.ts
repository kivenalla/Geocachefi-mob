import { ModuleMetadata, Type } from '@nestjs/common';
import { AuthUserWithPassword, AuthUserPublic } from './auth-user.interface';

export interface AuthModuleOptions {
    jwtSecret: string;
    jwtExpiresIn?: number; // e.g. '1h'
    // map a DB user to a public user returned to clients (default hides password)
    toPublicUser?(user: AuthUserWithPassword): AuthUserPublic;
}

export interface AuthUserService {
    findByEmail(email: string): Promise<AuthUserWithPassword | null>;
}

export interface AuthModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useFactory: (...args: any[]) => Promise<AuthModuleOptions> | AuthModuleOptions;
    inject?: any[];
}

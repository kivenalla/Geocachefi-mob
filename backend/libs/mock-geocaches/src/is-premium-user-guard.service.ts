import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from "../../auth/strategies/jwt.strategy";
import { User } from "@app/users/user.entity";


@Injectable()
export class IsPremiumUserGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const req = context.switchToHttp().getRequest();
        const jwtUser: JwtPayload & Pick<User, 'isGuestUser' | 'isPremiumUser' | 'isAdminUser'> = req.user;
        
        if (!jwtUser) {
            throw new UnauthorizedException('Not logged in');
        }
        if (!jwtUser.isPremiumUser) {
            throw new UnauthorizedException('Not premium user');
        }
        req.user = jwtUser;
        return true;
    }
}
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@app/users/user.entity";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "../../auth/strategies/jwt.strategy";
import { UsersController } from "@app/users/users.controller";
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: parseInt(process.env.JWT_EXPIRES || '28_800_000')  },
        }),
        ConfigModule,
    ],
    providers: [UsersService, JwtStrategy],
    controllers: [UsersController],
    exports: [UsersService,JwtModule],
})
export class UsersModule {}

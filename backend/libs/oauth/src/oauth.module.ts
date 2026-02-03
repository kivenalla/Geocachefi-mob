import { Module } from '@nestjs/common';
import { OAuthController } from './oauth.controller';
import { OAuthService } from './oauth.service';
import { ConfigModule } from '@nestjs/config';
import { GeocachingApiModule } from "@app/geocaching-api";
import { UsersModule } from "@app/users";

@Module({
  imports: [ConfigModule,GeocachingApiModule,UsersModule],
  controllers: [OAuthController],
  providers: [OAuthService],
})
export class OAuthModule {}

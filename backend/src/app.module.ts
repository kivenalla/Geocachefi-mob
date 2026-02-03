import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '@app/database';
import { UsersModule, UsersService } from '@app/users';
import { GeocachesModule } from '@app/geocaches';
import { MockGeocachesModule } from '@app/mock-geocaches';
import { OAuthModule } from 'libs/oauth/src/oauth.module';
import { AuthModule } from '@app/auth';
import { AUTH_USER_SERVICE } from '@app/auth/tokens';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { GeocachingAxiosModule } from "libs/geocaching-axios/src/geocaching-axios.module"

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, MockGeocachesModule, OAuthModule, GeocachesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
    }
}

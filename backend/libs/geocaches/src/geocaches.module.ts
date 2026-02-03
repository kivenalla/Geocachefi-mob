import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GeocachesService } from './geocaches.service';
import { GeocachesController } from './geocaches/geocaches.controller';
import { GeocachingApiModule } from '@app/geocaching-api';
import { UsersModule } from '@app/users';
import { GeocachingAxiosModule } from "libs/geocaching-axios/src/geocaching-axios.module"

@Module({
  imports: [ConfigModule, GeocachingApiModule, UsersModule, GeocachingAxiosModule],
  providers: [GeocachesService],
  exports: [GeocachesService],
  controllers: [GeocachesController],
})
export class GeocachesModule {}

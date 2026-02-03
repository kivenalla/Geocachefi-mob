import { Module } from '@nestjs/common';
import { MockGeocachesController } from './geocaches.controller';
import { MockGeocachesService } from './mock-geocaches.service';

@Module({
  controllers: [MockGeocachesController],
  providers: [MockGeocachesService],
  exports: [MockGeocachesService],
})
export class MockGeocachesModule {}
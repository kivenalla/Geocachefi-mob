import { Module } from '@nestjs/common';
import { GeneratedTypesService } from './generated-types.service';

@Module({
  providers: [GeneratedTypesService],
  exports: [GeneratedTypesService],
})
export class GeneratedTypesModule {}

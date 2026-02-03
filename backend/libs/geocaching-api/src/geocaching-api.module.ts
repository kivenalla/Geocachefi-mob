import { Module } from '@nestjs/common';
import { GeocachingApiService } from './geocaching-api.service';
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [ConfigModule],
    providers: [GeocachingApiService],
    exports: [GeocachingApiService],
})
export class GeocachingApiModule {
}

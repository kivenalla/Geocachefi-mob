import { Body, Controller, Get, NotFoundException, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { MockGeocachesService } from './mock-geocaches.service';
import { IsPremiumUserGuard } from './is-premium-user-guard.service';
import { SearchRequestDto } from './dto/search-request.dto';
import { DefaultControllerDecorator } from "@app/auth/decorators/default-public-controller.decorator";


@DefaultControllerDecorator()
@Controller('mockgeocaches')
export class MockGeocachesController {
    constructor(private readonly geocachesService: MockGeocachesService) {}
    
    
    @Get()
    list(@Query('limit') limit?: string) {
        return this.geocachesService.list(limit ? parseInt(limit, 10) : undefined);
    }
    
    
    @Get(':id')
    @UseGuards(IsPremiumUserGuard)
    getById(@Param('id') id: string, @Req() req: any) {
        const geoCache = this.geocachesService.findOne(id, req.user);
        if (!geoCache) throw new NotFoundException('No geocache found');
        return geoCache;
    }
    
    
    @Post('search')
    search(@Body() dto: SearchRequestDto) {
        return this.geocachesService.search(dto);
    }
    
    
    @Post('mapsearch')
    mapSearch(@Body() dto: SearchRequestDto) {
        return this.geocachesService.mapSearch(dto);
    }
}
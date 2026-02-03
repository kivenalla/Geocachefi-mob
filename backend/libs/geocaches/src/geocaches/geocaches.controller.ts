import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DefaultControllerDecorator } from "@app/auth/decorators/default-public-controller.decorator";
import { SearchRequestDto } from "@app/mock-geocaches/dto/search-request.dto";
import { CurrentUser, RequestUser } from "@app/auth";
import { GeocachesService } from "../geocaches.service";
import { UsersService } from "@app/users";

@Controller('geocaches')
@DefaultControllerDecorator()
export class GeocachesController {
    constructor(
        private readonly geocachesService: GeocachesService,
        private readonly usersService: UsersService
    ) {}

    @Get(':id')
    async getGeocache(
        @Param('id') referenceCode: string,
        @CurrentUser() requestUser: RequestUser,
        @Query('fields') fields?: string,
        @Query('expand') expand?: string,
    ) {
        const userId = requestUser?.sub;
    
        if (!userId) {
            throw new Error('User not authenticated');
        }
        const user = await this.usersService.findById(userId);

        if (!user.geocachingAccessToken) {
            throw new Error('No access token');
        }
        
        // Default to ALL fields if none specified
        const defaultFields = [
            'referenceCode',
            'name',
            'difficulty',
            'terrain',
            'favoritePoints',
            'trackableCount',
            'placedDate',
            'publishedDate',
            'ownerCode',
            'ownerAlias',
            'isPremiumOnly',
            'shortDescription',
            'longDescription',
            'hints',
            'url',
            'type',
            'geocacheSize',
            'location',
            'postedCoordinates',
            'lastVisitedDate',
            'userData',
            'relatedWebPage',
            'additionalWaypoints'
        ];

        // Default to ALL expand options if none specified
        const defaultExpand = [
            'images',
            'trackables',
            'geocachelogs',
            'userwaypoints'
        ];

        const fieldsList = fields ? fields.split(',') : defaultFields;
        const expandList = expand ? expand.split(',') : defaultExpand;

        try {
            const geocache = await this.geocachesService.getGeocache(
                user.geocachingAccessToken,
                referenceCode,
                userId,
                fieldsList,
                expandList,
            );

            console.log('✅ SUCCESS! Geocache data received');
            return geocache;
        } catch (error) {
            console.error('❌ ERROR:', error.message);
            throw error;
        }
    }
    
    @Post('search')
    async search(@Body() dto: SearchRequestDto, @CurrentUser() requestUser: RequestUser) {
        const userId = requestUser?.sub;
    
        if (!userId) {
            throw new Error('User not authenticated');
        }
        const user = await this.usersService.findById(userId);

        if (!user.geocachingAccessToken) {
            throw new Error('No access token');
        }

        return this.geocachesService.search(dto, user.geocachingAccessToken, userId);
    }

    // Mapsearch template, mostly copy pasted search to provide some functionality
    @Post('mapsearch')
    async mapsearch(@Body() dto: SearchRequestDto, @CurrentUser() requestUser: RequestUser) {
        const userId = requestUser?.sub;
    
        if (!userId) {
            throw new Error('User not authenticated');
        }
        const user = await this.usersService.findById(userId);

        if (!user.geocachingAccessToken) {
            throw new Error('No access token');
        }

        return this.geocachesService.mapsearch(dto, user.geocachingAccessToken, userId);
    }
}

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { GeocachingGeocache } from '@app/geocaching-api/generated/types/Api';
import { Filters } from '@app/mock-geocaches/interfaces/filters.interface';
import { GeocacheMapDetails } from '@app/mock-geocaches/interfaces/geocache.interface';
import axios, { AxiosInstance } from 'axios';
import { ConfigService } from '@nestjs/config';
import { GeocachingApiService } from '@app/geocaching-api/geocaching-api.service';
import { GeocachingAxiosInterceptor } from "libs/geocaching-axios/src/geocaching-axios.interceptor";

@Injectable()
export class GeocachesService {
  private readonly baseApiUrl;
  private readonly axiosInstance: AxiosInstance;

  constructor(
    private readonly configService: ConfigService,
    private readonly geocachingApiService: GeocachingApiService,
    private readonly geocachingInterceptor: GeocachingAxiosInterceptor,
  ) {
    let isProduction = this.configService.get('NODE_ENV') === 'production';
    this.baseApiUrl = isProduction
      ? 'https://api.groundspeak.com'
      : 'https://staging.api.groundspeak.com';
    this.axiosInstance = this.geocachingInterceptor.getAxiosInstance();
  }

  async getGeocache(
    accessToken: string,
    referenceCode: string,
    userId: string,
    fields?: string[],
    expand?: string[],
    useLite: boolean = false,
  ): Promise<any> {
    try {
      const params = new URLSearchParams();
      
      if (useLite) {
        params.append('lite', 'true');
      }
      
      if (fields && fields.length > 0) {
        params.append('fields', fields.join(','));
      }
      if (expand && expand.length > 0) {
        params.append('expand', expand.join(','));
      }

      const queryString = params.toString() ? `?${params.toString()}` : '';
      const response = await this.axiosInstance.get(
        `${this.geocachingApiService.getBaseApiUrl()}/v1/geocaches/${referenceCode}${queryString}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          userId: userId,
        },
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          throw new NotFoundException(`Geocache ${referenceCode} not found`);
        }
        
        if (error.response?.status === 403 && !useLite) {
          const errorMessage = error.response?.data?.errorMessage || '';
          if (errorMessage.toLowerCase().includes('cannot get more than 3 geocaches')) {
            console.log(`Daily limit reached for ${referenceCode}, falling back to lite geocache details`);
            return this.getGeocache(accessToken, referenceCode, userId, fields, undefined, true);
          }
        }
        
        console.error(
          'Geocaching API error:',
          error.response?.status,
          error.response?.data,
        );
      }
      throw new InternalServerErrorException(
        `Failed to fetch geocache: ${error.message}`,
      );
    }
  }

  async search(
    body: { filters: Filters; orderBy?: string; skip?: number; take?: number },
    geocachingAccessToken: string, userId: string,
  ) {
    const { filters, orderBy, skip, take } = body;

    // Default to Helsinki if no location is provided
    const defaultLocation = { lat: 60.17, lng: 24.94 };
    const center = filters.centerPoint ?? defaultLocation;
    const maxDistance = Math.round(filters.maxDistance ?? 50);

    const order = 'pdate-';

    const params = new URLSearchParams();
    params.append(
      'q',
      `location:[${center.lat},${center.lng}]+radius:${maxDistance}km`,
    );
    params.append('sort', `${order}`);
    params.append('skip', `${skip}`);
    params.append('take', `${take}`);
    params.append('fields', 'referenceCode,placedDate,name,type');

    try {
      const response = await this.axiosInstance.get<Array<GeocachingGeocache>>(
        `${this.baseApiUrl}/v1/geocaches/search${params.toString() ? `?${params.toString()}` : ''}`,
        {
          headers: {
            Authorization: `Bearer ${geocachingAccessToken}`,
            'Content-Type': 'application/json',
          },
          userId: userId,
        },
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          'Geocaching API error:',
          error.response?.status,
          error.response?.data,
        );
      }
      throw new Error('Failed to fetch geocaches.');
    }
  }

  async mapsearch(
    body: { filters: Filters; orderBy?: string; skip?: number; take?: number },
    geocachingAccessToken: string,
    userId: string,
  ): Promise<GeocacheMapDetails[]> {
    if (!geocachingAccessToken) {
      throw new UnauthorizedException('No access token provided');
    }

    const { filters, orderBy, skip, take } = body;

    const defaultLocation = { lat: 60.17, lng: 24.94 };
    const center = filters.centerPoint ?? defaultLocation;
    const maxDistance = Math.round(filters.maxDistance ?? 50);

    const sortMapping: Record<string, string> = {
      newest: 'pdate-',
      oldest: 'pdate+',
    };
    const sort = orderBy && sortMapping[orderBy] ? sortMapping[orderBy] : 'pdate-';

    const maxTake = 50;
    const effectiveTake = take ? Math.min(take, maxTake) : maxTake;

    const queryParts: string[] = [];

    queryParts.push(`location:[${center.lat},${center.lng}]+radius:${maxDistance}km`);

    const activeKeys = (obj?: Record<string, boolean>): string[] =>
      obj ? Object.keys(obj).filter((k): k is string => obj[k] === true) : [];

    const allowedCacheTypes = activeKeys(filters.cacheTypes);
    if (allowedCacheTypes.length) {
      const typeMapping: Record<string, number> = {
        peruskätkö: 2,
        multikätkö: 3,
        mysteerikätkö: 8,
        geolodju: 137,
        geokohde: 4,
        whereigokätkö: 1858,
        virtuaalikätkö: 4,
        webcamkätkö: 11,
        tapahtuma: 6,
        megatapahtuma: 453,
        siivoustapahtuma: 13,
        yhteisöjuhla: 3653,
      };
      const typeIds = allowedCacheTypes.map((t) => typeMapping[t]).filter((id) => id !== undefined);
      if (typeIds.length) queryParts.push(`type:${typeIds.join(',')}`);
    }

    const allowedSizes = activeKeys(filters.size);
    if (allowedSizes.length) {
      const sizeMapping: Record<string, number> = {
        tuntematon: 1,
        mikro: 2,
        pieni: 8,
        normaali: 3,
        suuri: 4,
        virtuaali: 5,
        muu: 6,
      };
      const sizeIds = allowedSizes.map((s) => sizeMapping[s]).filter((id) => id !== undefined);
      if (sizeIds.length) queryParts.push(`size:${sizeIds.join(',')}`);
    }

    const appendNumericFilter = (filterObj?: Record<string, boolean>, alias?: string) => {
      if (!filterObj || !alias) return;
      const values = activeKeys(filterObj)
        .map(Number)
        .filter((n) => !isNaN(n));
      if (!values.length) return;

      if (values.length === 2 && values[1] - values[0] === 1) {
        queryParts.push(`${alias}:${values[0]}-${values[1]}`);
      } else {
        queryParts.push(`${alias}:${values.join(',')}`);
      }
    };

    appendNumericFilter(filters.difficulty, 'diff');
    appendNumericFilter(filters.terrain, 'terr');

    if (filters.nameContains) queryParts.push(`name:${filters.nameContains}`);

    if (filters.isPublic) {
      if (filters.isPublic === 'julkaistu') queryParts.push('level:basic');
      else if (filters.isPublic === 'piilotettu') queryParts.push('level:premium');
    }

    const parseDate = (d?: { day: string; month: string; year: string }): string | null => {
      if (!d) return null;
      const y = d.year.padStart(4, '0');
      const m = d.month.padStart(2, '0');
      const da = d.day.padStart(2, '0');
      return `${y}-${m}-${da}`;
    };
    const sinceDate = parseDate(filters.publicSince);
    const untilDate = parseDate(filters.publicUntil);
    if (sinceDate || untilDate) {
      queryParts.push(`pld:[${sinceDate || ''},${untilDate || ''}]`);
    }

    const attributeConfig: Record<string, { attributeId: number; shouldBeOn?: boolean }> = {
      dogsYes: { attributeId: 1, shouldBeOn: true },
      dogsNo: { attributeId: 1, shouldBeOn: false },
      accessYes: { attributeId: 2 },
      climbingGearYes: { attributeId: 3 },
      boatYes: { attributeId: 4 },
      scubaGearYes: { attributeId: 5 },
      kidsYes: { attributeId: 6, shouldBeOn: true },
      kidsNo: { attributeId: 6, shouldBeOn: false },
      lessThanOneHourYes: { attributeId: 7, shouldBeOn: true },
      lessThanOneHourNo: { attributeId: 7, shouldBeOn: false },
      scenicViewYes: { attributeId: 8, shouldBeOn: true },
      scenicViewNo: { attributeId: 8, shouldBeOn: false },
      significantHikeYes: { attributeId: 9, shouldBeOn: true },
      significantHikeNo: { attributeId: 9, shouldBeOn: false },
      difficultClimbYes: { attributeId: 10, shouldBeOn: true },
      difficultClimbNo: { attributeId: 10, shouldBeOn: false },
      wadingYes: { attributeId: 11 },
      swimmingYes: { attributeId: 12 },
      available247Yes: { attributeId: 13, shouldBeOn: true },
      available247No: { attributeId: 13, shouldBeOn: false },
      recommendedAtNightYes: { attributeId: 14, shouldBeOn: true },
      recommendedAtNightNo: { attributeId: 14, shouldBeOn: false },
      winterYes: { attributeId: 15, shouldBeOn: true },
      winterNo: { attributeId: 15, shouldBeOn: false },
      cactusYes: { attributeId: 16, shouldBeOn: true },
      cactusNo: { attributeId: 16, shouldBeOn: false },
      poisonousPlantsYes: { attributeId: 17, shouldBeOn: true },
      poisonousPlantsNo: { attributeId: 17, shouldBeOn: false },
      dangerousAnimalsYes: { attributeId: 18 },
      ticksYes: { attributeId: 19 },
      abandonedMineYes: { attributeId: 20 },
      cliffYes: { attributeId: 21 },
      huntingAreaYes: { attributeId: 22 },
      dangerousAreaYes: { attributeId: 23 },
      wheelchairYes: { attributeId: 24, shouldBeOn: true },
      wheelchairNo: { attributeId: 24, shouldBeOn: false },
      parkingNearbyYes: { attributeId: 25, shouldBeOn: true },
      parkingNearbyNo: { attributeId: 25, shouldBeOn: false },
      publicTransportationYes: { attributeId: 26 },
      drinkingWaterYes: { attributeId: 27, shouldBeOn: true },
      drinkingWaterNo: { attributeId: 27, shouldBeOn: false },
      restroomsYes: { attributeId: 28, shouldBeOn: true },
      restroomsNo: { attributeId: 28, shouldBeOn: false },
      telephoneYes: { attributeId: 29, shouldBeOn: true },
      telephoneNo: { attributeId: 29, shouldBeOn: false },
      picnicTablesNearbyYes: { attributeId: 30, shouldBeOn: true },
      picnicTablesNearbyNo: { attributeId: 30, shouldBeOn: false },
      campingNearbyYes: { attributeId: 31, shouldBeOn: true },
      campingNearbyNo: { attributeId: 31, shouldBeOn: false },
      bicyclesYes: { attributeId: 32, shouldBeOn: true },
      bicyclesNo: { attributeId: 32, shouldBeOn: false },
      motorcyclesYes: { attributeId: 33, shouldBeOn: true },
      motorcyclesNo: { attributeId: 33, shouldBeOn: false },
      quadsYes: { attributeId: 34, shouldBeOn: true },
      quadsNo: { attributeId: 34, shouldBeOn: false },
      offRoadVehiclesYes: { attributeId: 35, shouldBeOn: true },
      offRoadVehiclesNo: { attributeId: 35, shouldBeOn: false },
      snowmobilesYes: { attributeId: 36, shouldBeOn: true },
      snowmobilesNo: { attributeId: 36, shouldBeOn: false },
      horsesYes: { attributeId: 37, shouldBeOn: true },
      horsesNo: { attributeId: 37, shouldBeOn: false },
      campfiresYes: { attributeId: 38, shouldBeOn: true },
      campfiresNo: { attributeId: 38, shouldBeOn: false },
      thornsYes: { attributeId: 39 },
      stealthRequiredYes: { attributeId: 40, shouldBeOn: true },
      stealthRequiredNo: { attributeId: 40, shouldBeOn: false },
      strollerYes: { attributeId: 41, shouldBeOn: true },
      strollerNo: { attributeId: 41, shouldBeOn: false },
      needsMaintenanceYes: { attributeId: 42 },
      livestockYes: { attributeId: 43 },
      flashlightYes: { attributeId: 44 },
      lostFoundTourYes: { attributeId: 45, shouldBeOn: true },
      lostFoundTourNo: { attributeId: 45, shouldBeOn: false },
      trucksRVsYes: { attributeId: 46, shouldBeOn: true },
      trucksRVsNo: { attributeId: 46, shouldBeOn: false },
      fieldPuzzleYes: { attributeId: 47, shouldBeOn: true },
      fieldPuzzleNo: { attributeId: 47, shouldBeOn: false },
      uvLightYes: { attributeId: 48 },
      snowshoesYes: { attributeId: 49 },
      crossCountrySkisYes: { attributeId: 50 },
      specialToolRequiredYes: { attributeId: 51 },
      nightCacheYes: { attributeId: 52, shouldBeOn: true },
      nightCacheNo: { attributeId: 52, shouldBeOn: false },
      parkAndGrabYes: { attributeId: 53, shouldBeOn: true },
      parkAndGrabNo: { attributeId: 53, shouldBeOn: false },
      abandonedStructureYes: { attributeId: 54, shouldBeOn: true },
      abandonedStructureNo: { attributeId: 54, shouldBeOn: false },
      shortHikeYes: { attributeId: 55, shouldBeOn: true },
      shortHikeNo: { attributeId: 55, shouldBeOn: false },
      mediumHikeYes: { attributeId: 56, shouldBeOn: true },
      mediumHikeNo: { attributeId: 56, shouldBeOn: false },
      longHikeYes: { attributeId: 57, shouldBeOn: true },
      longHikeNo: { attributeId: 57, shouldBeOn: false },
      fuelNearbyYes: { attributeId: 58, shouldBeOn: true },
      fuelNearbyNo: { attributeId: 58, shouldBeOn: false },
      foodNearbyYes: { attributeId: 59, shouldBeOn: true },
      foodNearbyNo: { attributeId: 59, shouldBeOn: false },
      wirelessBeaconYes: { attributeId: 60 },
      partnershipCacheYes: { attributeId: 61, shouldBeOn: true },
      partnershipCacheNo: { attributeId: 61, shouldBeOn: false },
      seasonalAccessYes: { attributeId: 62, shouldBeOn: true },
      seasonalAccessNo: { attributeId: 62, shouldBeOn: false },
      recommendedForTouristsYes: { attributeId: 63, shouldBeOn: true },
      recommendedForTouristsNo: { attributeId: 63, shouldBeOn: false },
      treeClimbingYes: { attributeId: 64, shouldBeOn: true },
      treeClimbingNo: { attributeId: 64, shouldBeOn: false },
      yardYes: { attributeId: 65, shouldBeOn: true },
      yardNo: { attributeId: 65, shouldBeOn: false },
      teamworkCacheYes: { attributeId: 66, shouldBeOn: true },
      teamworkCacheNo: { attributeId: 66, shouldBeOn: false },
      geoTourYes: { attributeId: 67, shouldBeOn: true },
      geoTourNo: { attributeId: 67, shouldBeOn: false },
      bonusCacheYes: { attributeId: 69 },
      powerTrailYes: { attributeId: 70 },
      challengeCacheYes: { attributeId: 71 },
      solutionCheckerYes: { attributeId: 72 },
    };

    const allowedAttributes = activeKeys(filters.attributes);
    if (allowedAttributes.length) {
      const uniqueAttrIds = Array.from(
        new Set(
          allowedAttributes
            .map((a) => attributeConfig[a]?.attributeId)
            .filter((id) => id !== undefined)
        )
      );
      if (uniqueAttrIds.length) queryParts.push(`attr:${uniqueAttrIds.join(',')}`);
    }

    const queryString = queryParts.join('+');

    const params = new URLSearchParams();
    params.append('q', queryString);
    params.append('sort', sort);
    params.append('take', `${effectiveTake}`);
    if (skip) params.append('skip', `${skip}`);

    const fieldsToRequest = [
      'referenceCode',
      'postedCoordinates',
      'type',
      'name',
      'placedDate',
      'attributes',
      'isPremiumOnly',
      'size',
      'difficulty',
      'terrain',
    ];
    if (filters.description) fieldsToRequest.push('shortDescription', 'longDescription');
    params.append('fields', fieldsToRequest.join(','));

    try {
      const response = await this.axiosInstance.get<GeocachingGeocache[]>(
        `${this.baseApiUrl}/v1/geocaches/search?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${geocachingAccessToken}`,
            'Content-Type': 'application/json',
          },
          userId,
        },
      );

      let result = response.data.filter(
        (c) =>
          c.referenceCode &&
          c.postedCoordinates?.latitude !== undefined &&
          c.postedCoordinates?.longitude !== undefined,
      );

      if (filters.description) {
        const query = filters.description.toLowerCase();
        result = result.filter(
          (c) =>
            c.shortDescription?.toLowerCase().includes(query) ||
            c.longDescription?.toLowerCase().includes(query),
        );
      }

      const allowedAttributes = activeKeys(filters.attributes);
      if (allowedAttributes.length) {
        result = result.filter((cache) => {
          return allowedAttributes.every((attrKey) => {
            const config = attributeConfig[attrKey];
            if (!config) return true; 
            
            if (config.shouldBeOn === undefined) {
              return cache.attributes?.some((attr: any) => attr.id === config.attributeId);
            }
            
            return cache.attributes?.some(
              (attr: any) => attr.id === config.attributeId && attr.isOn === config.shouldBeOn
            );
          });
        });
      }

      return result.map((c) => ({
        referenceCode: c.referenceCode!,
        postedCoordinates: {
          latitude: c.postedCoordinates!.latitude!,
          longitude: c.postedCoordinates!.longitude!,
        },
        type: c.type || 'Unknown',
      }));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401)
          throw new UnauthorizedException('Access token is invalid or expired');
      }
      throw new InternalServerErrorException('Failed to fetch geocaches for map.');
    }
  }

}

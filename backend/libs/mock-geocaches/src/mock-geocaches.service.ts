import { Injectable } from '@nestjs/common';
import { Geocache, GeocacheMapDetails } from "@app/mock-geocaches/interfaces/geocache.interface";
import { generateGeoCaches } from "@app/mock-geocaches/util/generate-geocaches";
import { Filters } from "@app/mock-geocaches/interfaces/filters.interface";
import { meterDistance, sortByDate } from "@app/mock-geocaches/util/geo";
const LIMIT_DEFAULT = 100;


@Injectable()
export class MockGeocachesService {
    private geocaches: Geocache[] = generateGeoCaches(1000);
    
    
    list(limit?: number) {
        return this.geocaches.slice(0, limit ?? LIMIT_DEFAULT);
    }
    
    
    findOne(id: string, user: { isPremium: boolean }): Geocache | undefined {
        const g = this.geocaches.find((gc) => gc.referenceCode === id);
        if (!g) return undefined;
        if (g.isPremiumOnly && !user.isPremium) {
            return {
                ...g,
                postedCoordinates: { latitude: undefined, longitude: undefined },
            };
        }
        return g;
    }
    
    
    search(body: { filters: Filters; orderBy?: 'newest'; skip?: number; take?: number }) {
        const { filters, orderBy, skip, take } = body;
        let result = [...this.geocaches];
        
        
        const center = filters.centerPoint;
        const distance = filters.maxDistance; // km
        
        
        if (center && distance) {
            result = result.filter((c) => {
                const distKm =
                    meterDistance(center, {
                        lat: c.postedCoordinates.latitude!,
                        lng: c.postedCoordinates.longitude!,
                    }) / 1000;
                return distKm <= distance;
            });
        }
        
        
        if (orderBy === 'newest') result = result.sort(sortByDate);
        
        
        if (skip) result = result.slice(skip);
        if (take) result = result.slice(0, take);
        
        
        if (!skip && !take) result = result.slice(0, filters.limit ?? LIMIT_DEFAULT);
        
        
        return result;
    }
    
    
    mapSearch(body: { filters: Filters; orderBy?: 'newest' }): GeocacheMapDetails[] {
        const { filters, orderBy } = body;
        let result = [...this.geocaches];
        
        
        const center = filters.centerPoint;
        const distance = filters.maxDistance; // km
        
        
        if (center && distance) {
            result = result.filter((c) => {
                const distKm =
                    meterDistance(center, {
                        lat: c.postedCoordinates.latitude!,
                        lng: c.postedCoordinates.longitude!,
                    }) / 1000;
                return distKm <= distance;
            });
        }
        
        
        if (orderBy === 'newest') result = result.sort(sortByDate);
        
        
        result = result.slice(0, filters.limit ?? LIMIT_DEFAULT);
        
        
        return result.map((c) => ({
            referenceCode: c.referenceCode,
            postedCoordinates: {
                latitude: c.postedCoordinates.latitude!,
                longitude: c.postedCoordinates.longitude!,
            },
            type: c.type,
        }));
    }
}
import { Injectable } from '@nestjs/common';
import {
  Geocache,
  GeocacheMapDetails,
} from '@app/mock-geocaches/interfaces/geocache.interface';
import { generateGeoCaches } from '@app/mock-geocaches/util/generate-geocaches';
import { Filters } from '@app/mock-geocaches/interfaces/filters.interface';
import { meterDistance, sortByDate } from '@app/mock-geocaches/util/geo';
import { GeoCacheType } from '@app/mock-geocaches/interfaces/geocache.interface';
const LIMIT_DEFAULT = 100;

@Injectable()
export class GeocachesService {
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

  search(body: {
    filters: Filters;
    orderBy?: 'newest';
    skip?: number;
    take?: number;
  }) {
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

    if (!skip && !take)
      result = result.slice(0, filters.limit ?? LIMIT_DEFAULT);

    return result;
  }

  mapSearch(body: { filters: Filters; orderBy?: 'newest' }): GeocacheMapDetails[] {
  const { filters, orderBy } = body;
  let result: Geocache[] = [...this.geocaches];

  const {
    centerPoint,
    maxDistance,
    cacheTypes,
    size,
    difficulty,
    terrain,
    nameContains,
    description,
    isPublic,
    publicSince,
    publicUntil,
    attributes,
  } = filters;

  if (centerPoint && maxDistance != null) {
    result = result.filter((c) => {
      const lat = c.postedCoordinates.latitude ?? 0;
      const lng = c.postedCoordinates.longitude ?? 0;
      const distKm = meterDistance(centerPoint, { lat, lng }) / 1000;
      return distKm <= maxDistance;
    });
  }

  const activeKeys = (obj?: Record<string, boolean>): string[] =>
    obj ? Object.keys(obj).filter((k): k is string => obj[k] === true) : [];

  const allowedCacheTypes = activeKeys(cacheTypes);
  if (allowedCacheTypes.length > 0) {
    result = result.filter((c) => allowedCacheTypes.includes(c.type));
  }

  const allowedSizes = activeKeys(size);
  if (allowedSizes.length > 0) {
    result = result.filter((c) => allowedSizes.includes(c.size));
  }

  const allowedDifficulties = activeKeys(difficulty)
    .map(Number)
    .filter((n) => !isNaN(n));
  if (allowedDifficulties.length > 0) {
    result = result.filter((c) => allowedDifficulties.includes(c.difficulty));
  }

  const allowedTerrains = activeKeys(terrain)
    .map(Number)
    .filter((n) => !isNaN(n));
  if (allowedTerrains.length > 0) {
    result = result.filter((c) => allowedTerrains.includes(c.terrain));
  }

  const allowedAttributes: string[] = activeKeys(attributes);
  if (allowedAttributes.length > 0) {
    result = result.filter((c) => {
      if (!c.attributes) return false;
      return Object.keys(c.attributes).some(
        (key) => c.attributes![key] === true && allowedAttributes.includes(key)
      );
    });
  }

  if (nameContains) {
    const query = nameContains.toLowerCase();
    result = result.filter((c) => c.name?.toLowerCase().includes(query));
  }

  if (description) {
    const query = description.toLowerCase();
    result = result.filter(
      (c) =>
        c.shortDescription?.toLowerCase().includes(query) ||
        c.longDescription?.toLowerCase().includes(query)
    );
  }

  if (isPublic) {
    if (isPublic === 'julkaistu') result = result.filter((c) => !c.isPremiumOnly);
    else if (isPublic === 'piilotettu') result = result.filter((c) => c.isPremiumOnly);
  }

  const parseDate = (d?: { day: string; month: string; year: string }): Date | null => {
    if (!d) return null;
    const y = parseInt(d.year, 10);
    const m = parseInt(d.month, 10) - 1;
    const da = parseInt(d.day, 10);
    return new Date(y, m, da);
  };

  const sinceDate = parseDate(publicSince);
  const untilDate = parseDate(publicUntil);

  if (sinceDate) result = result.filter((c) => new Date(c.placedDate) >= sinceDate);
  if (untilDate) result = result.filter((c) => new Date(c.placedDate) <= untilDate);

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

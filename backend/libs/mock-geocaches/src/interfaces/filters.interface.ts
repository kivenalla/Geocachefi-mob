export interface Filters {
  centerPoint?: { lat: number; lng: number };
  maxDistance?: number;
  limit?: number;

  cacheTypes?: Record<string, boolean>;
  size?: Record<string, boolean>;
  difficulty?: Record<string, boolean>;
  terrain?: Record<string, boolean>;
  attributes?: Record<string, boolean>;

  nameContains?: string;
  description?: string;

  isPublic?: string;

  publicSince?: {
    day: string;
    month: string;
    year: string;
  };

  publicUntil?: {
    day: string;
    month: string;
    year: string;
  };

  customRule?: string;
}

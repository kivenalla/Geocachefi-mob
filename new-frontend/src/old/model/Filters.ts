import { LatLng } from "leaflet";

export interface Attributes {
    abandonedStructureYes?: boolean;
    abandonedStructureNo?: boolean;

    available247Yes?: boolean;
    available247No?: boolean;

    bicyclesYes?: boolean;
    bicyclesNo?: boolean;

    difficultClimbYes?: boolean;
    difficultClimbNo?: boolean;

    fieldPuzzleYes?: boolean;
    fieldPuzzleNo?: boolean;

    shortHikeYes?: boolean;
    shortHikeNo?: boolean;

    nightCacheYes?: boolean;
    nightCacheNo?: boolean;

    parkingNearbyYes?: boolean;
    parkingNearbyNo?: boolean;

    parkAndGrabYes?: boolean;
    parkAndGrabNo?: boolean;

    teamworkCacheYes?: boolean;
    teamworkCacheNo?: boolean;

    treeClimbingYes?: boolean;
    treeClimbingNo?: boolean;

    winterYes?: boolean;
    winterNo?: boolean;
}


export interface CacheTypes {
    peruskätkö?: boolean;
    multikätkö?: boolean;
    mysteerikätkö?: boolean;
    geolodju?: boolean;
    geokohde?: boolean;
    whereigokätkö?: boolean;
    virtuaalikätkö?: boolean;
    webcamkätkö?: boolean;
    tapahtuma?: boolean;
    megatapahtuma?: boolean;
    siivoustapahtuma?: boolean;
    yhteisöjuhla?: boolean;
    vainOmiaMerkittyjäSisältäenMysteerit?: boolean;
    vainOmiaMerkittyjäSisältäenMultit?: boolean;
    vainRatkaistutMysteerit?: boolean;
    vainRatkaistutMultit?: boolean;
}

export interface CacheSize {
    mikro?: boolean;
    pieni?: boolean;
    normaali?: boolean;
    suuri?: boolean;
    virtuaali?: boolean;
    muu?: boolean;
    tuntematon?: boolean;
}

export interface Difficulty {
    1?: boolean;
    1.5?: boolean;
    2?: boolean;
    2.5?: boolean;
    3?: boolean;
    3.5?: boolean;
    4?: boolean;
    4.5?: boolean;
    5?: boolean;
}

export interface Terrain {
    1?: boolean;
    1.5?: boolean;
    2?: boolean;
    2.5?: boolean;
    3?: boolean;
    3.5?: boolean;
    4?: boolean;
    4.5?: boolean;
    5?: boolean;
}

export interface StartEndDate{
    day?: string,
    month?: string,
    year?: string
} 
  

export const initFilters: Filters = {};

export const DEFAULT_IS_PUBLIC = "julkaistu";

export interface Filters{
    limit?: number
    customRule?: string
    maxDistance?: number
    cacheTypes?: CacheTypes
    size?: CacheSize
    nameContains?: string
    description?: string
    difficulty?: Difficulty
    terrain?: Terrain
    isPublic?: string
    publicSince?: StartEndDate
    publicUntil?: StartEndDate
    attributesSelectType?: string
    attributes?: Attributes
    centerPoint?: LatLng
}

export type GeoCacheType =
  | 'peruskätkö'
  | 'multikätkö'
  | 'mysteerikätkö'
  | 'geolodju'
  | 'geokohde'
  | 'whereigokätkö'
  | 'virtuaalikätkö'
  | 'webcamkätkö'
  | 'tapahtuma'
  | 'megatapahtuma'
  | 'siivoustapahtuma'
  | 'yhteisöjuhla';

export interface Attributes {
  abandonedBuildingNo?: boolean;
  abandonedBuildingYes?: boolean;
  availableNo?: boolean;
  availableYes?: boolean;
  bicyclesNo?: boolean;
  bicyclesYes?: boolean;
  boatYes?: boolean;
  challengecacheYes?: boolean;
  climbingNo?: boolean;
  climbingYes?: boolean;
  fieldPuzzleNo?: boolean;
  fieldPuzzleYes?: boolean;
  flashlightYes?: boolean;
  hikeShortNo?: boolean;
  hikeShortYes?: boolean;
  mineYes?: boolean;
  nightNo?: boolean;
  nightYes?: boolean;
  parkingNo?: boolean;
  parkingYes?: boolean;
  parkngrabNo?: boolean;
  parkngrabYes?: boolean;
  powertrailYes?: boolean;
  rappellingYes?: boolean;
  snowshoesYes?: boolean;
  sToolYes?: boolean;
  teamworkNo?: boolean;
  teamworkYes?: boolean;
  treeclimbingNo?: boolean;
  treeclimbingYes?: boolean;
  uVYes?: boolean;
  wadingYes?: boolean;
  winterNo?: boolean;
  winterYes?: boolean;
}

export interface Coordinates {
  latitude?: number;
  longitude?: number;
}

export interface Geocache {
  referenceCode: string;
  name: string;
  placedDate: string;
  publishedDate: string;
  type: GeoCacheType | string;
  size: string;
  postedCoordinates: Coordinates;
  lastVisitedDate: string;
  isPremiumOnly: boolean;
  shortDescription: string;
  longDescription: string;
  hints: string;
  location: {
    country: string;
    countryId: number;
    state: string;
    stateId: number;
  };
  ownerAlias: string;
  difficulty: number;
  terrain: number;
  attributes?: Attributes;
}

export interface GeocacheMapDetails {
  referenceCode: string;
  postedCoordinates: Required<Coordinates>;
  type: Geocache['type'];
}

/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface GeocachingAdventureModel {
  /** @format uuid */
  id?: string;
  firebaseDynamicLink?: string;
  deeplink?: string;
  adventureType?: GeocachingAdventureModelAdventureTypeEnum;
  stages?: GeocachingStageSummary[];
}

export interface GeocachingStageSummary {
  /** @format uuid */
  id?: string;
  title?: string;
  stageImageUrl?: string;
  isComplete?: boolean;
  description?: string;
  location?: GeocachingGeoLocation;
}

export interface GeocachingGeoLocation {
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

export interface GeocachingAdventureBasicInfoModel {
  /**
   * The Adventure Guid.
   * @format uuid
   */
  id?: string;
  /** The url to the Adventure's theme image. */
  keyImageUrl?: string;
  /** The coordinate location of the Adventure. */
  location?: GeocachingCoordinate;
  /** Text describing the adventure. */
  description?: string;
  /** The title of the Adventure. */
  title?: string;
  /**
   * Nullable, if no ratings exist. The average rating of the Adventure.
   * @format double
   */
  ratingsAverage?: number;
  /**
   * The total count of ratings of the Adventure.
   * @format int32
   */
  ratingsTotalCount?: number;
  /**
   * The count of stages in the Adventure.
   * @format int32
   */
  stagesTotalCount?: number;
  /**
   * (Obsolete) The Firebase Dynamimc Link.
   * It is essentially a shortened deeplink into the app, stored in Firebase. Now obsolete, use DeepLink instead.
   */
  dynamicLink?: string;
  /** The deeplink for the adventure, replaces DynamicLink. */
  deepLink?: string;
  /** true if Adventure is owned by the requesting user; otherwise, false. */
  isOwned?: boolean;
  /** true if Adventure has been completed by the requesting user; otherwise, false. */
  isCompleted?: boolean;
  /** The type of structure of the adventure's stages */
  adventureType?: GeocachingAdventureBasicInfoModelAdventureTypeEnum;
}

export interface GeocachingCoordinate {
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

export interface GeocachingStageSearchModel {
  /**
   * Amount of hits to take, return.
   * @format int32
   */
  take?: number;
  /**
   * Search radius. In Meters.
   * @format double
   */
  radiusInMeters?: number;
  /** The origin location to search. */
  origin?: GeocachingGeoLocation;
  /** List of adventures to exclude from the search results. */
  excludedAdventures?: string[];
  /** true to exclude results that are owned by the requesting user; otherwise, false. */
  excludeOwned?: boolean;
  /** true to exclude results that are completed by the requesting user; otherwise, false. */
  excludeCompleted?: boolean;
  /** true to exclude sequential stages that are unplayable by the requesting user; otherwise, false. */
  excludeUnplayable?: boolean;
  /** A list of adventure types to filter by when searching. If null, all adventure types will be returned. */
  adventureTypes?: GeocachingStageSearchModelAdventureTypesEnum[];
}

export interface GeocachingStageSearchResponse {
  /**
   * The Guid of the stage.
   * @format uuid
   */
  stageGuid?: string;
  /** The location of the stage. */
  location?: GeocachingGeoLocation;
  /** The title of the stage. */
  title?: string;
  /** The Url to the stage's key image. */
  keyImageUrl?: string;
  /** Whether the calling user has completed the stage. */
  isComplete?: boolean;
  /** The adventure the stage belongs to. */
  adventure?: GeocachingStageAdventure;
}

export interface GeocachingStageAdventure {
  /**
   * The Guid identifier of the stage's adventure.
   * @format uuid
   */
  id?: string;
  /** The stage's adventure's type. */
  adventureType?: GeocachingStageAdventureAdventureTypeEnum;
}

export interface GeocachingFriendRequest {
  /** @format int32 */
  id?: number;
  requestorUserCode?: string;
  requestor?: GeocachingUserReference;
  requestedUserCode: string;
  requested?: GeocachingUserReference;
  message: string;
  isOutgoing?: boolean;
  /** @format date-time */
  requestDateUtc?: string;
}

export interface GeocachingUserReference {
  referenceCode?: string;
  username?: string;
  avatarUrl?: string;
}

export interface GeocachingUser {
  /** @format int32 */
  membershipLevelId?: number;
  /** @format date-time */
  joinedDateUtc?: string;
  /** @format int32 */
  findCount?: number;
  /** @format int32 */
  hideCount?: number;
  /** @format int32 */
  favoritePoints?: number;
  /** @format int32 */
  awardedFavoritePoints?: number;
  homeCoordinates?: GeocachingCoordinates;
  geocacheLimits?: GeocachingGeocacheLimit;
  profileText?: string;
  bannerUrl?: string;
  url?: string;
  isFriend?: boolean;
  optedInFriendSharing?: boolean;
  allowsFriendRequests?: boolean;
  /** @format int32 */
  souvenirCount?: number;
  /** @format int32 */
  trackableFindCount?: number;
  /** @format int32 */
  trackableOwnedCount?: number;
  geocacheFindCounts?: GeocachingGeocacheCount[];
  geocacheHideCounts?: GeocachingGeocacheCount[];
  trackableFindCounts?: GeocachingTrackableCount[];
  trackableOwnedCounts?: GeocachingTrackableCount[];
  referenceCode?: string;
  username?: string;
  avatarUrl?: string;
}

export interface GeocachingCoordinates {
  /** @format double */
  latitude: number;
  /** @format double */
  longitude: number;
}

export interface GeocachingGeocacheLimit {
  /** @format int32 */
  liteCallsRemaining?: number;
  /** @format int32 */
  liteCallsSecondsToLive?: number;
  /** @format int32 */
  fullCallsRemaining?: number;
  /** @format int32 */
  fullCallsSecondsToLive?: number;
}

export interface GeocachingGeocacheCount {
  geocacheType?: GeocachingGeocacheTypeModel;
  /** @format int32 */
  count?: number;
}

export interface GeocachingTrackableCount {
  trackableType?: GeocachingTrackableType;
  /** @format int32 */
  count?: number;
}

export interface GeocachingGeocacheTypeModel {
  /** @format int32 */
  id?: number;
  name?: string;
  imageUrl?: string;
}

export interface GeocachingTrackableType {
  /** @format int32 */
  id?: number;
  name?: string;
  imageUrl?: string;
}

export interface GeocachingGeocacheLog {
  referenceCode?: string;
  ownerCode?: string;
  owner?: GeocachingUser;
  /** @format int32 */
  imageCount?: number;
  isEncoded?: boolean;
  isArchived?: boolean;
  images?: GeocachingImage[];
  url?: string;
  geocacheName?: string;
  geocacheType?: GeocachingGeocacheTypeModel;
  ianaTimezoneId?: string;
  upvoteTypeCounts?: GeocachingUpvoteTypeCount[];
  upvoteData?: GeocachingGeocacheLogUpvote;
  /** @format date-time */
  loggedDate: string;
  text: string;
  type?: string;
  geocacheLogType?: GeocachingGeocacheLogType;
  updatedCoordinates?: GeocachingCoordinates;
  geocacheCode: string;
  usedFavoritePoint?: boolean;
}

export interface GeocachingImage {
  ownerCode?: string;
  ownerUserName?: string;
  url?: string;
  thumbnailUrl?: string;
  largeUrl?: string;
  referenceCode?: string;
  /** @format date-time */
  createdDate?: string;
  /** @format date-time */
  capturedDate?: string;
  name?: string;
  /** Description of the image */
  description?: string;
  /** @format uuid */
  guid?: string;
}

export interface GeocachingUpvoteTypeCount {
  /** @format int32 */
  upvoteTypeId?: number;
  upvoteTypeName?: string;
  /** @format int32 */
  count?: number;
  upvotedByUser?: boolean;
}

export interface GeocachingGeocacheLogUpvote {
  geocacheLogCode?: string;
  upvoteTypeCounts?: GeocachingUpvoteTypeCount[];
}

export interface GeocachingGeocacheLogType {
  /** @format int32 */
  id?: number;
  name?: string;
  imageUrl?: string;
}

export interface GeocachingPostImage {
  base64ImageData: string;
  /** @format date-time */
  capturedDate?: string;
  name?: string;
  /** Description of the image */
  description?: string;
  /** @format uuid */
  guid?: string;
}

export interface GeocachingPostGeocacheLog {
  /** @format date-time */
  loggedDate: string;
  text: string;
  type?: string;
  geocacheLogType?: GeocachingGeocacheLogType;
  updatedCoordinates?: GeocachingCoordinates;
  geocacheCode: string;
  usedFavoritePoint?: boolean;
}

export interface GeocachingGeocacheNote {
  note: string;
}

export interface GeocachingGeocache {
  /** This code uniquely identifies the geocache */
  referenceCode?: string;
  /** Name of the Geocache */
  name?: string;
  /**
   * Difficulty of cache between 1.0 and 5.0
   * @format double
   */
  difficulty?: number;
  /**
   * Terrain of cache between 1.0 and 5.0
   * @format double
   */
  terrain?: number;
  /**
   * The number of favorite points on the Geocache
   * @format int32
   */
  favoritePoints?: number;
  /** @format int32 */
  findCount?: number;
  /** @format int32 */
  dnfCount?: number;
  /** @format int32 */
  willAttendCount?: number;
  /** @format int32 */
  writeNoteCount?: number;
  hasSolutionChecker?: boolean;
  /**
   * The number of trackables on the Geocache
   * @format int32
   */
  trackableCount?: number;
  /**
   * Date the geocache was placed (If the Geocache is an event then this represents the date of the event).
   * @format date-time
   */
  placedDate?: string;
  /** @format date-time */
  publishedDate?: string;
  /** @format date-time */
  eventEndDate?: string;
  /** The type of Geocache */
  type?: GeocachingGeocacheTypeEnum;
  geocacheType?: GeocachingGeocacheTypeModel;
  /** Container or Size of cache */
  size?: GeocachingGeocacheSizeEnum;
  geocacheSize?: GeocachingGeocacheSizeModel;
  userData?: GeocachingUserData;
  /** The state of the Geocache */
  status?: GeocachingGeocacheStatusEnum;
  /**
   * The locked status of the Gecocache.
   * Actions on the Geocache are disabled when the Geocache is locked.
   */
  isLocked?: boolean;
  location?: GeocachingGeocacheLocation;
  /** The posted coordinates of the Geocache */
  postedCoordinates?: GeocachingCoordinates;
  /** @format date-time */
  lastVisitedDate?: string;
  /** The reference code of the geocache owner */
  ownerCode?: string;
  owner?: GeocachingUser;
  ownerAlias?: string;
  isPremiumOnly?: boolean;
  /** Summary or short description of the geocache. */
  shortDescription?: string;
  /** Detailed description of the geocache. */
  longDescription?: string;
  /** Hints to find the geocache. */
  hints?: string;
  attributes?: GeocachingAttribute[];
  ianaTimezoneId?: string;
  relatedWebPage?: string;
  backgroundImageUrl?: string;
  url?: string;
  containsHtml?: boolean;
  /** @format int32 */
  premiumFavoriteScore?: number;
  additionalWaypoints?: GeocachingAdditionalWaypoint[];
  trackables?: GeocachingTrackable[];
  geocacheLogs?: GeocachingGeocacheLog[];
  images?: GeocachingImage[];
  userWaypoints?: GeocachingUserWaypoint[];
  geoTours?: GeocachingGeoTour[];
}

export interface GeocachingGeocacheSizeModel {
  /** @format int32 */
  id?: number;
  name?: string;
}

export interface GeocachingUserData {
  /**
   * The date the user found the Geocache
   * @format date-time
   */
  foundDate?: string;
  /** @format date-time */
  dnfDate?: string;
  correctedCoordinates?: GeocachingCoordinates;
  isFavorited?: boolean;
  note?: string;
  watched?: boolean;
  ignored?: boolean;
  /**
   * Unlocked status of the geocache based on the calling user's membership level.
   * False if the geocache is locked for the calling user. Defaults to true.
   */
  membershipLevelIsUnlocked?: boolean;
  /** Returns true if the calling user has an un-archived draft log for the geocache. */
  hasDraft?: boolean;
}

export interface GeocachingGeocacheLocation {
  country?: string;
  /** @format int32 */
  countryId?: number;
  countryCode?: string;
  state?: string;
  /** @format int32 */
  stateId?: number;
}

export interface GeocachingAttribute {
  /** @format int32 */
  id?: number;
  name?: string;
  imageUrl?: string;
  isOn?: boolean;
}

export interface GeocachingAdditionalWaypoint {
  referenceCode?: string;
  name?: string;
  coordinates?: GeocachingCoordinates;
  description?: string;
  /** @format int32 */
  typeId?: number;
  /** @format int32 */
  visibilityTypeId?: number;
  typeName?: string;
  prefix?: string;
  url?: string;
}

export interface GeocachingTrackable {
  referenceCode?: string;
  iconUrl?: string;
  name?: string;
  goal?: string;
  description?: string;
  releasedDate?: string;
  originCountry?: string;
  originLocation?: GeocachingGeocacheLocation;
  allowedToBeCollected?: boolean;
  ownerCode?: string;
  owner?: GeocachingUser;
  holderCode?: string;
  holder?: GeocachingUser;
  inHolderCollection?: boolean;
  currentGeocacheCode?: string;
  isMissing?: boolean;
  type?: string;
  trackableType?: GeocachingTrackableType;
  /** @format int32 */
  imageCount?: number;
  trackingNumber?: string;
  url?: string;
  currentGeocacheName?: string;
  /** @format double */
  kilometersTraveled?: number;
  /** @format double */
  milesTraveled?: number;
  /** @format date-time */
  lastDiscoveredDate?: string;
  trackableLogs?: GeocachingTrackableLog[];
  images?: GeocachingImage[];
}

export interface GeocachingUserWaypoint {
  referenceCode?: string;
  description?: string;
  isCorrectedCoordinates: boolean;
  isUserCompleted?: boolean;
  coordinates: GeocachingCoordinates;
  geocacheCode: string;
}

export interface GeocachingGeoTour {
  referenceCode?: string;
  name?: string;
  description?: string;
  postedCoordinates?: GeocachingCoordinates;
  /** @format int32 */
  geocacheCount?: number;
  url?: string;
  coverImageUrl?: string;
  logoImageUrl?: string;
  /** @format int32 */
  favoritePoints?: number;
  sponsor?: GeocachingSponsor;
}

export interface GeocachingTrackableLog {
  referenceCode?: string;
  ownerCode?: string;
  owner?: GeocachingUser;
  /** @format int32 */
  imageCount?: number;
  url?: string;
  geocacheName?: string;
  images?: GeocachingImage[];
  trackableCode?: string;
  geocacheCode?: string;
  /** @format date-time */
  loggedDate: string;
  text: string;
  isRot13Encoded?: boolean;
  /** @format int32 */
  typeId?: number;
  trackableLogType?: GeocachingTrackableLogType;
  coordinates?: GeocachingCoordinates;
}

export interface GeocachingSponsor {
  name?: string;
  relatedWebPage?: string;
  relatedWebPageText?: string;
}

export interface GeocachingTrackableLogType {
  /** @format int32 */
  id?: number;
  name?: string;
  imageUrl?: string;
}

export interface GeocachingPostTrackableLog {
  trackingNumber?: string;
  trackableCode?: string;
  geocacheCode?: string;
  /** @format date-time */
  loggedDate: string;
  text: string;
  isRot13Encoded?: boolean;
  /** @format int32 */
  typeId?: number;
  trackableLogType?: GeocachingTrackableLogType;
  coordinates?: GeocachingCoordinates;
}

export interface GeocachingHQPromotionMetadata {
  /** Page title for the campaign. */
  pageTitle?: string;
  /** Text that should be displayed on the link/button leading to the campaign page. */
  linkText?: string;
  /** SubText that should be displayed on the link/button leading to the campaign page. */
  linkSubText?: string;
  /** Byte array containing the icon for the campaign in png */
  iconData?: string;
  /** Link off geocaching root for the campaign ("/play/leaderboard", "/play/hqpromo/campaignname" for example) */
  relativeUrl?: string;
  /**
   * Unique Campaign Identifier
   * @format int32
   */
  campaignId?: number;
  /**
   * UTC date and time at which the link should start showing up to get to the page (on the profile page, in the app, ...)
   * @format date-time
   */
  linkVisibleStartDateUtc?: string;
  /**
   * UTC date and time at which the link should stop showing up to get to the page (on the profile page, in the app, ...)
   * @format date-time
   */
  linkVisibleEndDateUtc?: string;
  /** Type of campaign (e.g., engagement, trackables) */
  campaignType?: GeocachingHqPromotionMetadataCampaignTypeEnum;
}

export interface GeocachingGeocacheList {
  /** This unqiuely identifies the list.  Use this code to get more details about this list. Example (PQ25) */
  referenceCode?: string;
  /**
   * When was the list last updated.  If the list is a pocket query then this property references the last time it was generated. (default order: desc)
   * @format date-time
   */
  lastUpdatedDateUtc?: string;
  /**
   * When the list was created
   * @format date-time
   */
  createdDateUtc?: string;
  /**
   * Number of items on the list
   * @format int32
   */
  count?: number;
  /** @format int32 */
  findCount?: number;
  ownerCode?: string;
  url?: string;
  /** Name of the list */
  name: string;
  /** Description of the list */
  description?: string;
  /**
   * List Type
   * @format int32
   */
  typeId?: number;
  isPublic?: boolean;
  isShared?: boolean;
}

export interface GeocachingListGeocache {
  listItemName?: string;
  listItemDescription?: string;
  /** This code uniquely identifies the geocache */
  referenceCode?: string;
  /** Name of the Geocache */
  name?: string;
  /**
   * Difficulty of cache between 1.0 and 5.0
   * @format double
   */
  difficulty?: number;
  /**
   * Terrain of cache between 1.0 and 5.0
   * @format double
   */
  terrain?: number;
  /**
   * The number of favorite points on the Geocache
   * @format int32
   */
  favoritePoints?: number;
  /** @format int32 */
  findCount?: number;
  /** @format int32 */
  dnfCount?: number;
  /** @format int32 */
  willAttendCount?: number;
  /** @format int32 */
  writeNoteCount?: number;
  hasSolutionChecker?: boolean;
  /**
   * The number of trackables on the Geocache
   * @format int32
   */
  trackableCount?: number;
  /**
   * Date the geocache was placed (If the Geocache is an event then this represents the date of the event).
   * @format date-time
   */
  placedDate?: string;
  /** @format date-time */
  publishedDate?: string;
  /** @format date-time */
  eventEndDate?: string;
  /** The type of Geocache */
  type?: GeocachingListGeocacheTypeEnum;
  geocacheType?: GeocachingGeocacheTypeModel;
  /** Container or Size of cache */
  size?: GeocachingListGeocacheSizeEnum;
  geocacheSize?: GeocachingGeocacheSizeModel;
  userData?: GeocachingUserData;
  /** The state of the Geocache */
  status?: GeocachingListGeocacheStatusEnum;
  /**
   * The locked status of the Gecocache.
   * Actions on the Geocache are disabled when the Geocache is locked.
   */
  isLocked?: boolean;
  location?: GeocachingGeocacheLocation;
  /** The posted coordinates of the Geocache */
  postedCoordinates?: GeocachingCoordinates;
  /** @format date-time */
  lastVisitedDate?: string;
  /** The reference code of the geocache owner */
  ownerCode?: string;
  owner?: GeocachingUser;
  ownerAlias?: string;
  isPremiumOnly?: boolean;
  /** Summary or short description of the geocache. */
  shortDescription?: string;
  /** Detailed description of the geocache. */
  longDescription?: string;
  /** Hints to find the geocache. */
  hints?: string;
  attributes?: GeocachingAttribute[];
  ianaTimezoneId?: string;
  relatedWebPage?: string;
  backgroundImageUrl?: string;
  url?: string;
  containsHtml?: boolean;
  /** @format int32 */
  premiumFavoriteScore?: number;
  additionalWaypoints?: GeocachingAdditionalWaypoint[];
  trackables?: GeocachingTrackable[];
  geocacheLogs?: GeocachingGeocacheLog[];
  images?: GeocachingImage[];
  userWaypoints?: GeocachingUserWaypoint[];
  geoTours?: GeocachingGeoTour[];
}

export interface GeocachingPostListGeocache {
  referenceCode?: string;
  name?: string;
  listItemName?: string;
  listItemDescription?: string;
}

export interface GeocachingPostGeocacheList {
  /** Name of the list */
  name: string;
  /** Description of the list */
  description?: string;
  /**
   * List Type
   * @format int32
   */
  typeId?: number;
  isPublic?: boolean;
  isShared?: boolean;
}

export interface GeocachingBulkResponse {
  successes?: string[];
  failures?: GeocachingBulkFailure[];
}

export interface GeocachingBulkFailure {
  referenceCode?: string;
  message?: string;
  /** @format int32 */
  statusCode?: number;
}

export interface GeocachingLogDraft {
  referenceCode?: string;
  /** @format int32 */
  imageCount?: number;
  /** @format uuid */
  guid?: string;
  geocacheCode?: string;
  logType?: string;
  geocacheLogType?: GeocachingGeocacheLogType;
  note?: string;
  /** @format date-time */
  loggedDateUtc?: string;
  /** @format date-time */
  loggedDate?: string;
  useFavoritePoint?: boolean;
  geocacheName?: string;
}

export interface GeocachingPostLogDraft {
  /** @format uuid */
  guid?: string;
  geocacheCode: string;
  logType?: string;
  geocacheLogType?: GeocachingGeocacheLogType;
  note?: string;
  /** @format date-time */
  loggedDateUtc?: string;
  /** @format date-time */
  loggedDate?: string;
  useFavoritePoint?: boolean;
}

export interface GeocachingPromotedDraft {
  geocacheLog?: GeocachingGeocacheLog;
  successfulImages?: GeocachingImage[];
  failedImages?: GeocachingImage[];
  favoritePointApplied?: boolean;
  draftDeleted?: boolean;
}

export interface GeocachingState {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format int32 */
  countryId?: number;
}

export interface GeocachingCountry {
  /** @format int32 */
  id?: number;
  name?: string;
}

export interface GeocachingAttributeType {
  /** @format int32 */
  id?: number;
  name?: string;
  hasYesOption?: boolean;
  hasNoOption?: boolean;
  yesIconUrl?: string;
  noIconUrl?: string;
  notChosenIconUrl?: string;
}

export interface GeocachingMembershipLevel {
  /** @format int32 */
  id?: number;
  name?: string;
}

export interface GeocachingDifficultyTerrainStatistics {
  difficultyTerrainCounts?: GeocachingDifficultyTerrainCount[];
  /** @format double */
  averageDifficulty?: number;
  /** @format double */
  averageTerrain?: number;
}

export interface GeocachingDifficultyTerrainCount {
  /** @format double */
  terrain?: number;
  /** @format double */
  difficulty?: number;
  /** @format int32 */
  count?: number;
}

export interface GeocachingTrackableJourney {
  trackableLogCode?: string;
  geocacheCode?: string;
  trackableLogType?: GeocachingTrackableLogType;
  /** @format date-time */
  loggedDate?: string;
  coordinates?: GeocachingCoordinates;
}

export interface GeocachingSouvenir {
  /** @format int32 */
  id?: number;
  imagePath?: string;
  thumbImagePath?: string;
  title?: string;
  description?: string;
  /** @format date-time */
  foundDateUtc?: string;
  url?: string;
}

export interface GeocachingPostUserWaypoint {
  description?: string;
  isCorrectedCoordinates: boolean;
  isUserCompleted?: boolean;
  coordinates: GeocachingCoordinates;
  geocacheCode: string;
}

export interface GeocachingWherigoCartridge {
  /** @format byte */
  gwcFile?: string;
}

export interface GeocachingPartialResponseTrackableLog {
  data?: GeocachingTrackableLog[];
  failedCodes?: string[];
}

export enum GeocachingAdventureModelAdventureTypeEnum {
  Nonsequential = "Nonsequential",
  Sequential = "Sequential",
}

/** The type of structure of the adventure's stages */
export enum GeocachingAdventureBasicInfoModelAdventureTypeEnum {
  Nonsequential = "Nonsequential",
  Sequential = "Sequential",
}

export enum GeocachingStageSearchModelAdventureTypesEnum {
  Nonsequential = "Nonsequential",
  Sequential = "Sequential",
}

/** The stage's adventure's type. */
export enum GeocachingStageAdventureAdventureTypeEnum {
  Nonsequential = "Nonsequential",
  Sequential = "Sequential",
}

/** The type of Geocache */
export enum GeocachingGeocacheTypeEnum {
  Traditional = "Traditional",
  MultiCache = "MultiCache",
  Virtual = "Virtual",
  Letterbox = "Letterbox",
  Event = "Event",
  Mystery = "Mystery",
  ProjectApe = "ProjectApe",
  Webcam = "Webcam",
  Locationless = "Locationless",
  Cito = "Cito",
  EarthCache = "EarthCache",
  MegaEvent = "MegaEvent",
  GpsAdventuresExhibit = "GpsAdventuresExhibit",
  Wherigo = "Wherigo",
  LostAndFoundEvent = "LostAndFoundEvent",
  GeocachingHq = "GeocachingHq",
  LostAndFoundCelebration = "LostAndFoundCelebration",
  BlockParty = "BlockParty",
  GigaEvent = "GigaEvent",
}

/** Container or Size of cache */
export enum GeocachingGeocacheSizeEnum {
  Unknown = "Unknown",
  Micro = "Micro",
  Regular = "Regular",
  Large = "Large",
  Virtual = "Virtual",
  Other = "Other",
  Small = "Small",
}

/** The state of the Geocache */
export enum GeocachingGeocacheStatusEnum {
  Unpublished = "Unpublished",
  Active = "Active",
  Disabled = "Disabled",
  Locked = "Locked",
  Archived = "Archived",
}

/** Type of campaign (e.g., engagement, trackables) */
export enum GeocachingHqPromotionMetadataCampaignTypeEnum {
  Engagement = "Engagement",
  Trackables = "Trackables",
  DigitalTreasures = "DigitalTreasures",
}

/** The type of Geocache */
export enum GeocachingListGeocacheTypeEnum {
  Traditional = "Traditional",
  MultiCache = "MultiCache",
  Virtual = "Virtual",
  Letterbox = "Letterbox",
  Event = "Event",
  Mystery = "Mystery",
  ProjectApe = "ProjectApe",
  Webcam = "Webcam",
  Locationless = "Locationless",
  Cito = "Cito",
  EarthCache = "EarthCache",
  MegaEvent = "MegaEvent",
  GpsAdventuresExhibit = "GpsAdventuresExhibit",
  Wherigo = "Wherigo",
  LostAndFoundEvent = "LostAndFoundEvent",
  GeocachingHq = "GeocachingHq",
  LostAndFoundCelebration = "LostAndFoundCelebration",
  BlockParty = "BlockParty",
  GigaEvent = "GigaEvent",
}

/** Container or Size of cache */
export enum GeocachingListGeocacheSizeEnum {
  Unknown = "Unknown",
  Micro = "Micro",
  Regular = "Regular",
  Large = "Large",
  Virtual = "Virtual",
  Other = "Other",
  Small = "Small",
}

/** The state of the Geocache */
export enum GeocachingListGeocacheStatusEnum {
  Unpublished = "Unpublished",
  Active = "Active",
  Disabled = "Disabled",
  Locked = "Locked",
  Archived = "Archived",
}

export enum GeocachingReferenceDataGetGeocacheSizesEnum {
  Unknown = "Unknown",
  Micro = "Micro",
  Regular = "Regular",
  Large = "Large",
  Virtual = "Virtual",
  Other = "Other",
  Small = "Small",
}

/**
 * 1= inventory, 2 = collection, 3 = owned (default: 1)
 * @default 1
 */
export enum GeocachingTrackablesGetUserTrackablesParamsTypeEnum {
  Inventory = "Inventory",
  Collection = "Collection",
  Owned = "Owned",
}

export namespace VApiVersion {
  /**
   * @description This method will return an adventure along with its stage(s). Only the first stage is returned for sequential adventures. This method can only be called by premium members.
   * @tags Adventures
   * @name AdventuresGet
   * @summary Get a single adventure
   * @request GET:/v{api-version}/adventures/{adventureId}
   * @response `200` `GeocachingAdventureModel` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace AdventuresGet {
    export type RequestParams = {
      /**
       * The guid of the adventure.
       * @format uuid
       */
      adventureId: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingAdventureModel;
  }

  /**
   * @description This method will return search results.
   * @tags Adventures
   * @name AdventuresSearch
   * @summary Search for Adventures
   * @request GET:/v{api-version}/adventures/search
   * @response `200` `(GeocachingAdventureBasicInfoModel)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace AdventuresSearch {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /** The query used on the adventures. */
      q: string;
      /**
       * Defaults to 0, how many adventures to skip.
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * Defaults to 50, how many adventures to return.
       * @format int32
       * @default 50
       */
      take?: number;
      /**
       * Properties you want to return, defaults to "id"
       * @default "id"
       */
      fields?: string;
      /**
       * true to exclude owned caches/labs by the requesting user; otherwise, false includes all results.
       * @default false
       */
      excludeOwned?: boolean;
      /**
       * true to exclude completed caches/labs by the requesting user; otherwise, false includes all results.
       * @default false
       */
      excludeCompleted?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingAdventureBasicInfoModel[];
  }

  /**
   * No description
   * @tags Adventures
   * @name AdventuresSearchStages
   * @summary Search for stages independently of adventures
   * @request POST:/v{api-version}/adventures/stages/search
   * @response `200` `(GeocachingStageSearchResponse)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace AdventuresSearchStages {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = GeocachingStageSearchModel;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingStageSearchResponse[];
  }

  /**
   * @description This method will return a list of requests including both inbound and outbound requests.
   * @tags Friends
   * @name FriendsGetFriendRequests
   * @summary Get a list of friend requests for the calling user
   * @request GET:/v{api-version}/friendrequests
   * @response `200` `(GeocachingFriendRequest)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace FriendsGetFriendRequests {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * How many requests to skip (default = 0)
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * How many requests to return (default = 10, max = 50)
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * Properties you want to return, defaults to id
       * @default "id"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingFriendRequest[];
  }

  /**
   * @description This method will return the friend request created.
   * @tags Friends
   * @name FriendsCreateFriendRequest
   * @summary Create a friend request
   * @request POST:/v{api-version}/friendrequests
   * @response `201` `GeocachingFriendRequest` Created
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace FriendsCreateFriendRequest {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Properties you want to return, defaults to id
       * @default "id"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingFriendRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingFriendRequest;
  }

  /**
   * @description This method will return a list of Users.
   * @tags Friends
   * @name FriendsGetFriends
   * @summary Get a list of friends for the calling user
   * @request GET:/v{api-version}/friends
   * @response `200` `(GeocachingUser)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace FriendsGetFriends {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * How many friends to skip (default = 0)
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * How many friends to return (default = 10, max = 50)
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * Sort order (default = FriendedDate-)
       * @default "FriendedDate-"
       */
      sort?: string;
      /**
       * Properties you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingUser[];
  }

  /**
   * @description This method will return a list of GeocacheLogs.
   * @tags Friends
   * @name FriendsGetFriendsGeocacheLogs
   * @summary Get a list of friends geocache logs for specified geocache
   * @request GET:/v{api-version}/friends/geocaches/{referenceCode}/geocachelogs
   * @response `200` `(GeocachingGeocacheLog)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace FriendsGetFriendsGeocacheLogs {
    export type RequestParams = {
      /** identifier of the geocache (e.g. GCK25B) */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * How many friends to skip (default = 0)
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * How many logs to return (default = 10, max = 50)
       * @format int32
       * @default 10
       */
      take?: number;
      /** log types to include in response, defaults to all */
      logTypes?: string;
      /**
       * Properties you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
      /**
       * fields to expand on the geocache log
       * @default ""
       */
      expand?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheLog[];
  }

  /**
   * No description
   * @tags Friends
   * @name FriendsAcceptFriendRequest
   * @summary Accept a friend request
   * @request POST:/v{api-version}/friendrequests/{requestId}/accept
   * @response `200` `void` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace FriendsAcceptFriendRequest {
    export type RequestParams = {
      /**
       * friend request identifier
       * @format int32
       */
      requestId: number;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }

  /**
   * @description This method will return no content.
   * @tags Friends
   * @name FriendsRemoveFriend
   * @summary Removes a friend
   * @request DELETE:/v{api-version}/friends/{userCode}
   * @response `204` `object` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace FriendsRemoveFriend {
    export type RequestParams = {
      /** The identifier of the friend (their user reference code) */
      userCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * @description This method will return no content.
   * @tags Friends
   * @name FriendsDeleteFriendRequest
   * @summary Delete a friend request
   * @request DELETE:/v{api-version}/friendrequests/{requestId}
   * @response `204` `object` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace FriendsDeleteFriendRequest {
    export type RequestParams = {
      /**
       * The identifier of the friend request
       * @format int32
       */
      requestId: number;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * @description This method will return a single geocache log.
   * @tags GeocacheLogs
   * @name GeocacheLogsGetGeocacheLog
   * @summary Get a single geocache log
   * @request GET:/v{api-version}/geocachelogs/{referenceCode}
   * @response `200` `GeocachingGeocacheLog` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocacheLogsGetGeocacheLog {
    export type RequestParams = {
      /** The reference code of the geocache log (example: GL100). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * fields to include with base geocache log object
       * @default ""
       */
      expand?: string;
      /**
       * Property fields you want to return, defaults to referencecode
       * @default "referencecode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheLog;
  }

  /**
   * @description This method will return a geocache log.
   * @tags GeocacheLogs
   * @name GeocacheLogsUpdateGeocacheLog
   * @summary Update a geocache log
   * @request PUT:/v{api-version}/geocachelogs/{referenceCode}
   * @response `200` `GeocachingGeocacheLog` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `422` `void` Unprocessable Entity
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocacheLogsUpdateGeocacheLog {
    export type RequestParams = {
      /** The log reference code (example: GL100). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Property fields you want to return, defaults to referencecode
       * @default "referencecode"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingGeocacheLog;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheLog;
  }

  /**
   * @description This method will not have a response body.
   * @tags GeocacheLogs
   * @name GeocacheLogsDeleteGeocacheLog
   * @summary Delete a geocache log
   * @request DELETE:/v{api-version}/geocachelogs/{referenceCode}
   * @response `204` `object` No Content
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocacheLogsDeleteGeocacheLog {
    export type RequestParams = {
      /** The reference code of the geocache log (example: GL100). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * @description This method will return a list of geocache log upvote info.
   * @tags GeocacheLogs
   * @name GeocacheLogsGetLogUpvotes
   * @summary Get a the upvotes associated with the provided geocache logs
   * @request GET:/v{api-version}/geocachelogs/upvotes
   * @response `200` `(GeocachingGeocacheLogUpvote)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `500` `void` Server Error
   */
  export namespace GeocacheLogsGetLogUpvotes {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /** Comma delimited list of geocache log reference codes (example: GL100). */
      referenceCodes: string;
      /**
       * Properties you want to return. Defaults to "geocacheLogCode".
       * @default "geocacheLogCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheLogUpvote[];
  }

  /**
   * @description This method will return a list of images.
   * @tags GeocacheLogs
   * @name GeocacheLogsGetImages
   * @summary Get a the images attached to a geocache log
   * @request GET:/v{api-version}/geocachelogs/{referenceCode}/images
   * @response `200` `(GeocachingImage)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocacheLogsGetImages {
    export type RequestParams = {
      /** The reference code of the geocache log (example: GL100). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Amount of images to skip over used for pagination. Defaults to 0.
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * Amount of images to include in results. Defaults to 10.
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * Properties you want to return. Defaults to "url".
       * @default "url"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingImage[];
  }

  /**
   * @description This method will return a single Geocache.
   * @tags GeocacheLogs
   * @name GeocacheLogsAddImage
   * @summary Add an image to a geocache log
   * @request POST:/v{api-version}/geocachelogs/{referenceCode}/images
   * @response `200` `GeocachingImage` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocacheLogsAddImage {
    export type RequestParams = {
      /** The reference code of the geocache log (example: GL100). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * fields to return on the response object, defaults to "url"
       * @default "url"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingPostImage;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingImage;
  }

  /**
   * @description This method will return the created geocache log.
   * @tags GeocacheLogs
   * @name GeocacheLogsCreateGeocacheLog
   * @summary Add a log to a geocache
   * @request POST:/v{api-version}/geocachelogs
   * @response `200` `GeocachingGeocacheLog` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocacheLogsCreateGeocacheLog {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * the fields to return in the response body, defaults to referencecode
       * @default "referencecode"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingPostGeocacheLog;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheLog;
  }

  /**
   * @description This method will return the upvote data for the upvoted geocache log.
   * @tags GeocacheLogs
   * @name GeocacheLogsAddUpvote
   * @summary Add an upvote to a geocache log
   * @request POST:/v{api-version}/geocachelogs/{referenceCode}/upvotes/{upvoteTypeId}
   * @response `201` `GeocachingGeocacheLogUpvote` Created
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `500` `void` Server Error
   */
  export namespace GeocacheLogsAddUpvote {
    export type RequestParams = {
      /** identifier of the geocache log */
      referenceCode: string;
      /**
       * the type of upvote
       * @format int32
       */
      upvoteTypeId: number;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Properties you want to return. Defaults to "geocacheLogCode".
       * @default "geocacheLogCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheLogUpvote;
  }

  /**
   * @description This method will not have a response body.
   * @tags GeocacheLogs
   * @name GeocacheLogsDeleteUpvote
   * @summary Delete a geocache log upvote
   * @request DELETE:/v{api-version}/geocachelogs/{referenceCode}/upvotes/{upvoteTypeId}
   * @response `204` `object` No Content
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `500` `void` Server Error
   */
  export namespace GeocacheLogsDeleteUpvote {
    export type RequestParams = {
      /** identifier of the geocache log */
      referenceCode: string;
      /**
       * the type of upvote
       * @format int32
       */
      upvoteTypeId: number;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * @description This method will not return anything in the body.
   * @tags GeocacheLogs
   * @name GeocacheLogsDeleteGeocacheLogImages
   * @summary Deletes a geocache log image
   * @request DELETE:/v{api-version}/geocachelogs/{referenceCode}/images/{imageGuid}
   * @response `204` `object` No Content
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocacheLogsDeleteGeocacheLogImages {
    export type RequestParams = {
      /** The reference code of the geocache log (example: GL100). */
      referenceCode: string;
      /**
       * the guid of the image
       * @format uuid
       */
      imageGuid: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * @description This method will return the upserted text.
   * @tags GeocacheNotes
   * @name GeocacheNotesUpsertNote
   * @summary Upsert a geocache note for the calling user
   * @request PUT:/v{api-version}/geocaches/{referenceCode}/notes
   * @response `200` `GeocachingGeocacheNote` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocacheNotesUpsertNote {
    export type RequestParams = {
      /** The identifier of the geocache (ex: GC25) */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = GeocachingGeocacheNote;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheNote;
  }

  /**
   * @description This method will return no content.
   * @tags GeocacheNotes
   * @name GeocacheNotesDeleteNote
   * @summary Delete a geocache note for the calling user
   * @request DELETE:/v{api-version}/geocaches/{referenceCode}/notes
   * @response `204` `object` No content
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocacheNotesDeleteNote {
    export type RequestParams = {
      /** The identifier of the geocache (ex: GC25) */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * @description This method will return a single Geocache.
   * @tags Geocaches
   * @name GeocachesGetGeocache
   * @summary Get a single Geocache
   * @request GET:/v{api-version}/geocaches/{referenceCode}
   * @response `200` `GeocachingGeocache` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocachesGetGeocache {
    export type RequestParams = {
      /** The reference code of the geocache (example: GC25). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Select to return a geocache object without the description and hints
       * @default false
       */
      lite?: boolean;
      /**
       * fields to include with base geocache object
       * @default ""
       */
      expand?: string;
      /**
       * fields you want to return, defaults to "referenceCode"
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocache;
  }

  /**
   * @description This method will return a list of users.
   * @tags Geocaches
   * @name GeocachesGetFavoritedBy
   * @summary Get a list of Users that have favorited a geocache
   * @request GET:/v{api-version}/geocaches/{referenceCode}/favoritedby
   * @response `200` `(GeocachingUser)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocachesGetFavoritedBy {
    export type RequestParams = {
      /** The reference code of the geocache (example: GC25) */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * how many users to skip
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * how many users to retrieve
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * fields you want to return, defaults to "referenceCode"
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingUser[];
  }

  /**
   * @description This method will return a list of geocaches.
   * @tags Geocaches
   * @name GeocachesGetGeocaches
   * @summary Get a list of geocaches
   * @request GET:/v{api-version}/geocaches
   * @response `200` `(GeocachingGeocache)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocachesGetGeocaches {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /** comma delimited list of geocache reference codes to retrieve (example: GC25,GC26,GC27). Reference codes not beginning with GC will be ignored. */
      referenceCodes: string;
      /**
       * Select to return a geocache object without the description and hints
       * @default false
       */
      lite?: boolean;
      /**
       * fields to include with base geocache object
       * @default ""
       */
      expand?: string;
      /**
       * fields you want to return, defaults to "referenceCode"
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocache[];
  }

  /**
   * @description This method will return a list of trackables.
   * @tags Geocaches
   * @name GeocachesGetTrackables
   * @summary Get a list of trackables in a geocache
   * @request GET:/v{api-version}/geocaches/{referenceCode}/trackables
   * @response `200` `(GeocachingTrackable)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocachesGetTrackables {
    export type RequestParams = {
      /** The reference code of the geocache (example: GC25). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * how many trackables to skip
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * how many trackables to retrieve
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * fields you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
      /** @default "" */
      expand?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingTrackable[];
  }

  /**
   * @description This method will return search results.
   * @tags Geocaches
   * @name GeocachesSearch
   * @summary Search for Geocaches
   * @request GET:/v{api-version}/geocaches/search
   * @response `200` `(GeocachingGeocache)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocachesSearch {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /** The query used on the geocaches */
      q: string;
      /**
       * Defaults to distance if coords are provided otherwise favoritepoints (distance, favorites, cachename, size, difficulty, terrain, founddate, placeddate, id)
       * @default ""
       */
      sort?: string;
      /**
       * Return a lite version of geocache (no description, hint, or
       * @default true
       */
      lite?: boolean;
      /**
       * Defaults to 0, how many geocaches to skip
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * Defaults to 50, how many geocaches to return
       * @format int32
       * @default 50
       */
      take?: number;
      /**
       * fields to include with base geocache object
       * @default ""
       */
      expand?: string;
      /**
       * Properties you want to return, defaults to "referencecode"
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocache[];
  }

  /**
   * @description This method will return a list of images.
   * @tags Geocaches
   * @name GeocachesGetImages
   * @summary Get a list of images for a geocache
   * @request GET:/v{api-version}/geocaches/{referenceCode}/images
   * @response `200` `(GeocachingImage)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocachesGetImages {
    export type RequestParams = {
      /** The reference code of the geocache (example: GC25). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * how many images to skip
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * how many images to retrieve
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * fields you want to return, defaults to "url"
       * @default "url"
       */
      fields?: string;
      /**
       * Include images on child resources (geocache logs images included with geocache images). This is currently only implemented for geocaches
       * @default true
       */
      includeGallery?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingImage[];
  }

  /**
   * @description This method will return a list of geocache logs.
   * @tags Geocaches
   * @name GeocachesGetLogs
   * @summary Get a list of geocache logs for the specified geocache
   * @request GET:/v{api-version}/geocaches/{referenceCode}/geocachelogs
   * @response `200` `(GeocachingGeocacheLog)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocachesGetLogs {
    export type RequestParams = {
      /** The reference code of the geocache (example: GC25). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * how many logs to skip over
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * how many logs to retrieve
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * fields to include with base geocache object
       * @default ""
       */
      expand?: string;
      /**
       * how to sort the logs
       * @default "newest"
       */
      sort?: string;
      /**
       * fields you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
      /** log types to include in response, defaults to all */
      logTypes?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheLog[];
  }

  /**
   * @description Use the status codes to verify if final coordinates are correct
   * @tags Geocaches
   * @name GeocachesCheckFinalCoordinates
   * @summary Check Final Coordinates
   * @request POST:/v{api-version}/geocaches/{referenceCode}/finalcoordinates
   * @response `204` `GeocachingGeocache` No Content
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocachesCheckFinalCoordinates {
    export type RequestParams = {
      /** The reference code of the geocache (example: GC25). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = GeocachingCoordinates;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocache;
  }

  /**
   * @description This method will return the successfully created trackable logs.
   * @tags Geocaches
   * @name GeocachesBulkCreateTrackableLogs
   * @summary Create multiple trackable logs on a single geocache
   * @request POST:/v{api-version}/geocaches/{referenceCode}/bulktrackablelogs
   * @response `200` `GeocachingPartialResponseTrackableLog` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeocachesBulkCreateTrackableLogs {
    export type RequestParams = {
      /** the identifier of the geocache */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Property fields you want to return, defaults to referencecode
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingPostTrackableLog[];
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingPartialResponseTrackableLog;
  }

  /**
   * No description
   * @tags GeoTours
   * @name GeoToursGetGeoTour
   * @summary Get a GeoTour
   * @request GET:/v{api-version}/geotours/{referenceCode}
   * @response `200` `(GeocachingGeoTour)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeoToursGetGeoTour {
    export type RequestParams = {
      /** Identifier of the GeoTour (e.g. GT7) */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Properties you want to return, defaults to "referencecode"
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeoTour[];
  }

  /**
   * No description
   * @tags GeoTours
   * @name GeoToursGetGeoTours
   * @summary Get GeoTours
   * @request GET:/v{api-version}/geotours
   * @response `200` `(GeocachingGeoTour)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeoToursGetGeoTours {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Defaults to unsorted (distance, name). If using distance sorting, must provide latitude and longitude (e.g. dist+:[47,-122])
       * @default ""
       */
      sort?: string;
      /**
       * Defaults to 0, how many geocaches to skip
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * Defaults to 20, how many geocaches to return
       * @format int32
       * @default 20
       */
      take?: number;
      /**
       * Properties you want to return, defaults to "referencecode"
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeoTour[];
  }

  /**
   * @description This method will return a list of geocaches.
   * @tags GeoTours
   * @name GeoToursGetGeocachesByGeoTour
   * @summary Get the geocaches on the GeoTour
   * @request GET:/v{api-version}/geotours/{referenceCode}/geocaches
   * @response `200` `(GeocachingGeocache)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace GeoToursGetGeocachesByGeoTour {
    export type RequestParams = {
      /** Identifier of the GeoTour (e.g. GT7) */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Select to return a geocache object without the description and hints
       * @default false
       */
      lite?: boolean;
      /**
       * Defaults to 0, how many geocaches to skip
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * Defaults to 20, how many geocaches to return
       * @format int32
       * @default 20
       */
      take?: number;
      /**
       * Options are distance (must provide lat/lng), name (of the geocache), favorites, and geotour (order defined by GeoTour). Defaults to geotour.
       * @default "gt+"
       */
      sort?: string;
      /**
       * fields to include with base geocache object
       * @default ""
       */
      expand?: string;
      /**
       * fields you want to return, defaults to "referencecode"
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocache[];
  }

  /**
   * No description
   * @tags HQPromotions
   * @name HqPromotionsGet
   * @summary Returns a list of metadata for currently visible and upcoming Geocaching HQ promotions
   * @request GET:/v{api-version}/HQPromotions/metadata
   * @response `200` `(GeocachingHQPromotionMetadata)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `500` `void` Server Error
   */
  export namespace HqPromotionsGet {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingHQPromotionMetadata[];
  }

  /**
   * @description This method will return a list.
   * @tags Lists
   * @name ListsGetList
   * @summary Get a list
   * @request GET:/v{api-version}/lists/{referenceCode}
   * @response `200` `GeocachingGeocacheList` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace ListsGetList {
    export type RequestParams = {
      /** The reference code of the list (example: BM25). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Property fields you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheList;
  }

  /**
   * @description This method will return the updated geocache list.
   * @tags Lists
   * @name ListsUpdateList
   * @summary Edit a list
   * @request PUT:/v{api-version}/lists/{referenceCode}
   * @response `200` `GeocachingGeocacheList` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace ListsUpdateList {
    export type RequestParams = {
      /** the unique identifier of the list (ex: BM100) */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Property fields you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingGeocacheList;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheList;
  }

  /**
   * @description This method will not return anything.
   * @tags Lists
   * @name ListsDeleteList
   * @summary Remove a list
   * @request DELETE:/v{api-version}/lists/{referenceCode}
   * @response `200` `object` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace ListsDeleteList {
    export type RequestParams = {
      /** unique identifier of the list */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * @description This method will return a zipped file.
   * @tags Lists
   * @name ListsGetZippedPocketQuery
   * @summary Gets a zipped file for a pocket query
   * @request GET:/v{api-version}/lists/{referenceCode}/geocaches/zipped
   * @response `200` `string` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace ListsGetZippedPocketQuery {
    export type RequestParams = {
      /** identifier of the pocket query */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }

  /**
   * @description This method will return a list of geocaches.
   * @tags Lists
   * @name ListsGetGeocaches
   * @summary Get a list of geocaches for a specified list
   * @request GET:/v{api-version}/lists/{referenceCode}/geocaches
   * @response `200` `(GeocachingListGeocache)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace ListsGetGeocaches {
    export type RequestParams = {
      /** identifier of the list */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * how many geocaches to skip over
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * how many geocaches to retrieve
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * whether to return lite geocaches or not
       * @default true
       */
      lite?: boolean;
      /**
       * fields you want to return, defaults to "referenceCode"
       * @default "referenceCode"
       */
      fields?: string;
      /**
       * fields to include with base geocache object
       * @default ""
       */
      expand?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingListGeocache[];
  }

  /**
   * @description This method will return the geocache added.
   * @tags Lists
   * @name ListsAddGeocache
   * @summary Add a geocache to a list
   * @request POST:/v{api-version}/lists/{referenceCode}/geocaches
   * @response `200` `GeocachingGeocache` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace ListsAddGeocache {
    export type RequestParams = {
      /** unique identifier of the list */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Property fields you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingPostListGeocache;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocache;
  }

  /**
   * @description This method will return the created geocache list.
   * @tags Lists
   * @name ListsCreateList
   * @summary Create a list
   * @request POST:/v{api-version}/lists
   * @response `200` `GeocachingGeocacheList` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace ListsCreateList {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Property fields you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingPostGeocacheList;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheList;
  }

  /**
   * @description This method will return the successful and failed geocache codes.
   * @tags Lists
   * @name ListsAddGeocaches
   * @summary Add multiple geocaches to a list
   * @request POST:/v{api-version}/lists/{referenceCode}/bulkgeocaches
   * @response `200` `GeocachingBulkResponse` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace ListsAddGeocaches {
    export type RequestParams = {
      /** unique identifier of the list */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = string[];
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingBulkResponse;
  }

  /**
   * @description This method will not return anything.
   * @tags Lists
   * @name ListsDeleteGeocache
   * @summary Remove a geocache from a list
   * @request DELETE:/v{api-version}/lists/{referenceCode}/geocaches/{geocacheReferenceCode}
   * @response `200` `object` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace ListsDeleteGeocache {
    export type RequestParams = {
      /** unique identifier of the list */
      referenceCode: string;
      /** unique identifier of the geocache to remove */
      geocacheReferenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * @description This method will return a single draft log.
   * @tags LogDrafts
   * @name LogDraftsGetDraft
   * @summary Get a single log draft for the calling user
   * @request GET:/v{api-version}/logdrafts/{referenceCode}
   * @response `200` `GeocachingLogDraft` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace LogDraftsGetDraft {
    export type RequestParams = {
      /** The reference code of the log draft (example: LD25). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Properties you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingLogDraft;
  }

  /**
   * @description This method will return the log draft edited.
   * @tags LogDrafts
   * @name LogDraftsUpdateDraft
   * @summary Update a log draft
   * @request PUT:/v{api-version}/logdrafts/{referenceCode}
   * @response `201` `GeocachingLogDraft` Created
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace LogDraftsUpdateDraft {
    export type RequestParams = {
      /** The identifier of the log draft (ex: LD25) */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Properties you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingLogDraft;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingLogDraft;
  }

  /**
   * @description This method will return no content.
   * @tags LogDrafts
   * @name LogDraftsDeleteDraft
   * @summary Delete a log draft
   * @request DELETE:/v{api-version}/logdrafts/{referenceCode}
   * @response `201` `object` Created
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace LogDraftsDeleteDraft {
    export type RequestParams = {
      /** The identifier of the log draft (ex: LD25) */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * @description This method will return a page (list + total) of log drafts.
   * @tags LogDrafts
   * @name LogDraftsGetUserDrafts
   * @summary Get a list of log drafts for the calling user
   * @request GET:/v{api-version}/logdrafts
   * @response `200` `(GeocachingLogDraft)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace LogDraftsGetUserDrafts {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * How many drafts to skip (default = 0)
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * How many drafts to return (default = 10)
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * How to sort the drafts (default = loggeddateutc)
       * @default "dateloggedutc"
       */
      sort?: string;
      /**
       * Properties you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingLogDraft[];
  }

  /**
   * @description This method will return the log draft created.
   * @tags LogDrafts
   * @name LogDraftsCreateDraft
   * @summary Create a log draft
   * @request POST:/v{api-version}/logdrafts
   * @response `201` `GeocachingLogDraft` Created
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace LogDraftsCreateDraft {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Properties you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingPostLogDraft;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingLogDraft;
  }

  /**
   * @description This method will return the promoted draft info.
   * @tags LogDrafts
   * @name LogDraftsPromoteToGeocacheLog
   * @summary Promote Log Draft to Geocache Log
   * @request POST:/v{api-version}/logdrafts/{referenceCode}/promote
   * @response `201` `GeocachingPromotedDraft` Created
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace LogDraftsPromoteToGeocacheLog {
    export type RequestParams = {
      /** identifier of the log draft */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = GeocachingLogDraft;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingPromotedDraft;
  }

  /**
   * @description This method will return the image created.
   * @tags LogDrafts
   * @name LogDraftsAddImage
   * @summary Add image to log draft
   * @request POST:/v{api-version}/logdrafts/{referenceCode}/images
   * @response `201` `GeocachingImage` Created
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace LogDraftsAddImage {
    export type RequestParams = {
      /** identifier of the log draft */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Properties you want to return, defaults to url
       * @default "url"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingPostImage;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingImage;
  }

  /**
   * No description
   * @tags LogDrafts
   * @name LogDraftsDeleteImage
   * @summary Delete image from log draft
   * @request DELETE:/v{api-version}/logdrafts/{referenceCode}/images/{guid}
   * @response `200` `object` OK
   */
  export namespace LogDraftsDeleteImage {
    export type RequestParams = {
      /** Identified of the log draft. */
      referenceCode: string;
      /**
       * Unique identifier for the image
       * @format uuid
       */
      guid: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * No description
   * @tags ReferenceData
   * @name ReferenceDataGetStates
   * @summary Returns the state (aka region) names and ids
   * @request GET:/v{api-version}/states
   * @response `200` `(GeocachingState)[]` Ok
   * @response `401` `void` Unauthorized
   * @response `429` `void` Too many requests
   */
  export namespace ReferenceDataGetStates {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingState[];
  }

  /**
   * No description
   * @tags ReferenceData
   * @name ReferenceDataGetCountries
   * @summary Returns current list of country ids and names
   * @request GET:/v{api-version}/countries
   * @response `200` `(GeocachingCountry)[]` Ok
   * @response `401` `void` Unauthorized
   * @response `429` `void` Too many requests
   */
  export namespace ReferenceDataGetCountries {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingCountry[];
  }

  /**
   * No description
   * @tags ReferenceData
   * @name ReferenceDataGetAttributes
   * @summary Returns the available attributes
   * @request GET:/v{api-version}/attributes
   * @response `200` `(GeocachingAttributeType)[]` Ok
   * @response `401` `void` Unauthorized
   * @response `429` `void` Too many requests
   */
  export namespace ReferenceDataGetAttributes {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingAttributeType[];
  }

  /**
   * No description
   * @tags ReferenceData
   * @name ReferenceDataGetGeocacheSizes
   * @summary Returns the available geocache sizes
   * @request GET:/v{api-version}/geocachesizes
   * @response `200` `(GeocachingReferenceDataGetGeocacheSizesEnum)[]` Ok
   * @response `401` `void` Unauthorized
   * @response `429` `void` Too many requests
   */
  export namespace ReferenceDataGetGeocacheSizes {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingReferenceDataGetGeocacheSizesEnum[];
  }

  /**
   * No description
   * @tags ReferenceData
   * @name ReferenceDataGetGeocacheTypes
   * @summary Returns the available geocache types
   * @request GET:/v{api-version}/geocachetypes
   * @response `200` `(GeocachingGeocacheTypeModel)[]` Ok
   * @response `401` `void` Unauthorized
   * @response `429` `void` Too many requests
   */
  export namespace ReferenceDataGetGeocacheTypes {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheTypeModel[];
  }

  /**
   * No description
   * @tags ReferenceData
   * @name ReferenceDataGetGeocacheLogTypes
   * @summary Returns the geocache log types
   * @request GET:/v{api-version}/geocachelogtypes
   * @response `200` `(GeocachingGeocacheLogType)[]` Ok
   * @response `401` `void` Unauthorized
   * @response `429` `void` Too many requests
   */
  export namespace ReferenceDataGetGeocacheLogTypes {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheLogType[];
  }

  /**
   * No description
   * @tags ReferenceData
   * @name ReferenceDataGetGeocacheStatuses
   * @summary Returns the available geocache statuses
   * @request GET:/v{api-version}/geocachestatuses
   * @response `200` `(string)[]` Ok
   * @response `401` `void` Unauthorized
   * @response `429` `void` Too many requests
   */
  export namespace ReferenceDataGetGeocacheStatuses {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string[];
  }

  /**
   * No description
   * @tags ReferenceData
   * @name ReferenceDataGetMembershipLevels
   * @summary Returns the membership levels
   * @request GET:/v{api-version}/membershiplevels
   * @response `200` `(GeocachingMembershipLevel)[]` Ok
   * @response `401` `void` Unauthorized
   * @response `429` `void` Too many requests
   */
  export namespace ReferenceDataGetMembershipLevels {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingMembershipLevel[];
  }

  /**
   * No description
   * @tags ReferenceData
   * @name ReferenceDataGetTrackableLogTypes
   * @summary Returns the trackable log types
   * @request GET:/v{api-version}/trackablelogtypes
   * @response `200` `(GeocachingTrackableLogType)[]` Ok
   * @response `401` `void` Unauthorized
   * @response `429` `void` Too many requests
   */
  export namespace ReferenceDataGetTrackableLogTypes {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingTrackableLogType[];
  }

  /**
   * No description
   * @tags ReferenceData
   * @name ReferenceDataGetStatesByCountry
   * @summary Returns the state (aka region) names and ids
   * @request GET:/v{api-version}/countries/{countryId}/states
   * @response `200` `(GeocachingState)[]` Ok
   * @response `401` `void` Unauthorized
   * @response `429` `void` Too many requests
   */
  export namespace ReferenceDataGetStatesByCountry {
    export type RequestParams = {
      /** @format int32 */
      countryId: number;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingState[];
  }

  /**
   * No description
   * @tags Statistics
   * @name StatisticsGetDifficultyTerrainGridAsync
   * @summary Returns the D/T grid
   * @request GET:/v{api-version}/statistics/difficultyterrain
   * @response `200` `GeocachingDifficultyTerrainStatistics` OK
   */
  export namespace StatisticsGetDifficultyTerrainGridAsync {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingDifficultyTerrainStatistics;
  }

  /**
   * @description This method will return a single trackable log.
   * @tags TrackableLogs
   * @name TrackableLogsGetTrackableLog
   * @summary Get a single trackable log
   * @request GET:/v{api-version}/trackablelogs/{referenceCode}
   * @response `200` `GeocachingTrackableLog` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace TrackableLogsGetTrackableLog {
    export type RequestParams = {
      /** The reference code of the trackable log (example: TL100). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Property fields you want to return, defaults to referencecode
       * @default "referencecode"
       */
      fields?: string;
      /** @default "" */
      expand?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingTrackableLog;
  }

  /**
   * @description This method will return a trackable log.
   * @tags TrackableLogs
   * @name TrackableLogsUpdateTrackableLog
   * @summary Update a trackable log
   * @request PUT:/v{api-version}/trackablelogs/{referenceCode}
   * @response `200` `GeocachingTrackableLog` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `422` `void` Unprocessable Entity
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace TrackableLogsUpdateTrackableLog {
    export type RequestParams = {
      /** The log reference code (example: TL100). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Property fields you want to return, defaults to referencecode
       * @default "referencecode"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingTrackableLog;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingTrackableLog;
  }

  /**
   * @description This method will not return anything in the body.
   * @tags TrackableLogs
   * @name TrackableLogsDeleteTrackableLog
   * @summary Deletes a trackable log
   * @request DELETE:/v{api-version}/trackablelogs/{referenceCode}
   * @response `204` `object` No Content
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace TrackableLogsDeleteTrackableLog {
    export type RequestParams = {
      /** The reference code of the trackable log (example: TL100). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * @description This method will return an array of trackable logs.
   * @tags TrackableLogs
   * @name TrackableLogsGetTrackableLogs
   * @summary Get user's trackable logs
   * @request GET:/v{api-version}/trackablelogs
   * @response `200` `(GeocachingTrackableLog)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace TrackableLogsGetTrackableLogs {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Defaults to 0.
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * Defaults to 10, max of 50.
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * Property fields you want to return, defaults to referencecode
       * @default "referencecode"
       */
      fields?: string;
      /** @default "" */
      expand?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingTrackableLog[];
  }

  /**
   * @description This method will return the created trackable log.
   * @tags TrackableLogs
   * @name TrackableLogsCreateTrackableLog
   * @summary Add a log to a trackable
   * @request POST:/v{api-version}/trackablelogs
   * @response `200` `GeocachingTrackableLog` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace TrackableLogsCreateTrackableLog {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Property fields you want to return, defaults to referencecode
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingPostTrackableLog;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingTrackableLog;
  }

  /**
   * @description This method will return a list of images.
   * @tags TrackableLogs
   * @name TrackableLogsGetImages
   * @summary Get a the images attached to a trackable log
   * @request GET:/v{api-version}/trackablelogs/{referenceCode}/images
   * @response `200` `(GeocachingImage)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace TrackableLogsGetImages {
    export type RequestParams = {
      /** The reference code of the trackable log (example: TL100). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Amount of images to skip over used for pagination. Defaults to 0.
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * Amount of images to include in results. Defaults to 10.
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * Properties you want to return. Defaults to referencecode.
       * @default "referencecode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingImage[];
  }

  /**
   * @description This method will return a single image.
   * @tags TrackableLogs
   * @name TrackableLogsAddImage
   * @summary Add an image to a trackable log
   * @request POST:/v{api-version}/trackablelogs/{referenceCode}/images
   * @response `200` `GeocachingImage` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace TrackableLogsAddImage {
    export type RequestParams = {
      /** The reference code of the trackable log (example: TL100). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Property fields you want to return, defaults to url
       * @default "url"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingPostImage;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingImage;
  }

  /**
   * @description This method will not return anything in the body.
   * @tags TrackableLogs
   * @name TrackableLogsDeleteTrackableLogImages
   * @summary Deletes a trackable log image
   * @request DELETE:/v{api-version}/trackablelogs/{referenceCode}/images/{imageGuid}
   * @response `204` `object` No Content
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace TrackableLogsDeleteTrackableLogImages {
    export type RequestParams = {
      /** The reference code of the trackable log (example: TL100). */
      referenceCode: string;
      /**
       * the guid of the image
       * @format uuid
       */
      imageGuid: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * @description This method will return a single trackable.
   * @tags Trackables
   * @name TrackablesGetTrackable
   * @summary Get a single trackable
   * @request GET:/v{api-version}/trackables/{referenceCode}
   * @response `200` `GeocachingTrackable` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace TrackablesGetTrackable {
    export type RequestParams = {
      /** The reference code or tracking number of the trackable (example: TB100). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * fields you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
      /** @default "" */
      expand?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingTrackable;
  }

  /**
   * No description
   * @tags Trackables
   * @name TrackablesGetTrackableJourneys
   * @summary Gets the trackable travel locations
   * @request GET:/v{api-version}/trackables/{referenceCode}/journeys
   * @response `200` `(GeocachingTrackableJourney)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace TrackablesGetTrackableJourneys {
    export type RequestParams = {
      /** The reference code or tracking number of the trackable (example: TB100). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Defaults to 0.
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * Defaults to 50, max limit of 1000
       * @format int32
       * @default 50
       */
      take?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingTrackableJourney[];
  }

  /**
   * @description This method will return a list of geocoin types.
   * @tags Trackables
   * @name TrackablesGetGeocoinTypes
   * @summary Get paged geocoin types
   * @request GET:/v{api-version}/trackables/geocointypes
   * @response `200` `(GeocachingTrackableType)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace TrackablesGetGeocoinTypes {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Amount of types to skip over used for pagination. Defaults to 0.
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * Amount of types to include in results. Defaults to 10.
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * Properties you want to return. Defaults to id.
       * @default "id"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingTrackableType[];
  }

  /**
   * @description This method will return a list of images.
   * @tags Trackables
   * @name TrackablesGetImages
   * @summary Get the images attached to a trackable
   * @request GET:/v{api-version}/trackables/{referenceCode}/Images
   * @response `200` `(GeocachingImage)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace TrackablesGetImages {
    export type RequestParams = {
      /** The reference code of the trackable (example: TB100). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Amount of images to skip over used for pagination. Defaults to 0.
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * Amount of images to include in results. Defaults to 10.
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * Properties you want to return. Defaults to url.
       * @default "url"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingImage[];
  }

  /**
   * @description This method will return a list of trackables, either by specified codes or get user trackables if you leave referenceCodes null
   * @tags Trackables
   * @name TrackablesGetUserTrackables
   * @summary Gets a list of trackables
   * @request GET:/v{api-version}/trackables
   * @response `200` `(GeocachingTrackable)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace TrackablesGetUserTrackables {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /** The reference code or tracking number of the trackables (example: TB100). Don't pass in this param if you want to return user trackables */
      referenceCodes?: string;
      /**
       * 1= inventory, 2 = collection, 3 = owned (default: 1)
       * @default 1
       */
      type?: GeocachingTrackablesGetUserTrackablesParamsTypeEnum;
      /**
       * default = 0
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * default = 10
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * fields you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
      /** @default "" */
      expand?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingTrackable[];
  }

  /**
   * @description This method will return a list of trackable logs.
   * @tags Trackables
   * @name TrackablesGetTrackableLogs
   * @summary Get a list of trackable logs for the specified trackable
   * @request GET:/v{api-version}/trackables/{referenceCode}/trackablelogs
   * @response `200` `(GeocachingTrackableLog)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace TrackablesGetTrackableLogs {
    export type RequestParams = {
      /** The reference code of the trackable (example: TB100). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * how many logs to skip over
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * how many logs to retrieve
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * fields you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
      /** @default "" */
      expand?: string;
      /** what log types to include with results. defaults to all */
      logTypes?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingTrackableLog[];
  }

  /**
   * @description This method will return a list of privacy settings and their current value (1 = private, 2 = friends, 3 = public)
   * @tags Users
   * @name UsersGetUserPrivacySettings
   * @summary Gets the privacy settings for a user
   * @request GET:/v{api-version}/users/{referenceCode}/privacysettings
   * @response `200` `Record<string,object>` OK
   */
  export namespace UsersGetUserPrivacySettings {
    export type RequestParams = {
      /** the reference code of the user */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Record<string, object>;
  }

  /**
   * @description This method will return a user.
   * @tags Users
   * @name UsersGetUser
   * @summary Get a user
   * @request GET:/v{api-version}/users/{referenceCode}
   * @response `200` `GeocachingUser` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace UsersGetUser {
    export type RequestParams = {
      /** The reference code of the user (example: PR18). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Property fields you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingUser;
  }

  /**
   * @description This method will return an array of user reference codes.
   * @tags Users
   * @name UsersGetOptedOutUsers
   * @summary Gets opted out users
   * @request GET:/v{api-version}/optedoutusers
   * @response `200` `(string)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace UsersGetOptedOutUsers {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * filters the results to users that have opted out after this datetime in utc
       * @format date-time
       */
      updatedSinceUtc: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string[];
  }

  /**
   * @description This method will return a list of images.
   * @tags Users
   * @name UsersGetImages
   * @summary Get the images attached to a user profile
   * @request GET:/v{api-version}/users/{referenceCode}/images
   * @response `200` `(GeocachingImage)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace UsersGetImages {
    export type RequestParams = {
      /** The reference code of the user (example: PR18). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Amount of images to skip over used for pagination. Defaults to 0.
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * Amount of images to include in results. Defaults to 10.
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * Properties you want to return. Defaults to url.
       * @default "url"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingImage[];
  }

  /**
   * @description This method will return a list of souvenirs.
   * @tags Users
   * @name UsersGetSouvenirs
   * @summary Get an account's souvenirs
   * @request GET:/v{api-version}/users/{referenceCode}/souvenirs
   * @response `200` `(GeocachingSouvenir)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace UsersGetSouvenirs {
    export type RequestParams = {
      /** The reference code of the user (example: PR18). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * @format int32
       * @default 20
       */
      take?: number;
      /**
       * Property fields you want to return, defaults to title
       * @default "title"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingSouvenir[];
  }

  /**
   * @description This method will return a list of users.
   * @tags Users
   * @name UsersGetUsers
   * @summary Get a list of users
   * @request GET:/v{api-version}/users
   * @response `200` `(GeocachingUser)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace UsersGetUsers {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /** comma delimited list of user reference codes to retrieve (example: PR1,PR2,PR3) */
      referenceCodes?: string;
      /** comma delimited list of usernames to retrieve */
      usernames?: string;
      /**
       * fields you want to return, defaults to "referenceCode"
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingUser[];
  }

  /**
   * @description This method will return a list of geocache lists.
   * @tags Users
   * @name UsersGetLists
   * @summary Get a list of user's geocache lists
   * @request GET:/v{api-version}/users/{referenceCode}/lists
   * @response `200` `(GeocachingGeocacheList)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace UsersGetLists {
    export type RequestParams = {
      /** user identifier, use "me" to get lists for calling user */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * comma delimited list of list types to return (fl, wl, il, bm, pq). Defaults to "bm"
       * @default "bm"
       */
      types?: string;
      /**
       * how many lists to skip over
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * how many lists to retrieve
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * fields you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheList[];
  }

  /**
   * @description This method will return a list of geocache lists.
   * @tags Users
   * @name UsersGetGeocacheLogs
   * @summary Get a list of a user's geocache logs
   * @request GET:/v{api-version}/users/{referenceCode}/geocachelogs
   * @response `200` `(GeocachingGeocacheLog)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace UsersGetGeocacheLogs {
    export type RequestParams = {
      /** user identifier, use "me" to get lists for calling user */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * how many lists to skip over
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * how many lists to retrieve
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * filters results to logs with logdates after this date (inclusive)
       * @format date-time
       */
      afterDate?: string;
      /**
       * filters results to logs with logdates before this date (inclusive)
       * @format date-time
       */
      beforeDate?: string;
      /** filter the results to one geocache if provided */
      geocacheCode?: string;
      /**
       * fields you want to return, defaults to referenceCode
       * @default "referenceCode"
       */
      fields?: string;
      /**
       * flag to include archived logs
       * @default false
       */
      includeArchived?: boolean;
      /** log types to include in response, defaults to all */
      logTypes?: string;
      /**
       * fields to include with base geocache log object
       * @default ""
       */
      expand?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingGeocacheLog[];
  }

  /**
   * @description This method will return an array of user waypoints.
   * @tags UserWaypoints
   * @name UserWaypointsGetUserWaypoints
   * @summary Get a list of user waypoints for the calling user
   * @request GET:/v{api-version}/userwaypoints
   * @response `200` `(GeocachingUserWaypoint)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace UserWaypointsGetUserWaypoints {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * How many waypoints to skip (default = 0)
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * How many drafts to return (default = 10)
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * Include corrected coordinates in the results. default = false
       * @default false
       */
      includeCorrectedCoordinates?: boolean;
      /**
       * Properties you want to return (default = referenceCode)
       * @default "referencecode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingUserWaypoint[];
  }

  /**
   * @description This method will return the user waypoint created.
   * @tags UserWaypoints
   * @name UserWaypointsCreateUserWaypoint
   * @summary Create a user waypoint
   * @request POST:/v{api-version}/userwaypoints
   * @response `201` `GeocachingUserWaypoint` Created
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace UserWaypointsCreateUserWaypoint {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Properties you want to return (default = referenceCode)
       * @default "referencecode"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingPostUserWaypoint;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingUserWaypoint;
  }

  /**
   * @description This method will return a paged list of userwaypoints
   * @tags UserWaypoints
   * @name UserWaypointsGetGeocacheUserWaypoints
   * @summary Gets the user waypoints for a geocache
   * @request GET:/v{api-version}/geocaches/{referenceCode}/userwaypoints
   * @response `200` `(GeocachingUserWaypoint)[]` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace UserWaypointsGetGeocacheUserWaypoints {
    export type RequestParams = {
      /** The reference code of the geocache (example: GC25). */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * How many user waypoints to skip. default = 0
       * @format int32
       * @default 0
       */
      skip?: number;
      /**
       * How many user waypoints to include in result set. default = 10
       * @format int32
       * @default 10
       */
      take?: number;
      /**
       * Include corrected coordinates in the results. default = false
       * @default false
       */
      includeCorrectedCoordinates?: boolean;
      /**
       * Properties you want to return. default = referencecode
       * @default "referencecode"
       */
      fields?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingUserWaypoint[];
  }

  /**
   * @description This method will return the updated user waypoint.
   * @tags UserWaypoints
   * @name UserWaypointsUpdateUserWaypoint
   * @summary Update a user waypoint
   * @request PUT:/v{api-version}/userwaypoints/{referenceCode}
   * @response `201` `GeocachingUserWaypoint` Created
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace UserWaypointsUpdateUserWaypoint {
    export type RequestParams = {
      /** The identifier of the user waypoint */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Properties you want to return (default = referenceCode)
       * @default "referencecode"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingUserWaypoint;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingUserWaypoint;
  }

  /**
   * @description This method will return no content.
   * @tags UserWaypoints
   * @name UserWaypointsDeleteUserWaypoint
   * @summary Delete a user waypoint
   * @request DELETE:/v{api-version}/userwaypoints/{referenceCode}
   * @response `201` `object` Created
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `409` `void` Conflict
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace UserWaypointsDeleteUserWaypoint {
    export type RequestParams = {
      /** The identifier of the user waypoint */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * @description This method will return the created or updated corrected coordinate.
   * @tags UserWaypoints
   * @name UserWaypointsUpsertCorrectedCoordinates
   * @summary Upsert a corrected coordinate for the calling user
   * @request PUT:/v{api-version}/geocaches/{referenceCode}/correctedcoordinates
   * @response `200` `GeocachingUserWaypoint` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace UserWaypointsUpsertCorrectedCoordinates {
    export type RequestParams = {
      /** the geocache identifier */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * Properties you want to return (default = referenceCode)
       * @default "referencecode"
       */
      fields?: string;
    };
    export type RequestBody = GeocachingCoordinates;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingUserWaypoint;
  }

  /**
   * No description
   * @tags UserWaypoints
   * @name UserWaypointsDeleteCorrectedCoordinates
   * @summary Delete a corrected coordinate for the calling user
   * @request DELETE:/v{api-version}/geocaches/{referenceCode}/correctedcoordinates
   * @response `204` `object` No Content
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too Many Requests
   * @response `500` `void` Server Error
   */
  export namespace UserWaypointsDeleteCorrectedCoordinates {
    export type RequestParams = {
      /** geocache identifier */
      referenceCode: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = object;
  }

  /**
   * No description
   * @tags Utilities
   * @name UtilitiesGetReferenceCode
   * @summary Returns the reference code from an id
   * @request GET:/v{api-version}/utilities/referencecode
   * @response `200` `string` Ok
   * @response `429` `void` Too many requests
   */
  export namespace UtilitiesGetReferenceCode {
    export type RequestParams = {
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {
      /**
       * the id to get the reference code for
       * @format int64
       */
      id: number;
      /** the prefix of the reference code (e.g. GC) */
      codePrefix: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }

  /**
   * @description This method will return the cartridge file as base64 encoded binary.
   * @tags Wherigo
   * @name WherigoGetWherigoCartridge
   * @summary Gets the Wherigo cartridge
   * @request GET:/v{api-version}/wherigo/{guid}/cartridge
   * @response `200` `GeocachingWherigoCartridge` Ok
   * @response `400` `void` Bad request
   * @response `401` `void` Not Authorized
   * @response `403` `void` Forbidden
   * @response `404` `void` Not Found
   * @response `429` `void` Too many requests
   * @response `500` `void` Server Error
   */
  export namespace WherigoGetWherigoCartridge {
    export type RequestParams = {
      /**
       * Identifier of the Wherigo cartridge
       * @format uuid
       */
      guid: string;
      /**
       * The requested API version
       * @default "1.0"
       */
      apiVersion: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GeocachingWherigoCartridge;
  }
}

export namespace Status {
  /**
   * @description This method return Ok.
   * @tags Status
   * @name StatusPingAsync
   * @summary Returns Ok.
   * @request GET:/status/ping
   * @response `200` `void` Ok
   * @response `429` `void` Too many requests
   */
  export namespace StatusPingAsync {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * The requested API version
       * @default "1.0"
       */
      "api-version": string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://api.groundspeak.com";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) => {
      if (input instanceof FormData) {
        return input;
      }

      return Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData());
    },
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const responseToParse = responseFormat ? response.clone() : response;
      const data = !responseFormat
        ? r
        : await responseToParse[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title API v1.0
 * @version v1
 * @baseUrl https://api.groundspeak.com
 * @contact API Team <apihelp@geocaching.com> (http://www.geocaching.com)
 *
 * API version 1.0.
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  vApiVersion = {
    /**
     * @description This method will return an adventure along with its stage(s). Only the first stage is returned for sequential adventures. This method can only be called by premium members.
     *
     * @tags Adventures
     * @name AdventuresGet
     * @summary Get a single adventure
     * @request GET:/v{api-version}/adventures/{adventureId}
     * @response `200` `GeocachingAdventureModel` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    adventuresGet: (
      adventureId: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingAdventureModel, void>({
        path: `/v${apiVersion}/adventures/${adventureId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return search results.
     *
     * @tags Adventures
     * @name AdventuresSearch
     * @summary Search for Adventures
     * @request GET:/v{api-version}/adventures/search
     * @response `200` `(GeocachingAdventureBasicInfoModel)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    adventuresSearch: (
      apiVersion: string,
      query: {
        /** The query used on the adventures. */
        q: string;
        /**
         * Defaults to 0, how many adventures to skip.
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * Defaults to 50, how many adventures to return.
         * @format int32
         * @default 50
         */
        take?: number;
        /**
         * Properties you want to return, defaults to "id"
         * @default "id"
         */
        fields?: string;
        /**
         * true to exclude owned caches/labs by the requesting user; otherwise, false includes all results.
         * @default false
         */
        excludeOwned?: boolean;
        /**
         * true to exclude completed caches/labs by the requesting user; otherwise, false includes all results.
         * @default false
         */
        excludeCompleted?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingAdventureBasicInfoModel[], void>({
        path: `/v${apiVersion}/adventures/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Adventures
     * @name AdventuresSearchStages
     * @summary Search for stages independently of adventures
     * @request POST:/v{api-version}/adventures/stages/search
     * @response `200` `(GeocachingStageSearchResponse)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    adventuresSearchStages: (
      apiVersion: string,
      stageSearchModel: GeocachingStageSearchModel,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingStageSearchResponse[], void>({
        path: `/v${apiVersion}/adventures/stages/search`,
        method: "POST",
        body: stageSearchModel,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of requests including both inbound and outbound requests.
     *
     * @tags Friends
     * @name FriendsGetFriendRequests
     * @summary Get a list of friend requests for the calling user
     * @request GET:/v{api-version}/friendrequests
     * @response `200` `(GeocachingFriendRequest)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    friendsGetFriendRequests: (
      apiVersion: string,
      query?: {
        /**
         * How many requests to skip (default = 0)
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * How many requests to return (default = 10, max = 50)
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * Properties you want to return, defaults to id
         * @default "id"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingFriendRequest[], void>({
        path: `/v${apiVersion}/friendrequests`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the friend request created.
     *
     * @tags Friends
     * @name FriendsCreateFriendRequest
     * @summary Create a friend request
     * @request POST:/v{api-version}/friendrequests
     * @response `201` `GeocachingFriendRequest` Created
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    friendsCreateFriendRequest: (
      apiVersion: string,
      friendRequest: GeocachingFriendRequest,
      query?: {
        /**
         * Properties you want to return, defaults to id
         * @default "id"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingFriendRequest, void>({
        path: `/v${apiVersion}/friendrequests`,
        method: "POST",
        query: query,
        body: friendRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of Users.
     *
     * @tags Friends
     * @name FriendsGetFriends
     * @summary Get a list of friends for the calling user
     * @request GET:/v{api-version}/friends
     * @response `200` `(GeocachingUser)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    friendsGetFriends: (
      apiVersion: string,
      query?: {
        /**
         * How many friends to skip (default = 0)
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * How many friends to return (default = 10, max = 50)
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * Sort order (default = FriendedDate-)
         * @default "FriendedDate-"
         */
        sort?: string;
        /**
         * Properties you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingUser[], void>({
        path: `/v${apiVersion}/friends`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of GeocacheLogs.
     *
     * @tags Friends
     * @name FriendsGetFriendsGeocacheLogs
     * @summary Get a list of friends geocache logs for specified geocache
     * @request GET:/v{api-version}/friends/geocaches/{referenceCode}/geocachelogs
     * @response `200` `(GeocachingGeocacheLog)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    friendsGetFriendsGeocacheLogs: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * How many friends to skip (default = 0)
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * How many logs to return (default = 10, max = 50)
         * @format int32
         * @default 10
         */
        take?: number;
        /** log types to include in response, defaults to all */
        logTypes?: string;
        /**
         * Properties you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
        /**
         * fields to expand on the geocache log
         * @default ""
         */
        expand?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheLog[], void>({
        path: `/v${apiVersion}/friends/geocaches/${referenceCode}/geocachelogs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Friends
     * @name FriendsAcceptFriendRequest
     * @summary Accept a friend request
     * @request POST:/v{api-version}/friendrequests/{requestId}/accept
     * @response `200` `void` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    friendsAcceptFriendRequest: (
      requestId: number,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/v${apiVersion}/friendrequests/${requestId}/accept`,
        method: "POST",
        ...params,
      }),

    /**
     * @description This method will return no content.
     *
     * @tags Friends
     * @name FriendsRemoveFriend
     * @summary Removes a friend
     * @request DELETE:/v{api-version}/friends/{userCode}
     * @response `204` `object` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    friendsRemoveFriend: (
      userCode: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/v${apiVersion}/friends/${userCode}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return no content.
     *
     * @tags Friends
     * @name FriendsDeleteFriendRequest
     * @summary Delete a friend request
     * @request DELETE:/v{api-version}/friendrequests/{requestId}
     * @response `204` `object` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    friendsDeleteFriendRequest: (
      requestId: number,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/v${apiVersion}/friendrequests/${requestId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a single geocache log.
     *
     * @tags GeocacheLogs
     * @name GeocacheLogsGetGeocacheLog
     * @summary Get a single geocache log
     * @request GET:/v{api-version}/geocachelogs/{referenceCode}
     * @response `200` `GeocachingGeocacheLog` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocacheLogsGetGeocacheLog: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * fields to include with base geocache log object
         * @default ""
         */
        expand?: string;
        /**
         * Property fields you want to return, defaults to referencecode
         * @default "referencecode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheLog, void>({
        path: `/v${apiVersion}/geocachelogs/${referenceCode}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a geocache log.
     *
     * @tags GeocacheLogs
     * @name GeocacheLogsUpdateGeocacheLog
     * @summary Update a geocache log
     * @request PUT:/v{api-version}/geocachelogs/{referenceCode}
     * @response `200` `GeocachingGeocacheLog` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `422` `void` Unprocessable Entity
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocacheLogsUpdateGeocacheLog: (
      referenceCode: string,
      apiVersion: string,
      log: GeocachingGeocacheLog,
      query?: {
        /**
         * Property fields you want to return, defaults to referencecode
         * @default "referencecode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheLog, void>({
        path: `/v${apiVersion}/geocachelogs/${referenceCode}`,
        method: "PUT",
        query: query,
        body: log,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will not have a response body.
     *
     * @tags GeocacheLogs
     * @name GeocacheLogsDeleteGeocacheLog
     * @summary Delete a geocache log
     * @request DELETE:/v{api-version}/geocachelogs/{referenceCode}
     * @response `204` `object` No Content
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocacheLogsDeleteGeocacheLog: (
      referenceCode: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/v${apiVersion}/geocachelogs/${referenceCode}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of geocache log upvote info.
     *
     * @tags GeocacheLogs
     * @name GeocacheLogsGetLogUpvotes
     * @summary Get a the upvotes associated with the provided geocache logs
     * @request GET:/v{api-version}/geocachelogs/upvotes
     * @response `200` `(GeocachingGeocacheLogUpvote)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `500` `void` Server Error
     */
    geocacheLogsGetLogUpvotes: (
      apiVersion: string,
      query: {
        /** Comma delimited list of geocache log reference codes (example: GL100). */
        referenceCodes: string;
        /**
         * Properties you want to return. Defaults to "geocacheLogCode".
         * @default "geocacheLogCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheLogUpvote[], void>({
        path: `/v${apiVersion}/geocachelogs/upvotes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of images.
     *
     * @tags GeocacheLogs
     * @name GeocacheLogsGetImages
     * @summary Get a the images attached to a geocache log
     * @request GET:/v{api-version}/geocachelogs/{referenceCode}/images
     * @response `200` `(GeocachingImage)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocacheLogsGetImages: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * Amount of images to skip over used for pagination. Defaults to 0.
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * Amount of images to include in results. Defaults to 10.
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * Properties you want to return. Defaults to "url".
         * @default "url"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingImage[], void>({
        path: `/v${apiVersion}/geocachelogs/${referenceCode}/images`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a single Geocache.
     *
     * @tags GeocacheLogs
     * @name GeocacheLogsAddImage
     * @summary Add an image to a geocache log
     * @request POST:/v{api-version}/geocachelogs/{referenceCode}/images
     * @response `200` `GeocachingImage` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocacheLogsAddImage: (
      referenceCode: string,
      apiVersion: string,
      image: GeocachingPostImage,
      query?: {
        /**
         * fields to return on the response object, defaults to "url"
         * @default "url"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingImage, void>({
        path: `/v${apiVersion}/geocachelogs/${referenceCode}/images`,
        method: "POST",
        query: query,
        body: image,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the created geocache log.
     *
     * @tags GeocacheLogs
     * @name GeocacheLogsCreateGeocacheLog
     * @summary Add a log to a geocache
     * @request POST:/v{api-version}/geocachelogs
     * @response `200` `GeocachingGeocacheLog` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocacheLogsCreateGeocacheLog: (
      apiVersion: string,
      log: GeocachingPostGeocacheLog,
      query?: {
        /**
         * the fields to return in the response body, defaults to referencecode
         * @default "referencecode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheLog, void>({
        path: `/v${apiVersion}/geocachelogs`,
        method: "POST",
        query: query,
        body: log,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the upvote data for the upvoted geocache log.
     *
     * @tags GeocacheLogs
     * @name GeocacheLogsAddUpvote
     * @summary Add an upvote to a geocache log
     * @request POST:/v{api-version}/geocachelogs/{referenceCode}/upvotes/{upvoteTypeId}
     * @response `201` `GeocachingGeocacheLogUpvote` Created
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `500` `void` Server Error
     */
    geocacheLogsAddUpvote: (
      referenceCode: string,
      upvoteTypeId: number,
      apiVersion: string,
      query?: {
        /**
         * Properties you want to return. Defaults to "geocacheLogCode".
         * @default "geocacheLogCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheLogUpvote, void>({
        path: `/v${apiVersion}/geocachelogs/${referenceCode}/upvotes/${upvoteTypeId}`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will not have a response body.
     *
     * @tags GeocacheLogs
     * @name GeocacheLogsDeleteUpvote
     * @summary Delete a geocache log upvote
     * @request DELETE:/v{api-version}/geocachelogs/{referenceCode}/upvotes/{upvoteTypeId}
     * @response `204` `object` No Content
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `500` `void` Server Error
     */
    geocacheLogsDeleteUpvote: (
      referenceCode: string,
      upvoteTypeId: number,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/v${apiVersion}/geocachelogs/${referenceCode}/upvotes/${upvoteTypeId}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will not return anything in the body.
     *
     * @tags GeocacheLogs
     * @name GeocacheLogsDeleteGeocacheLogImages
     * @summary Deletes a geocache log image
     * @request DELETE:/v{api-version}/geocachelogs/{referenceCode}/images/{imageGuid}
     * @response `204` `object` No Content
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocacheLogsDeleteGeocacheLogImages: (
      referenceCode: string,
      imageGuid: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/v${apiVersion}/geocachelogs/${referenceCode}/images/${imageGuid}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the upserted text.
     *
     * @tags GeocacheNotes
     * @name GeocacheNotesUpsertNote
     * @summary Upsert a geocache note for the calling user
     * @request PUT:/v{api-version}/geocaches/{referenceCode}/notes
     * @response `200` `GeocachingGeocacheNote` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocacheNotesUpsertNote: (
      referenceCode: string,
      apiVersion: string,
      geocacheNote: GeocachingGeocacheNote,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheNote, void>({
        path: `/v${apiVersion}/geocaches/${referenceCode}/notes`,
        method: "PUT",
        body: geocacheNote,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return no content.
     *
     * @tags GeocacheNotes
     * @name GeocacheNotesDeleteNote
     * @summary Delete a geocache note for the calling user
     * @request DELETE:/v{api-version}/geocaches/{referenceCode}/notes
     * @response `204` `object` No content
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocacheNotesDeleteNote: (
      referenceCode: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/v${apiVersion}/geocaches/${referenceCode}/notes`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a single Geocache.
     *
     * @tags Geocaches
     * @name GeocachesGetGeocache
     * @summary Get a single Geocache
     * @request GET:/v{api-version}/geocaches/{referenceCode}
     * @response `200` `GeocachingGeocache` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocachesGetGeocache: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * Select to return a geocache object without the description and hints
         * @default false
         */
        lite?: boolean;
        /**
         * fields to include with base geocache object
         * @default ""
         */
        expand?: string;
        /**
         * fields you want to return, defaults to "referenceCode"
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocache, void>({
        path: `/v${apiVersion}/geocaches/${referenceCode}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of users.
     *
     * @tags Geocaches
     * @name GeocachesGetFavoritedBy
     * @summary Get a list of Users that have favorited a geocache
     * @request GET:/v{api-version}/geocaches/{referenceCode}/favoritedby
     * @response `200` `(GeocachingUser)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocachesGetFavoritedBy: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * how many users to skip
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * how many users to retrieve
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * fields you want to return, defaults to "referenceCode"
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingUser[], void>({
        path: `/v${apiVersion}/geocaches/${referenceCode}/favoritedby`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of geocaches.
     *
     * @tags Geocaches
     * @name GeocachesGetGeocaches
     * @summary Get a list of geocaches
     * @request GET:/v{api-version}/geocaches
     * @response `200` `(GeocachingGeocache)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocachesGetGeocaches: (
      apiVersion: string,
      query: {
        /** comma delimited list of geocache reference codes to retrieve (example: GC25,GC26,GC27). Reference codes not beginning with GC will be ignored. */
        referenceCodes: string;
        /**
         * Select to return a geocache object without the description and hints
         * @default false
         */
        lite?: boolean;
        /**
         * fields to include with base geocache object
         * @default ""
         */
        expand?: string;
        /**
         * fields you want to return, defaults to "referenceCode"
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocache[], void>({
        path: `/v${apiVersion}/geocaches`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of trackables.
     *
     * @tags Geocaches
     * @name GeocachesGetTrackables
     * @summary Get a list of trackables in a geocache
     * @request GET:/v{api-version}/geocaches/{referenceCode}/trackables
     * @response `200` `(GeocachingTrackable)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocachesGetTrackables: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * how many trackables to skip
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * how many trackables to retrieve
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * fields you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
        /** @default "" */
        expand?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingTrackable[], void>({
        path: `/v${apiVersion}/geocaches/${referenceCode}/trackables`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return search results.
     *
     * @tags Geocaches
     * @name GeocachesSearch
     * @summary Search for Geocaches
     * @request GET:/v{api-version}/geocaches/search
     * @response `200` `(GeocachingGeocache)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocachesSearch: (
      apiVersion: string,
      query: {
        /** The query used on the geocaches */
        q: string;
        /**
         * Defaults to distance if coords are provided otherwise favoritepoints (distance, favorites, cachename, size, difficulty, terrain, founddate, placeddate, id)
         * @default ""
         */
        sort?: string;
        /**
         * Return a lite version of geocache (no description, hint, or
         * @default true
         */
        lite?: boolean;
        /**
         * Defaults to 0, how many geocaches to skip
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * Defaults to 50, how many geocaches to return
         * @format int32
         * @default 50
         */
        take?: number;
        /**
         * fields to include with base geocache object
         * @default ""
         */
        expand?: string;
        /**
         * Properties you want to return, defaults to "referencecode"
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocache[], void>({
        path: `/v${apiVersion}/geocaches/search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of images.
     *
     * @tags Geocaches
     * @name GeocachesGetImages
     * @summary Get a list of images for a geocache
     * @request GET:/v{api-version}/geocaches/{referenceCode}/images
     * @response `200` `(GeocachingImage)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocachesGetImages: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * how many images to skip
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * how many images to retrieve
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * fields you want to return, defaults to "url"
         * @default "url"
         */
        fields?: string;
        /**
         * Include images on child resources (geocache logs images included with geocache images). This is currently only implemented for geocaches
         * @default true
         */
        includeGallery?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingImage[], void>({
        path: `/v${apiVersion}/geocaches/${referenceCode}/images`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of geocache logs.
     *
     * @tags Geocaches
     * @name GeocachesGetLogs
     * @summary Get a list of geocache logs for the specified geocache
     * @request GET:/v{api-version}/geocaches/{referenceCode}/geocachelogs
     * @response `200` `(GeocachingGeocacheLog)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocachesGetLogs: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * how many logs to skip over
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * how many logs to retrieve
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * fields to include with base geocache object
         * @default ""
         */
        expand?: string;
        /**
         * how to sort the logs
         * @default "newest"
         */
        sort?: string;
        /**
         * fields you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
        /** log types to include in response, defaults to all */
        logTypes?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheLog[], void>({
        path: `/v${apiVersion}/geocaches/${referenceCode}/geocachelogs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Use the status codes to verify if final coordinates are correct
     *
     * @tags Geocaches
     * @name GeocachesCheckFinalCoordinates
     * @summary Check Final Coordinates
     * @request POST:/v{api-version}/geocaches/{referenceCode}/finalcoordinates
     * @response `204` `GeocachingGeocache` No Content
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocachesCheckFinalCoordinates: (
      referenceCode: string,
      apiVersion: string,
      coordinates: GeocachingCoordinates,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocache, void>({
        path: `/v${apiVersion}/geocaches/${referenceCode}/finalcoordinates`,
        method: "POST",
        body: coordinates,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the successfully created trackable logs.
     *
     * @tags Geocaches
     * @name GeocachesBulkCreateTrackableLogs
     * @summary Create multiple trackable logs on a single geocache
     * @request POST:/v{api-version}/geocaches/{referenceCode}/bulktrackablelogs
     * @response `200` `GeocachingPartialResponseTrackableLog` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geocachesBulkCreateTrackableLogs: (
      referenceCode: string,
      apiVersion: string,
      logs: GeocachingPostTrackableLog[],
      query?: {
        /**
         * Property fields you want to return, defaults to referencecode
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingPartialResponseTrackableLog, void>({
        path: `/v${apiVersion}/geocaches/${referenceCode}/bulktrackablelogs`,
        method: "POST",
        query: query,
        body: logs,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoTours
     * @name GeoToursGetGeoTour
     * @summary Get a GeoTour
     * @request GET:/v{api-version}/geotours/{referenceCode}
     * @response `200` `(GeocachingGeoTour)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geoToursGetGeoTour: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * Properties you want to return, defaults to "referencecode"
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeoTour[], void>({
        path: `/v${apiVersion}/geotours/${referenceCode}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoTours
     * @name GeoToursGetGeoTours
     * @summary Get GeoTours
     * @request GET:/v{api-version}/geotours
     * @response `200` `(GeocachingGeoTour)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geoToursGetGeoTours: (
      apiVersion: string,
      query?: {
        /**
         * Defaults to unsorted (distance, name). If using distance sorting, must provide latitude and longitude (e.g. dist+:[47,-122])
         * @default ""
         */
        sort?: string;
        /**
         * Defaults to 0, how many geocaches to skip
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * Defaults to 20, how many geocaches to return
         * @format int32
         * @default 20
         */
        take?: number;
        /**
         * Properties you want to return, defaults to "referencecode"
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeoTour[], void>({
        path: `/v${apiVersion}/geotours`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of geocaches.
     *
     * @tags GeoTours
     * @name GeoToursGetGeocachesByGeoTour
     * @summary Get the geocaches on the GeoTour
     * @request GET:/v{api-version}/geotours/{referenceCode}/geocaches
     * @response `200` `(GeocachingGeocache)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    geoToursGetGeocachesByGeoTour: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * Select to return a geocache object without the description and hints
         * @default false
         */
        lite?: boolean;
        /**
         * Defaults to 0, how many geocaches to skip
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * Defaults to 20, how many geocaches to return
         * @format int32
         * @default 20
         */
        take?: number;
        /**
         * Options are distance (must provide lat/lng), name (of the geocache), favorites, and geotour (order defined by GeoTour). Defaults to geotour.
         * @default "gt+"
         */
        sort?: string;
        /**
         * fields to include with base geocache object
         * @default ""
         */
        expand?: string;
        /**
         * fields you want to return, defaults to "referencecode"
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocache[], void>({
        path: `/v${apiVersion}/geotours/${referenceCode}/geocaches`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags HQPromotions
     * @name HqPromotionsGet
     * @summary Returns a list of metadata for currently visible and upcoming Geocaching HQ promotions
     * @request GET:/v{api-version}/HQPromotions/metadata
     * @response `200` `(GeocachingHQPromotionMetadata)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `500` `void` Server Error
     */
    hqPromotionsGet: (apiVersion: string, params: RequestParams = {}) =>
      this.request<GeocachingHQPromotionMetadata[], void>({
        path: `/v${apiVersion}/HQPromotions/metadata`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list.
     *
     * @tags Lists
     * @name ListsGetList
     * @summary Get a list
     * @request GET:/v{api-version}/lists/{referenceCode}
     * @response `200` `GeocachingGeocacheList` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    listsGetList: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * Property fields you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheList, void>({
        path: `/v${apiVersion}/lists/${referenceCode}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the updated geocache list.
     *
     * @tags Lists
     * @name ListsUpdateList
     * @summary Edit a list
     * @request PUT:/v{api-version}/lists/{referenceCode}
     * @response `200` `GeocachingGeocacheList` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    listsUpdateList: (
      referenceCode: string,
      apiVersion: string,
      list: GeocachingGeocacheList,
      query?: {
        /**
         * Property fields you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheList, void>({
        path: `/v${apiVersion}/lists/${referenceCode}`,
        method: "PUT",
        query: query,
        body: list,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will not return anything.
     *
     * @tags Lists
     * @name ListsDeleteList
     * @summary Remove a list
     * @request DELETE:/v{api-version}/lists/{referenceCode}
     * @response `200` `object` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    listsDeleteList: (
      referenceCode: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/v${apiVersion}/lists/${referenceCode}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a zipped file.
     *
     * @tags Lists
     * @name ListsGetZippedPocketQuery
     * @summary Gets a zipped file for a pocket query
     * @request GET:/v{api-version}/lists/{referenceCode}/geocaches/zipped
     * @response `200` `string` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    listsGetZippedPocketQuery: (
      referenceCode: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<string, void>({
        path: `/v${apiVersion}/lists/${referenceCode}/geocaches/zipped`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of geocaches.
     *
     * @tags Lists
     * @name ListsGetGeocaches
     * @summary Get a list of geocaches for a specified list
     * @request GET:/v{api-version}/lists/{referenceCode}/geocaches
     * @response `200` `(GeocachingListGeocache)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    listsGetGeocaches: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * how many geocaches to skip over
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * how many geocaches to retrieve
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * whether to return lite geocaches or not
         * @default true
         */
        lite?: boolean;
        /**
         * fields you want to return, defaults to "referenceCode"
         * @default "referenceCode"
         */
        fields?: string;
        /**
         * fields to include with base geocache object
         * @default ""
         */
        expand?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingListGeocache[], void>({
        path: `/v${apiVersion}/lists/${referenceCode}/geocaches`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the geocache added.
     *
     * @tags Lists
     * @name ListsAddGeocache
     * @summary Add a geocache to a list
     * @request POST:/v{api-version}/lists/{referenceCode}/geocaches
     * @response `200` `GeocachingGeocache` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    listsAddGeocache: (
      referenceCode: string,
      apiVersion: string,
      geocache: GeocachingPostListGeocache,
      query?: {
        /**
         * Property fields you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocache, void>({
        path: `/v${apiVersion}/lists/${referenceCode}/geocaches`,
        method: "POST",
        query: query,
        body: geocache,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the created geocache list.
     *
     * @tags Lists
     * @name ListsCreateList
     * @summary Create a list
     * @request POST:/v{api-version}/lists
     * @response `200` `GeocachingGeocacheList` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    listsCreateList: (
      apiVersion: string,
      list: GeocachingPostGeocacheList,
      query?: {
        /**
         * Property fields you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheList, void>({
        path: `/v${apiVersion}/lists`,
        method: "POST",
        query: query,
        body: list,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the successful and failed geocache codes.
     *
     * @tags Lists
     * @name ListsAddGeocaches
     * @summary Add multiple geocaches to a list
     * @request POST:/v{api-version}/lists/{referenceCode}/bulkgeocaches
     * @response `200` `GeocachingBulkResponse` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    listsAddGeocaches: (
      referenceCode: string,
      apiVersion: string,
      geocacheCodes: string[],
      params: RequestParams = {},
    ) =>
      this.request<GeocachingBulkResponse, void>({
        path: `/v${apiVersion}/lists/${referenceCode}/bulkgeocaches`,
        method: "POST",
        body: geocacheCodes,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will not return anything.
     *
     * @tags Lists
     * @name ListsDeleteGeocache
     * @summary Remove a geocache from a list
     * @request DELETE:/v{api-version}/lists/{referenceCode}/geocaches/{geocacheReferenceCode}
     * @response `200` `object` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    listsDeleteGeocache: (
      referenceCode: string,
      geocacheReferenceCode: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/v${apiVersion}/lists/${referenceCode}/geocaches/${geocacheReferenceCode}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a single draft log.
     *
     * @tags LogDrafts
     * @name LogDraftsGetDraft
     * @summary Get a single log draft for the calling user
     * @request GET:/v{api-version}/logdrafts/{referenceCode}
     * @response `200` `GeocachingLogDraft` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    logDraftsGetDraft: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * Properties you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingLogDraft, void>({
        path: `/v${apiVersion}/logdrafts/${referenceCode}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the log draft edited.
     *
     * @tags LogDrafts
     * @name LogDraftsUpdateDraft
     * @summary Update a log draft
     * @request PUT:/v{api-version}/logdrafts/{referenceCode}
     * @response `201` `GeocachingLogDraft` Created
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    logDraftsUpdateDraft: (
      referenceCode: string,
      apiVersion: string,
      logDraft: GeocachingLogDraft,
      query?: {
        /**
         * Properties you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingLogDraft, void>({
        path: `/v${apiVersion}/logdrafts/${referenceCode}`,
        method: "PUT",
        query: query,
        body: logDraft,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return no content.
     *
     * @tags LogDrafts
     * @name LogDraftsDeleteDraft
     * @summary Delete a log draft
     * @request DELETE:/v{api-version}/logdrafts/{referenceCode}
     * @response `201` `object` Created
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    logDraftsDeleteDraft: (
      referenceCode: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/v${apiVersion}/logdrafts/${referenceCode}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a page (list + total) of log drafts.
     *
     * @tags LogDrafts
     * @name LogDraftsGetUserDrafts
     * @summary Get a list of log drafts for the calling user
     * @request GET:/v{api-version}/logdrafts
     * @response `200` `(GeocachingLogDraft)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    logDraftsGetUserDrafts: (
      apiVersion: string,
      query?: {
        /**
         * How many drafts to skip (default = 0)
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * How many drafts to return (default = 10)
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * How to sort the drafts (default = loggeddateutc)
         * @default "dateloggedutc"
         */
        sort?: string;
        /**
         * Properties you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingLogDraft[], void>({
        path: `/v${apiVersion}/logdrafts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the log draft created.
     *
     * @tags LogDrafts
     * @name LogDraftsCreateDraft
     * @summary Create a log draft
     * @request POST:/v{api-version}/logdrafts
     * @response `201` `GeocachingLogDraft` Created
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    logDraftsCreateDraft: (
      apiVersion: string,
      logDraft: GeocachingPostLogDraft,
      query?: {
        /**
         * Properties you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingLogDraft, void>({
        path: `/v${apiVersion}/logdrafts`,
        method: "POST",
        query: query,
        body: logDraft,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the promoted draft info.
     *
     * @tags LogDrafts
     * @name LogDraftsPromoteToGeocacheLog
     * @summary Promote Log Draft to Geocache Log
     * @request POST:/v{api-version}/logdrafts/{referenceCode}/promote
     * @response `201` `GeocachingPromotedDraft` Created
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    logDraftsPromoteToGeocacheLog: (
      referenceCode: string,
      apiVersion: string,
      draft: GeocachingLogDraft,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingPromotedDraft, void>({
        path: `/v${apiVersion}/logdrafts/${referenceCode}/promote`,
        method: "POST",
        body: draft,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the image created.
     *
     * @tags LogDrafts
     * @name LogDraftsAddImage
     * @summary Add image to log draft
     * @request POST:/v{api-version}/logdrafts/{referenceCode}/images
     * @response `201` `GeocachingImage` Created
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    logDraftsAddImage: (
      referenceCode: string,
      apiVersion: string,
      image: GeocachingPostImage,
      query?: {
        /**
         * Properties you want to return, defaults to url
         * @default "url"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingImage, void>({
        path: `/v${apiVersion}/logdrafts/${referenceCode}/images`,
        method: "POST",
        query: query,
        body: image,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LogDrafts
     * @name LogDraftsDeleteImage
     * @summary Delete image from log draft
     * @request DELETE:/v{api-version}/logdrafts/{referenceCode}/images/{guid}
     * @response `200` `object` OK
     */
    logDraftsDeleteImage: (
      referenceCode: string,
      guid: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<object, any>({
        path: `/v${apiVersion}/logdrafts/${referenceCode}/images/${guid}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReferenceData
     * @name ReferenceDataGetStates
     * @summary Returns the state (aka region) names and ids
     * @request GET:/v{api-version}/states
     * @response `200` `(GeocachingState)[]` Ok
     * @response `401` `void` Unauthorized
     * @response `429` `void` Too many requests
     */
    referenceDataGetStates: (apiVersion: string, params: RequestParams = {}) =>
      this.request<GeocachingState[], void>({
        path: `/v${apiVersion}/states`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReferenceData
     * @name ReferenceDataGetCountries
     * @summary Returns current list of country ids and names
     * @request GET:/v{api-version}/countries
     * @response `200` `(GeocachingCountry)[]` Ok
     * @response `401` `void` Unauthorized
     * @response `429` `void` Too many requests
     */
    referenceDataGetCountries: (
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingCountry[], void>({
        path: `/v${apiVersion}/countries`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReferenceData
     * @name ReferenceDataGetAttributes
     * @summary Returns the available attributes
     * @request GET:/v{api-version}/attributes
     * @response `200` `(GeocachingAttributeType)[]` Ok
     * @response `401` `void` Unauthorized
     * @response `429` `void` Too many requests
     */
    referenceDataGetAttributes: (
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingAttributeType[], void>({
        path: `/v${apiVersion}/attributes`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReferenceData
     * @name ReferenceDataGetGeocacheSizes
     * @summary Returns the available geocache sizes
     * @request GET:/v{api-version}/geocachesizes
     * @response `200` `(GeocachingReferenceDataGetGeocacheSizesEnum)[]` Ok
     * @response `401` `void` Unauthorized
     * @response `429` `void` Too many requests
     */
    referenceDataGetGeocacheSizes: (
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingReferenceDataGetGeocacheSizesEnum[], void>({
        path: `/v${apiVersion}/geocachesizes`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReferenceData
     * @name ReferenceDataGetGeocacheTypes
     * @summary Returns the available geocache types
     * @request GET:/v{api-version}/geocachetypes
     * @response `200` `(GeocachingGeocacheTypeModel)[]` Ok
     * @response `401` `void` Unauthorized
     * @response `429` `void` Too many requests
     */
    referenceDataGetGeocacheTypes: (
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheTypeModel[], void>({
        path: `/v${apiVersion}/geocachetypes`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReferenceData
     * @name ReferenceDataGetGeocacheLogTypes
     * @summary Returns the geocache log types
     * @request GET:/v{api-version}/geocachelogtypes
     * @response `200` `(GeocachingGeocacheLogType)[]` Ok
     * @response `401` `void` Unauthorized
     * @response `429` `void` Too many requests
     */
    referenceDataGetGeocacheLogTypes: (
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheLogType[], void>({
        path: `/v${apiVersion}/geocachelogtypes`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReferenceData
     * @name ReferenceDataGetGeocacheStatuses
     * @summary Returns the available geocache statuses
     * @request GET:/v{api-version}/geocachestatuses
     * @response `200` `(string)[]` Ok
     * @response `401` `void` Unauthorized
     * @response `429` `void` Too many requests
     */
    referenceDataGetGeocacheStatuses: (
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<string[], void>({
        path: `/v${apiVersion}/geocachestatuses`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReferenceData
     * @name ReferenceDataGetMembershipLevels
     * @summary Returns the membership levels
     * @request GET:/v{api-version}/membershiplevels
     * @response `200` `(GeocachingMembershipLevel)[]` Ok
     * @response `401` `void` Unauthorized
     * @response `429` `void` Too many requests
     */
    referenceDataGetMembershipLevels: (
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingMembershipLevel[], void>({
        path: `/v${apiVersion}/membershiplevels`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReferenceData
     * @name ReferenceDataGetTrackableLogTypes
     * @summary Returns the trackable log types
     * @request GET:/v{api-version}/trackablelogtypes
     * @response `200` `(GeocachingTrackableLogType)[]` Ok
     * @response `401` `void` Unauthorized
     * @response `429` `void` Too many requests
     */
    referenceDataGetTrackableLogTypes: (
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingTrackableLogType[], void>({
        path: `/v${apiVersion}/trackablelogtypes`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags ReferenceData
     * @name ReferenceDataGetStatesByCountry
     * @summary Returns the state (aka region) names and ids
     * @request GET:/v{api-version}/countries/{countryId}/states
     * @response `200` `(GeocachingState)[]` Ok
     * @response `401` `void` Unauthorized
     * @response `429` `void` Too many requests
     */
    referenceDataGetStatesByCountry: (
      countryId: number,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingState[], void>({
        path: `/v${apiVersion}/countries/${countryId}/states`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Statistics
     * @name StatisticsGetDifficultyTerrainGridAsync
     * @summary Returns the D/T grid
     * @request GET:/v{api-version}/statistics/difficultyterrain
     * @response `200` `GeocachingDifficultyTerrainStatistics` OK
     */
    statisticsGetDifficultyTerrainGridAsync: (
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingDifficultyTerrainStatistics, any>({
        path: `/v${apiVersion}/statistics/difficultyterrain`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a single trackable log.
     *
     * @tags TrackableLogs
     * @name TrackableLogsGetTrackableLog
     * @summary Get a single trackable log
     * @request GET:/v{api-version}/trackablelogs/{referenceCode}
     * @response `200` `GeocachingTrackableLog` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    trackableLogsGetTrackableLog: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * Property fields you want to return, defaults to referencecode
         * @default "referencecode"
         */
        fields?: string;
        /** @default "" */
        expand?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingTrackableLog, void>({
        path: `/v${apiVersion}/trackablelogs/${referenceCode}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a trackable log.
     *
     * @tags TrackableLogs
     * @name TrackableLogsUpdateTrackableLog
     * @summary Update a trackable log
     * @request PUT:/v{api-version}/trackablelogs/{referenceCode}
     * @response `200` `GeocachingTrackableLog` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `422` `void` Unprocessable Entity
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    trackableLogsUpdateTrackableLog: (
      referenceCode: string,
      apiVersion: string,
      log: GeocachingTrackableLog,
      query?: {
        /**
         * Property fields you want to return, defaults to referencecode
         * @default "referencecode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingTrackableLog, void>({
        path: `/v${apiVersion}/trackablelogs/${referenceCode}`,
        method: "PUT",
        query: query,
        body: log,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will not return anything in the body.
     *
     * @tags TrackableLogs
     * @name TrackableLogsDeleteTrackableLog
     * @summary Deletes a trackable log
     * @request DELETE:/v{api-version}/trackablelogs/{referenceCode}
     * @response `204` `object` No Content
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    trackableLogsDeleteTrackableLog: (
      referenceCode: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/v${apiVersion}/trackablelogs/${referenceCode}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return an array of trackable logs.
     *
     * @tags TrackableLogs
     * @name TrackableLogsGetTrackableLogs
     * @summary Get user's trackable logs
     * @request GET:/v{api-version}/trackablelogs
     * @response `200` `(GeocachingTrackableLog)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    trackableLogsGetTrackableLogs: (
      apiVersion: string,
      query?: {
        /**
         * Defaults to 0.
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * Defaults to 10, max of 50.
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * Property fields you want to return, defaults to referencecode
         * @default "referencecode"
         */
        fields?: string;
        /** @default "" */
        expand?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingTrackableLog[], void>({
        path: `/v${apiVersion}/trackablelogs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the created trackable log.
     *
     * @tags TrackableLogs
     * @name TrackableLogsCreateTrackableLog
     * @summary Add a log to a trackable
     * @request POST:/v{api-version}/trackablelogs
     * @response `200` `GeocachingTrackableLog` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    trackableLogsCreateTrackableLog: (
      apiVersion: string,
      log: GeocachingPostTrackableLog,
      query?: {
        /**
         * Property fields you want to return, defaults to referencecode
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingTrackableLog, void>({
        path: `/v${apiVersion}/trackablelogs`,
        method: "POST",
        query: query,
        body: log,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of images.
     *
     * @tags TrackableLogs
     * @name TrackableLogsGetImages
     * @summary Get a the images attached to a trackable log
     * @request GET:/v{api-version}/trackablelogs/{referenceCode}/images
     * @response `200` `(GeocachingImage)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    trackableLogsGetImages: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * Amount of images to skip over used for pagination. Defaults to 0.
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * Amount of images to include in results. Defaults to 10.
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * Properties you want to return. Defaults to referencecode.
         * @default "referencecode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingImage[], void>({
        path: `/v${apiVersion}/trackablelogs/${referenceCode}/images`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a single image.
     *
     * @tags TrackableLogs
     * @name TrackableLogsAddImage
     * @summary Add an image to a trackable log
     * @request POST:/v{api-version}/trackablelogs/{referenceCode}/images
     * @response `200` `GeocachingImage` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    trackableLogsAddImage: (
      referenceCode: string,
      apiVersion: string,
      image: GeocachingPostImage,
      query?: {
        /**
         * Property fields you want to return, defaults to url
         * @default "url"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingImage, void>({
        path: `/v${apiVersion}/trackablelogs/${referenceCode}/images`,
        method: "POST",
        query: query,
        body: image,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will not return anything in the body.
     *
     * @tags TrackableLogs
     * @name TrackableLogsDeleteTrackableLogImages
     * @summary Deletes a trackable log image
     * @request DELETE:/v{api-version}/trackablelogs/{referenceCode}/images/{imageGuid}
     * @response `204` `object` No Content
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    trackableLogsDeleteTrackableLogImages: (
      referenceCode: string,
      imageGuid: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/v${apiVersion}/trackablelogs/${referenceCode}/images/${imageGuid}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a single trackable.
     *
     * @tags Trackables
     * @name TrackablesGetTrackable
     * @summary Get a single trackable
     * @request GET:/v{api-version}/trackables/{referenceCode}
     * @response `200` `GeocachingTrackable` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    trackablesGetTrackable: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * fields you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
        /** @default "" */
        expand?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingTrackable, void>({
        path: `/v${apiVersion}/trackables/${referenceCode}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Trackables
     * @name TrackablesGetTrackableJourneys
     * @summary Gets the trackable travel locations
     * @request GET:/v{api-version}/trackables/{referenceCode}/journeys
     * @response `200` `(GeocachingTrackableJourney)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    trackablesGetTrackableJourneys: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * Defaults to 0.
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * Defaults to 50, max limit of 1000
         * @format int32
         * @default 50
         */
        take?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingTrackableJourney[], void>({
        path: `/v${apiVersion}/trackables/${referenceCode}/journeys`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of geocoin types.
     *
     * @tags Trackables
     * @name TrackablesGetGeocoinTypes
     * @summary Get paged geocoin types
     * @request GET:/v{api-version}/trackables/geocointypes
     * @response `200` `(GeocachingTrackableType)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    trackablesGetGeocoinTypes: (
      apiVersion: string,
      query?: {
        /**
         * Amount of types to skip over used for pagination. Defaults to 0.
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * Amount of types to include in results. Defaults to 10.
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * Properties you want to return. Defaults to id.
         * @default "id"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingTrackableType[], void>({
        path: `/v${apiVersion}/trackables/geocointypes`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of images.
     *
     * @tags Trackables
     * @name TrackablesGetImages
     * @summary Get the images attached to a trackable
     * @request GET:/v{api-version}/trackables/{referenceCode}/Images
     * @response `200` `(GeocachingImage)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    trackablesGetImages: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * Amount of images to skip over used for pagination. Defaults to 0.
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * Amount of images to include in results. Defaults to 10.
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * Properties you want to return. Defaults to url.
         * @default "url"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingImage[], void>({
        path: `/v${apiVersion}/trackables/${referenceCode}/Images`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of trackables, either by specified codes or get user trackables if you leave referenceCodes null
     *
     * @tags Trackables
     * @name TrackablesGetUserTrackables
     * @summary Gets a list of trackables
     * @request GET:/v{api-version}/trackables
     * @response `200` `(GeocachingTrackable)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    trackablesGetUserTrackables: (
      apiVersion: string,
      query?: {
        /** The reference code or tracking number of the trackables (example: TB100). Don't pass in this param if you want to return user trackables */
        referenceCodes?: string;
        /**
         * 1= inventory, 2 = collection, 3 = owned (default: 1)
         * @default 1
         */
        type?: GeocachingTrackablesGetUserTrackablesParamsTypeEnum;
        /**
         * default = 0
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * default = 10
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * fields you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
        /** @default "" */
        expand?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingTrackable[], void>({
        path: `/v${apiVersion}/trackables`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of trackable logs.
     *
     * @tags Trackables
     * @name TrackablesGetTrackableLogs
     * @summary Get a list of trackable logs for the specified trackable
     * @request GET:/v{api-version}/trackables/{referenceCode}/trackablelogs
     * @response `200` `(GeocachingTrackableLog)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    trackablesGetTrackableLogs: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * how many logs to skip over
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * how many logs to retrieve
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * fields you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
        /** @default "" */
        expand?: string;
        /** what log types to include with results. defaults to all */
        logTypes?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingTrackableLog[], void>({
        path: `/v${apiVersion}/trackables/${referenceCode}/trackablelogs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of privacy settings and their current value (1 = private, 2 = friends, 3 = public)
     *
     * @tags Users
     * @name UsersGetUserPrivacySettings
     * @summary Gets the privacy settings for a user
     * @request GET:/v{api-version}/users/{referenceCode}/privacysettings
     * @response `200` `Record<string,object>` OK
     */
    usersGetUserPrivacySettings: (
      referenceCode: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<Record<string, object>, any>({
        path: `/v${apiVersion}/users/${referenceCode}/privacysettings`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a user.
     *
     * @tags Users
     * @name UsersGetUser
     * @summary Get a user
     * @request GET:/v{api-version}/users/{referenceCode}
     * @response `200` `GeocachingUser` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    usersGetUser: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * Property fields you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingUser, void>({
        path: `/v${apiVersion}/users/${referenceCode}`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return an array of user reference codes.
     *
     * @tags Users
     * @name UsersGetOptedOutUsers
     * @summary Gets opted out users
     * @request GET:/v{api-version}/optedoutusers
     * @response `200` `(string)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    usersGetOptedOutUsers: (
      apiVersion: string,
      query: {
        /**
         * filters the results to users that have opted out after this datetime in utc
         * @format date-time
         */
        updatedSinceUtc: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string[], void>({
        path: `/v${apiVersion}/optedoutusers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of images.
     *
     * @tags Users
     * @name UsersGetImages
     * @summary Get the images attached to a user profile
     * @request GET:/v{api-version}/users/{referenceCode}/images
     * @response `200` `(GeocachingImage)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    usersGetImages: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * Amount of images to skip over used for pagination. Defaults to 0.
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * Amount of images to include in results. Defaults to 10.
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * Properties you want to return. Defaults to url.
         * @default "url"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingImage[], void>({
        path: `/v${apiVersion}/users/${referenceCode}/images`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of souvenirs.
     *
     * @tags Users
     * @name UsersGetSouvenirs
     * @summary Get an account's souvenirs
     * @request GET:/v{api-version}/users/{referenceCode}/souvenirs
     * @response `200` `(GeocachingSouvenir)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    usersGetSouvenirs: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * @format int32
         * @default 20
         */
        take?: number;
        /**
         * Property fields you want to return, defaults to title
         * @default "title"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingSouvenir[], void>({
        path: `/v${apiVersion}/users/${referenceCode}/souvenirs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of users.
     *
     * @tags Users
     * @name UsersGetUsers
     * @summary Get a list of users
     * @request GET:/v{api-version}/users
     * @response `200` `(GeocachingUser)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    usersGetUsers: (
      apiVersion: string,
      query?: {
        /** comma delimited list of user reference codes to retrieve (example: PR1,PR2,PR3) */
        referenceCodes?: string;
        /** comma delimited list of usernames to retrieve */
        usernames?: string;
        /**
         * fields you want to return, defaults to "referenceCode"
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingUser[], void>({
        path: `/v${apiVersion}/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of geocache lists.
     *
     * @tags Users
     * @name UsersGetLists
     * @summary Get a list of user's geocache lists
     * @request GET:/v{api-version}/users/{referenceCode}/lists
     * @response `200` `(GeocachingGeocacheList)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    usersGetLists: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * comma delimited list of list types to return (fl, wl, il, bm, pq). Defaults to "bm"
         * @default "bm"
         */
        types?: string;
        /**
         * how many lists to skip over
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * how many lists to retrieve
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * fields you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheList[], void>({
        path: `/v${apiVersion}/users/${referenceCode}/lists`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a list of geocache lists.
     *
     * @tags Users
     * @name UsersGetGeocacheLogs
     * @summary Get a list of a user's geocache logs
     * @request GET:/v{api-version}/users/{referenceCode}/geocachelogs
     * @response `200` `(GeocachingGeocacheLog)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    usersGetGeocacheLogs: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * how many lists to skip over
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * how many lists to retrieve
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * filters results to logs with logdates after this date (inclusive)
         * @format date-time
         */
        afterDate?: string;
        /**
         * filters results to logs with logdates before this date (inclusive)
         * @format date-time
         */
        beforeDate?: string;
        /** filter the results to one geocache if provided */
        geocacheCode?: string;
        /**
         * fields you want to return, defaults to referenceCode
         * @default "referenceCode"
         */
        fields?: string;
        /**
         * flag to include archived logs
         * @default false
         */
        includeArchived?: boolean;
        /** log types to include in response, defaults to all */
        logTypes?: string;
        /**
         * fields to include with base geocache log object
         * @default ""
         */
        expand?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingGeocacheLog[], void>({
        path: `/v${apiVersion}/users/${referenceCode}/geocachelogs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return an array of user waypoints.
     *
     * @tags UserWaypoints
     * @name UserWaypointsGetUserWaypoints
     * @summary Get a list of user waypoints for the calling user
     * @request GET:/v{api-version}/userwaypoints
     * @response `200` `(GeocachingUserWaypoint)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    userWaypointsGetUserWaypoints: (
      apiVersion: string,
      query?: {
        /**
         * How many waypoints to skip (default = 0)
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * How many drafts to return (default = 10)
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * Include corrected coordinates in the results. default = false
         * @default false
         */
        includeCorrectedCoordinates?: boolean;
        /**
         * Properties you want to return (default = referenceCode)
         * @default "referencecode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingUserWaypoint[], void>({
        path: `/v${apiVersion}/userwaypoints`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the user waypoint created.
     *
     * @tags UserWaypoints
     * @name UserWaypointsCreateUserWaypoint
     * @summary Create a user waypoint
     * @request POST:/v{api-version}/userwaypoints
     * @response `201` `GeocachingUserWaypoint` Created
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    userWaypointsCreateUserWaypoint: (
      apiVersion: string,
      userWaypoint: GeocachingPostUserWaypoint,
      query?: {
        /**
         * Properties you want to return (default = referenceCode)
         * @default "referencecode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingUserWaypoint, void>({
        path: `/v${apiVersion}/userwaypoints`,
        method: "POST",
        query: query,
        body: userWaypoint,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return a paged list of userwaypoints
     *
     * @tags UserWaypoints
     * @name UserWaypointsGetGeocacheUserWaypoints
     * @summary Gets the user waypoints for a geocache
     * @request GET:/v{api-version}/geocaches/{referenceCode}/userwaypoints
     * @response `200` `(GeocachingUserWaypoint)[]` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    userWaypointsGetGeocacheUserWaypoints: (
      referenceCode: string,
      apiVersion: string,
      query?: {
        /**
         * How many user waypoints to skip. default = 0
         * @format int32
         * @default 0
         */
        skip?: number;
        /**
         * How many user waypoints to include in result set. default = 10
         * @format int32
         * @default 10
         */
        take?: number;
        /**
         * Include corrected coordinates in the results. default = false
         * @default false
         */
        includeCorrectedCoordinates?: boolean;
        /**
         * Properties you want to return. default = referencecode
         * @default "referencecode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingUserWaypoint[], void>({
        path: `/v${apiVersion}/geocaches/${referenceCode}/userwaypoints`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the updated user waypoint.
     *
     * @tags UserWaypoints
     * @name UserWaypointsUpdateUserWaypoint
     * @summary Update a user waypoint
     * @request PUT:/v{api-version}/userwaypoints/{referenceCode}
     * @response `201` `GeocachingUserWaypoint` Created
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    userWaypointsUpdateUserWaypoint: (
      referenceCode: string,
      apiVersion: string,
      userWaypoint: GeocachingUserWaypoint,
      query?: {
        /**
         * Properties you want to return (default = referenceCode)
         * @default "referencecode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingUserWaypoint, void>({
        path: `/v${apiVersion}/userwaypoints/${referenceCode}`,
        method: "PUT",
        query: query,
        body: userWaypoint,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return no content.
     *
     * @tags UserWaypoints
     * @name UserWaypointsDeleteUserWaypoint
     * @summary Delete a user waypoint
     * @request DELETE:/v{api-version}/userwaypoints/{referenceCode}
     * @response `201` `object` Created
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `409` `void` Conflict
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    userWaypointsDeleteUserWaypoint: (
      referenceCode: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/v${apiVersion}/userwaypoints/${referenceCode}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the created or updated corrected coordinate.
     *
     * @tags UserWaypoints
     * @name UserWaypointsUpsertCorrectedCoordinates
     * @summary Upsert a corrected coordinate for the calling user
     * @request PUT:/v{api-version}/geocaches/{referenceCode}/correctedcoordinates
     * @response `200` `GeocachingUserWaypoint` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    userWaypointsUpsertCorrectedCoordinates: (
      referenceCode: string,
      apiVersion: string,
      coordinates: GeocachingCoordinates,
      query?: {
        /**
         * Properties you want to return (default = referenceCode)
         * @default "referencecode"
         */
        fields?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<GeocachingUserWaypoint, void>({
        path: `/v${apiVersion}/geocaches/${referenceCode}/correctedcoordinates`,
        method: "PUT",
        query: query,
        body: coordinates,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserWaypoints
     * @name UserWaypointsDeleteCorrectedCoordinates
     * @summary Delete a corrected coordinate for the calling user
     * @request DELETE:/v{api-version}/geocaches/{referenceCode}/correctedcoordinates
     * @response `204` `object` No Content
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too Many Requests
     * @response `500` `void` Server Error
     */
    userWaypointsDeleteCorrectedCoordinates: (
      referenceCode: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<object, void>({
        path: `/v${apiVersion}/geocaches/${referenceCode}/correctedcoordinates`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Utilities
     * @name UtilitiesGetReferenceCode
     * @summary Returns the reference code from an id
     * @request GET:/v{api-version}/utilities/referencecode
     * @response `200` `string` Ok
     * @response `429` `void` Too many requests
     */
    utilitiesGetReferenceCode: (
      apiVersion: string,
      query: {
        /**
         * the id to get the reference code for
         * @format int64
         */
        id: number;
        /** the prefix of the reference code (e.g. GC) */
        codePrefix: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<string, void>({
        path: `/v${apiVersion}/utilities/referencecode`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description This method will return the cartridge file as base64 encoded binary.
     *
     * @tags Wherigo
     * @name WherigoGetWherigoCartridge
     * @summary Gets the Wherigo cartridge
     * @request GET:/v{api-version}/wherigo/{guid}/cartridge
     * @response `200` `GeocachingWherigoCartridge` Ok
     * @response `400` `void` Bad request
     * @response `401` `void` Not Authorized
     * @response `403` `void` Forbidden
     * @response `404` `void` Not Found
     * @response `429` `void` Too many requests
     * @response `500` `void` Server Error
     */
    wherigoGetWherigoCartridge: (
      guid: string,
      apiVersion: string,
      params: RequestParams = {},
    ) =>
      this.request<GeocachingWherigoCartridge, void>({
        path: `/v${apiVersion}/wherigo/${guid}/cartridge`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  status = {
    /**
     * @description This method return Ok.
     *
     * @tags Status
     * @name StatusPingAsync
     * @summary Returns Ok.
     * @request GET:/status/ping
     * @response `200` `void` Ok
     * @response `429` `void` Too many requests
     */
    statusPingAsync: (
      query: {
        /**
         * The requested API version
         * @default "1.0"
         */
        "api-version": string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, void>({
        path: `/status/ping`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
}

export interface Geocache{

    referenceCode: string;
    name: string;
    placedDate: string;
    publishedDate: string;
    type: GeoCacheType;
    geocacheSize: {
        id: number;
        name: string;
    };
    postedCoordinates: { //coordinates not sent from backend if the user doesn't have permission to view them
        latitude?: number;
        longitude?: number;  
    };
    lastVisitedDate: string,
    isPremiumOnly: boolean,
    shortDescription: string,
    longDescription: string,
    hints: string,
    location: {
        country: string;
        countryId: number;
        state: string;
        stateId: number;
    };
    ownerAlias: string;
    difficulty: number;
    terrain: number;
    distance?: number;
}

//Map only fetches minimal information for showing the cache on the map. Details are fetched only when clicking a cache
export interface GeocacheMapDetails{
    referenceCode: string;
    postedCoordinates: {
        latitude: number;
        longitude: number;
    }
    type: GeoCacheType
}

export type GeoCacheType = keyof typeof GeoCacheMapIconUrls;

export const defaultMapIconUrl = "/katko2.gif";
export const defaultGeoCacheTypeIconUrl = "/cacheT.gif";

export const GeoCacheMapIconUrls = {
    "Traditional": "/katko2.gif",
    "MultiCache": "/katko0.gif",
    "Mystery": "/katko3.gif",
    "Unknown": "/katko3.gif",
    "Letterbox Hybrid": "/katko5.gif",
    "EarthCache": "/katko8.gif",
    "Wherigo": "/katko1.gif",
    "Virtual": "/katko4.gif",
    "Webcam": "/katko7.gif",
    "Event": "/katko6.gif",
    "MegaEvent": "/katko6.gif",
    "Cache In Trash Out Event": "/katko6.gif",
    "Community Celebration Event": "/katko6.gif",
};

export const GeoCacheTypeIconUrls: Record<string, string> = {
    "Traditional": "/cacheT.gif",
    "MultiCache": "/cacheM.gif",
    "Mystery": "/cacheU.gif",
    "Unknown": "/cacheU.gif",
    "EarthCache": "/cacheB.gif",
    "Event": "/cacheE.gif",
    "Wherigo": "/cacheWh.gif",
    "MegaEvent": "/cacheME.gif",
    "Virtual": "/cacheV.gif",
    "Webcam": "/cacheW.gif",
    "Community Celebration Event": "/3653.gif",
    "Cache In Trash Out Event": "/cacheE.gif",
};
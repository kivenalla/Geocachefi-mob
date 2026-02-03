import { LatLng } from '../interfaces/latlng.interface';
import { Geocache } from '../interfaces/geocache.interface';


// Mean Earth Radius
const R = 6_371_000;


export const meterDistance = (a: LatLng, b: LatLng): number => {
    const rad = Math.PI / 180;
    const lat1 = a.lat * rad;
    const lat2 = b.lat * rad;
    const sinDLat = Math.sin(((b.lat - a.lat) * rad) / 2);
    const sinDLon = Math.sin(((b.lng - a.lng) * rad) / 2);
    const q = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon;
    const c = 2 * Math.atan2(Math.sqrt(q), Math.sqrt(1 - q));
    return R * c;
};


export const sortByDate = (a: Geocache, b: Geocache) => Date.parse(b.placedDate) - Date.parse(a.placedDate);
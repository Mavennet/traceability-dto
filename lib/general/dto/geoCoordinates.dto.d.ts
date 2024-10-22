import { JSON_TYPE } from '../constants';
export declare abstract class GeoCoordinatesDTO {
    type: JSON_TYPE.GEO_COORDINATES;
    latitude: string | number;
    longitude: string | number;
}

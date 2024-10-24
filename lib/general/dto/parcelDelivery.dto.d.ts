import { JSON_TYPE } from '../constants';
import { PlaceDTO } from './place.dto';
export declare abstract class ParcelDeliveryDTO {
    type: JSON_TYPE.PARCEL_DELIVERY;
    originAddress: PlaceDTO;
    deliveryAddress: PlaceDTO;
    abstract deliveryMethod?: string;
    trackingNumber?: string;
}

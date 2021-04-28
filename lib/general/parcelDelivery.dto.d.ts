import { JSON_TYPE, TRANSPORTATION_TYPE } from './constants';
import { PostalAddressDTO } from './postalAddress.dto';
export declare class ParcelDeliveryDTO {
    type: JSON_TYPE;
    originAddress: PostalAddressDTO;
    deliveryAddress: PostalAddressDTO;
    deliveryMethod: TRANSPORTATION_TYPE;
    trackingNumber: string;
}

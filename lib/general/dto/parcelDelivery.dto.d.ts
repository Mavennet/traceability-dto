import { JSON_TYPE } from '../constants';
import { PostalAddressDTO } from './postalAddress.dto';
export declare abstract class ParcelDeliveryDTO {
    type: JSON_TYPE[];
    originAddress: PostalAddressDTO;
    deliveryAddress: PostalAddressDTO;
    deliveryMethod?: string;
    trackingNumber?: string;
}

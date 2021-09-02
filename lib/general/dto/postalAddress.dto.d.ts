import { JSON_TYPE } from '../constants';
export declare abstract class PostalAddressDTO {
    type: JSON_TYPE[];
    organizationName?: string;
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
}
export declare abstract class FLAT_PostalAddressDTO {
    organizationName?: string;
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
}

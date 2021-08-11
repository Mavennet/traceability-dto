import { JSON_TYPE } from '../constants';
import { PostalAddressDTO, PostalAddress } from './postalAddress.dto';
export declare abstract class OrganizationDTO {
    type: JSON_TYPE[];
    name: string;
    description?: string;
    did?: string;
    address?: PostalAddressDTO;
    email?: string;
    phoneNumber?: string;
    faxNumber?: string;
}
export declare abstract class Organization {
    name: string;
    description?: string;
    did?: string;
    address?: PostalAddress;
    email?: string;
    phoneNumber?: string;
    faxNumber?: string;
}

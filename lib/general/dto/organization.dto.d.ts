import { JSON_TYPE } from '../constants';
import { PostalAddressDTO, FLAT_PostalAddressDTO } from './postalAddress.dto';
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
export declare abstract class FLAT_OrganizationDTO {
    name: string;
    description?: string;
    did?: string;
    address?: FLAT_PostalAddressDTO;
    email?: string;
    phoneNumber?: string;
    faxNumber?: string;
}

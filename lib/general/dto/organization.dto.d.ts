import { JSON_TYPE } from '../constants';
import { PostalAddressDTO } from './postalAddress.dto';
export declare abstract class OrganizationDTO {
    type: JSON_TYPE[];
    name: string;
    description?: string;
    did?: string;
    address?: PostalAddressDTO;
    email?: string;
    phone?: string;
    faxNumber?: string;
}

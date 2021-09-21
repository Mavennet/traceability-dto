import { ORGANIZATION_ROLE } from '../constants';
export declare abstract class CreateOrganizationDTO {
    name: string;
    email: string;
    address: string;
    phone: string;
    role: ORGANIZATION_ROLE;
    did: string;
    backendLink: string;
}

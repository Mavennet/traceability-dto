import { ORGANIZATION_ROLE } from '../constants';
export declare class CreateOrganizationDto {
    name: string;
    email: string;
    address: string;
    phone: string;
    role: ORGANIZATION_ROLE;
    did: string;
    backendLink: string;
}

import { OrganizationDTO, JSON_TYPE } from '../../general';
export declare abstract class ProductDTO {
    abstract type: JSON_TYPE[];
    manufacturer: OrganizationDTO;
    abstract name: string;
    description?: string;
}

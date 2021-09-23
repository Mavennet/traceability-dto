import { OrganizationDTO } from '../../general';
export declare abstract class ProductDTO {
    abstract type: any;
    manufacturer: OrganizationDTO;
    abstract name: string;
    description?: string;
}

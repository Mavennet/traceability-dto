import { OrganizationDTO } from '../../general';
export declare abstract class ProductDTO {
    abstract type: any;
    manufacturer: OrganizationDTO;
    productID?: string;
    abstract name: string;
    description?: string;
}

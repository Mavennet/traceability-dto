import { OrganizationDTO, MeasurementDTO, JSON_TYPE } from '../../general';
export declare class ProductDTO {
    type: JSON_TYPE[];
    manufacturer: OrganizationDTO;
    name: string;
    description: string;
    sizeOrAmount: MeasurementDTO;
}

import { OrganizationDTO, MeasurementDTO, JSON_TYPE } from '../../general';
export declare abstract class ProductDTO {
    type: JSON_TYPE[];
    manufacturer: OrganizationDTO;
    abstract name: string;
    description: string;
    sizeOrAmount: MeasurementDTO;
}

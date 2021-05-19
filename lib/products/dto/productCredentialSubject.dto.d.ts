import { PlaceDTO, ObservationDTO, JSON_TYPE } from '../../general';
import { ProductDTO } from './product.dto';
export declare class ProductCredentialSubjectDTO {
    type: JSON_TYPE[];
    HSCode: string;
    productionDate: string;
    facility: PlaceDTO;
    product: ProductDTO;
    observation: ObservationDTO[];
}

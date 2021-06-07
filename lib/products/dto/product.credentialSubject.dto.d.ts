import { PlaceDTO, ObservationDTO, JSON_TYPE } from '../../general';
import { ProductDTO } from './product.dto';
export declare abstract class ProductCredentialSubjectDTO {
    abstract type: JSON_TYPE[];
    HSCode: string;
    productionDate: string;
    facility: PlaceDTO;
    abstract product: ProductDTO;
    observation: ObservationDTO[];
}

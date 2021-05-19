import { PlaceDTO, ObservationDTO } from '../../general';
import { ProductDTO } from './product.dto';
export declare class ProductCredentialSubjectDTO {
    HSCode: string;
    productionDate: string;
    facility: PlaceDTO;
    product: ProductDTO;
    observation: ObservationDTO[];
}

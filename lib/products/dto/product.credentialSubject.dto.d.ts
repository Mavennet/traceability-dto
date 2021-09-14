import { PlaceDTO, InspectionReportDTO } from '../../general';
import { ProductDTO } from './product.dto';
export declare abstract class ProductCredentialSubjectDTO {
    abstract type: any[];
    HSCode: string;
    productionDate: string;
    facility: PlaceDTO;
    abstract product: ProductDTO;
    inspection: InspectionReportDTO[];
}

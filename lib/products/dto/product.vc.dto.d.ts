import { JSON_TYPE } from '../../general/constants';
import { GeneralVerifiableCredentialDTO as VerifiableCredentialDTO } from '../../general/dto/generalVerifiableCredential.dto';
import { ProductCredentialSubjectDTO } from './product.credentialSubject.dto';
declare class ProductVCDTOBase {
    '@context': string[];
    id: string;
    type: JSON_TYPE[];
    issuer: string;
    issuanceDate: string;
    credentialSubject: ProductCredentialSubjectDTO;
    proof: VerifiableCredentialDTO;
}
export declare class ProductVCDTO extends ProductVCDTOBase {
}
export {};

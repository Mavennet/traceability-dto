import { CredentialStatusDTO } from '..';
import { ProofDTO } from '../../general/dto';
export declare abstract class VerifiableCredentialDTO {
    '@context': string[];
    id: string;
    type: string[] | string;
    issuer: string | any[];
    issuanceDate: string;
    expirationDate?: string;
    abstract credentialSubject: Object;
    credentialStatus?: CredentialStatusDTO;
    proof: ProofDTO;
}

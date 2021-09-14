import { ProofDTO } from './';
import { CredentialStatusDTO } from '../../credentials';
export declare abstract class VerifiableCredentialDTO {
    abstract '@context': string[];
    id: string;
    abstract type: any[];
    issuer: string;
    issuanceDate: string;
    expirationDate?: string;
    abstract credentialSubject: Object;
    credentialStatus?: CredentialStatusDTO;
    proof: ProofDTO;
}

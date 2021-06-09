import { ProofDTO } from './proof.dto';
export declare abstract class VerifiableCredentialDTO {
    abstract '@context': string[];
    id: string;
    abstract type: any[];
    issuer: string;
    issuanceDate: string;
    credentialSubject: Object;
    proof: ProofDTO;
}

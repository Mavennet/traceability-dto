import { ProofDTO } from './proof.dto';
export declare abstract class VerifiableCredentialDTO {
    abstract '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    issuanceDate: string;
    credentialSubject: Object;
    proof: ProofDTO;
}

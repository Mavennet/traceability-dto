import { ProofDTO } from './proof.dto';
export declare abstract class VerifiableCredentialDTO {
    abstract '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    issuanceDate: Date;
    credentialSubject: Object;
    proof: ProofDTO;
}

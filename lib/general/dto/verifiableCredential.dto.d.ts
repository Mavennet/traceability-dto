import { ProofDTO } from './proof.dto';
export declare class VerifiableCredentialDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string;
    issuanceDate: Date;
    credentialSubject: Object;
    proof: ProofDTO;
}

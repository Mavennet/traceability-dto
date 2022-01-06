import { ProofDTO, VerifiableCredentialDTO } from '../..';
export declare class VerifiablePresentationDTO {
    '@context': string[];
    id: string;
    type: string[] | string;
    verifiableCredential: [VerifiableCredentialDTO];
    holder: string;
    proof: ProofDTO;
}

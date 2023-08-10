import type { VerifiableCredentialDTO } from '../..';
export declare abstract class PresentationDTO {
    '@context': string[];
    abstract id: string;
    type: string[];
    verifiableCredentials: VerifiableCredentialDTO[];
    holder: string;
}

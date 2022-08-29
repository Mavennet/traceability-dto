import { VerifiableCredentialDTO } from '../..';
export declare abstract class PresentationDTO {
    '@context': string[];
    abstract id: string;
    type: string[] | string;
    verifiableCredential: VerifiableCredentialDTO[];
    holder: string;
}

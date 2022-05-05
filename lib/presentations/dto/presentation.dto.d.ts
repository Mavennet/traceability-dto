import { VerifiableCredentialDTO } from '../..';
export declare abstract class Presentation {
    '@context': string[];
    abstract id: string;
    type: string[] | string;
    verifiableCredential: VerifiableCredentialDTO[];
    holder: string;
}

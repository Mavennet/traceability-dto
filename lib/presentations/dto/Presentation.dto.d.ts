import { VerifiableCredentialDTO } from '../..';
export declare class Presentation {
    '@context': string[];
    id: string;
    type: string[] | string;
    verifiableCredential: [VerifiableCredentialDTO];
    holder: string;
}

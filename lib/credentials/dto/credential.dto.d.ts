import { CredentialStatusDTO } from './';
import { IssuerDTO } from '../..';
export declare class CredentialDTO {
    '@context': string[];
    id: string;
    type: any[];
    issuer: string | IssuerDTO;
    issuanceDate: string;
    expirationDate?: string;
    credentialSubject: Object;
    credentialStatus?: CredentialStatusDTO;
}

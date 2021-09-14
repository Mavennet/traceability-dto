import { CredentialStatusDTO } from './';
export declare class CredentialDTO {
    '@context': string[];
    id: string;
    type: any[];
    issuer: string;
    issuanceDate: string;
    expirationDate?: string;
    credentialSubject: Object;
    credentialStatus?: CredentialStatusDTO;
}

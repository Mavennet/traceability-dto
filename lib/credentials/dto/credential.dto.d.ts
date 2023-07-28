import type { IssuerDTO } from '../../general';
declare class CredentialSubject {
    id?: string;
    [key: string]: any;
}
export declare class CredentialDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string | IssuerDTO;
    issuanceDate: string | Date;
    expirationDate?: string;
    credentialSubject: CredentialSubject;
}
export {};

import type { IssuerDTO } from '../../general';
export declare class CredentialDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string | IssuerDTO;
    issuanceDate: string | Date;
    expirationDate?: string;
    credentialSubject: unknown;
}

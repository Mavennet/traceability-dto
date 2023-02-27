import { CredentialStatusDTO } from './';
import type { IssuerDTO } from '../..';
export declare class CredentialDTO {
    '@context': string[];
    id: string;
    type: any[];
    issuer: string | IssuerDTO;
    issuanceDate?: string | Date;
    expirationDate?: string;
    credentialSubject: Record<string, unknown>;
    credentialStatus?: CredentialStatusDTO;
}

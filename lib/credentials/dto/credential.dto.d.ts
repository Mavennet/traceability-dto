import type { IssuerDTO } from '../../general';
import { CredentialSubject } from './credentialSubject.dto';
export declare class CredentialDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string | IssuerDTO;
    issuanceDate: string | Date;
    expirationDate?: string;
    credentialSubject: CredentialSubject;
}

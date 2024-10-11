import type { IssuerDTO } from '../../general';
import { CredentialSubject } from './credentialSubject.dto';
export declare class CredentialDTO {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string | IssuerDTO;
    validFrom: string | Date;
    validUntil?: string;
    credentialSubject: CredentialSubject;
}

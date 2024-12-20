import type { IssuerDTO } from '../../general';
import { type CredentialStatusDTO } from './credentialStatus.dto';
import { CredentialSchema } from './credentialSchema.dto';
export declare abstract class CredentialDTO<T> {
    '@context': string[];
    id: string;
    type: string[];
    issuer: string | IssuerDTO;
    validFrom: string | Date;
    validUntil?: string;
    abstract credentialSubject: T;
    credentialStatus?: CredentialStatusDTO[];
    credentialSchema?: CredentialSchema;
}

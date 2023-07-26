import { CredentialStatusDTO } from './credentialStatus.dto';
import { ProofDTO } from '../../general/dto';
import type { IssuerDTO } from '../../general/dto';
export declare abstract class VerifiableCredentialDTO {
    '@context': string[];
    id: string;
    abstract type: string[] | string;
    issuer: string | IssuerDTO;
    issuanceDate?: string | Date;
    expirationDate?: string;
    abstract credentialSubject: unknown;
    credentialStatus?: CredentialStatusDTO;
    proof: ProofDTO;
}

import { CredentialStatusDTO } from '..';
import { ProofDTO, type IssuerDTO } from '../../general/dto';
export declare abstract class VerifiableCredentialDTO {
    '@context': string[];
    id: string;
    abstract type: string[] | string;
    issuer: string | IssuerDTO;
    issuanceDate?: string | Date;
    expirationDate?: string;
    abstract credentialSubject: Record<string, unknown>;
    credentialStatus?: CredentialStatusDTO;
    proof: ProofDTO;
}

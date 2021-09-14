import { CredentialStatusDTO } from './';
import { PROOF_PURPOSE_TYPE } from '../../general';
export declare class CredentialOptionsDTO {
    proofPurpose?: PROOF_PURPOSE_TYPE;
    assertionMethod?: string;
    issuanceDate?: string;
    issuer?: string;
    verificationMethod?: string;
    created?: string;
    challenge?: string;
    domain?: string;
    credentialStatus?: CredentialStatusDTO;
}

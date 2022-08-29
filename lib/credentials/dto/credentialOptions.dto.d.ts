import { PROOF_PURPOSE_TYPE } from '../../general';
import { CredentialStatusDTO } from './';
export declare class CredentialOptionsDTO {
    proofPurpose?: PROOF_PURPOSE_TYPE.ASSERTION_METHOD;
    assertionMethod?: string;
    issuanceDate?: string | Date;
    issuer?: string;
    verificationMethod?: string;
    created?: string;
    challenge?: string;
    domain?: string;
    credentialStatus?: CredentialStatusDTO;
    type?: string;
}

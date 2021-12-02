import { PROOF_PURPOSE_TYPE } from '../../general';
import { CredentialStatusDTO } from './';
export declare class CredentialOptionsDTO {
    proofPurpose?: PROOF_PURPOSE_TYPE.ASSERTION_METHOD;
    issuer?: string;
    verificationMethod?: string;
    created?: string;
    credentialStatus?: CredentialStatusDTO;
    type?: string;
}

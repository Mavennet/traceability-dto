import { PROOF_PURPOSE_TYPE } from '../../general';
export declare class CredentialProofOptionsDTO {
    created?: string;
    type?: string;
    proofPurpose?: PROOF_PURPOSE_TYPE.ASSERTION_METHOD;
    verificationMethod?: string;
}

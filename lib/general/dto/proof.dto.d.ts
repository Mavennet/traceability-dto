import { JSON_TYPE, PROOF_PURPOSE_TYPE } from '../constants';
export declare abstract class ProofDTO {
    type: JSON_TYPE;
    created: Date;
    proofPurpose?: PROOF_PURPOSE_TYPE;
    proofValue: string;
    jws: string;
    verificationMethod?: string;
    challenge?: string;
    domain?: string;
}

import { JSON_TYPE, PROOF_PURPOSE_TYPE } from '../constants';
export declare class ProofDTO {
    type: JSON_TYPE;
    created: Date;
    jws: string;
    proofPurpose: PROOF_PURPOSE_TYPE;
    verificationMethod: string;
}

import { JSON_TYPE, PROOF_PURPOSE_TYPE } from '../constants';
export declare abstract class ProofDTO {
    type: JSON_TYPE;
    created: string;
    proofPurpose: PROOF_PURPOSE_TYPE;
    verificationMethod: string;
}

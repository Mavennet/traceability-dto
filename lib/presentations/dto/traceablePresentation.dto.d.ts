import { ProofDTO } from '../../general';
import { VerifiableCredentialDTO } from '../../credentials';
import { WorkflowDTO } from './workflow.dto';
export declare class TraceablePresentationDTO {
    '@context': string[];
    id: string;
    type: string[];
    holder: string;
    verifiableCredential: VerifiableCredentialDTO[];
    workflow: WorkflowDTO;
    proof?: ProofDTO;
}

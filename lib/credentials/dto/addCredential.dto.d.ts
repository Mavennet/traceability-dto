import { ProofDTO } from '../../general';
import { CredentialStatusDTO } from './credentialStatus.dto';
export declare class AddCredentialDTO {
    id: string;
    '@context': string[];
    type: string[];
    issuer: string;
    proof: ProofDTO;
    credentialSubject: JSON;
    credentialStatus?: CredentialStatusDTO;
}

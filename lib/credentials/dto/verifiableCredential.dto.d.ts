import { ProofDTO } from '../../general/dto';
import { CredentialDTO } from './credential.dto';
import { CredentialStatusDTO } from './credentialStatus.dto';
export declare class VerifiableCredentialDTO extends CredentialDTO {
    proof: ProofDTO;
    credentialStatus?: CredentialStatusDTO;
}

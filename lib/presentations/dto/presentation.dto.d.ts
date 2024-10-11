import { OrganizationDTO, VerifiableCredentialDTO } from '../..';
export declare abstract class PresentationDTO {
    '@context': string[];
    abstract id: string;
    type: string[];
    verifiableCredential: VerifiableCredentialDTO[];
    holder: OrganizationDTO;
}

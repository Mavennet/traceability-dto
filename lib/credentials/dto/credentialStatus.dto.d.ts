import { JSON_TYPE } from '../../general';
export declare class CredentialStatusDTO {
    id?: string;
    type: JSON_TYPE;
    revocationListIndex?: string;
    revocationListCredential?: string;
}

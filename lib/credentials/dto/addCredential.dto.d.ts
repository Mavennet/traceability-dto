export declare class AddCredentialDTO {
    id: string;
    '@context': string[];
    type: string[];
    issuer: string;
    proof: JSON;
    credentialSubject: JSON;
}

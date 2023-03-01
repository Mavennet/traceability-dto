import type { JSON_TYPE } from '../constants';
export declare abstract class IssuerDTO {
    type: JSON_TYPE[];
    id: string;
    url: string;
    name: string;
    description: string;
}

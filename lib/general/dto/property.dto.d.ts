import { JSON_TYPE } from '../constants';
export declare abstract class PropertyDTO {
    type: JSON_TYPE[];
    identifier?: string;
    name: string;
    description: string;
}

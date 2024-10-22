import { PROPERTY_TYPE } from '../constants';
export declare abstract class PropertyDTO {
    type: PROPERTY_TYPE;
    identifier?: string;
    name: string;
    description: string;
}

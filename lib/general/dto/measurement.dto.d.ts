import { JSON_TYPE } from '../constants';
export declare abstract class MeasurementDTO {
    type: JSON_TYPE[];
    unitCode?: string;
    value: string;
}
export declare abstract class Measurement {
    unit?: string;
    value: string;
}

import { JSON_TYPE } from '../constants';
export declare abstract class MeasurementDTO {
    type: JSON_TYPE.MEASURED_VALUE | JSON_TYPE.QUANTITATIVE_VALUE;
    unitCode?: string;
    value: string;
}
export declare abstract class COMPACT_MeasurementDTO {
    unit?: string;
    value: string;
}

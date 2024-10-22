import { JSON_TYPE, PROPERTY_TYPE } from '../constants';
import { MeasurementDTO } from './measurement.dto';
import { PropertyDTO } from './property.dto';
export declare abstract class ObservationDTO {
    type: JSON_TYPE.OBSERVATION;
    property: PropertyDTO;
    measurement: MeasurementDTO;
}
export declare abstract class COMPACT_ObservationDTO {
    type: PROPERTY_TYPE;
    identifier?: string;
    name: string;
    description?: string;
    value: string;
    unit?: string;
}

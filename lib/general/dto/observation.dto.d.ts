import { JSON_TYPE, PROPERTY_TYPE } from '../constants';
import { PropertyDTO } from './property.dto';
import { MeasurementDTO } from './measurement.dto';
export declare abstract class ObservationDTO {
    type: JSON_TYPE[];
    property: PropertyDTO;
    measurement: MeasurementDTO;
}
export declare abstract class Observation {
    type: PROPERTY_TYPE;
    identifier?: string;
    name: string;
    description?: string;
    value: string;
    unit?: string;
}

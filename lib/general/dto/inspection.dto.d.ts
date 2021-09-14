import { JSON_TYPE } from '../constants';
import { ObservationDTO } from './observation.dto';
export declare abstract class InspectionDTO {
    tupe: JSON_TYPE[];
    observation: ObservationDTO[];
}

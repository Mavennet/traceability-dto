import { JSON_TYPE } from '../constants';
import { ObservationDTO } from './observation.dto';
export declare abstract class InspectionReportDTO {
    type: JSON_TYPE[];
    observation: ObservationDTO[];
}

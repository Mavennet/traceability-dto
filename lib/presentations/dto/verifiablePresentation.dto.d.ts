import { ProofDTO } from '../..';
import { Presentation } from './presentation.dto';
export declare class VerifiablePresentationDTO extends Presentation {
    id: string;
    proof: ProofDTO;
}

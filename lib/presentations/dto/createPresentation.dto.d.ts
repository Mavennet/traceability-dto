import { PresentationDTO as PresentationBase } from '../..';
declare class Presentation extends PresentationBase {
    id: string;
}
export declare class CreatePresentationDTO {
    presentation: Presentation;
}
export {};

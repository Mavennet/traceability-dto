import { PlaceDTO, OrganizationDTO } from './';
import { ProductDTO } from '../../products';
export declare abstract class EventDTO {
    type: string[];
    abstract eventType: string;
    eventId: string;
    eventTime: string;
    place: PlaceDTO;
    actor: OrganizationDTO[];
    products: ProductDTO[];
}

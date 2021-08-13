import { ArrayMinSize, IsArray, IsNotEmpty, ValidateNested } from 'class-validator'
import { TimestampDetailsDTO } from '.'

export class CreateEventsTimestampsDTO {
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  eventsDetails: TimestampDetailsDTO[]
}

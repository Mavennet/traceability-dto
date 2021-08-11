import { ArrayMinSize, IsArray, IsNotEmpty, ValidateNested } from 'class-validator'
import { TimestampDetailsDTO } from '.'

export class CreateTimestampsDTO {
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  timestampsDetails: TimestampDetailsDTO[]
}

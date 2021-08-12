import { ArrayMinSize, IsArray, IsNotEmpty, ValidateNested } from 'class-validator'
import { ProductTimestampDetailsDTO, EventTimestampDetailsDTO } from '.'

export class CreateTimestampsDTO {
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  timestampsDetails: ProductTimestampDetailsDTO[] | EventTimestampDetailsDTO[]
}

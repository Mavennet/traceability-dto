import { ArrayMinSize, IsArray, IsNotEmpty, ValidateNested } from 'class-validator'
import { TimestampDetailsDTO } from '.'

export class CreateProductsTimestampsDTO {
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  productsDetails: TimestampDetailsDTO[]
}

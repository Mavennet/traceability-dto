import {
  IsNotEmpty,
  IsUUID,
  IsArray,
  ArrayMinSize
} from 'class-validator'

export class ShareProductDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsArray()
  @ArrayMinSize(0)
  orgs: number[]
}

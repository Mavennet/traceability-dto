import {
  IsNotEmpty,
  IsUUID,
  IsArray
} from 'class-validator'

export class ShareProductDTO {
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @IsArray()
  orgs: number[]
}

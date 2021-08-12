import { IsNotEmpty, IsString } from 'class-validator'

export class ProductTimestampDetailsDTO {
  @IsNotEmpty()
  @IsString()
  hash: string

  @IsNotEmpty()
  @IsString()
  productId: string
}

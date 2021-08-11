import { IsNotEmpty, IsString } from 'class-validator'

export class TimestampDetailsDTO {
  @IsNotEmpty()
  @IsString()
  hash: string

  @IsNotEmpty()
  @IsString()
  productId: string
}


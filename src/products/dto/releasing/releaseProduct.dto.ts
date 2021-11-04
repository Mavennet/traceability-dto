import {
  IsNotEmpty,
  IsUUID,
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ReleaseProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string
}

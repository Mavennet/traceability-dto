import {
  IsNotEmpty,
  IsUUID,
  IsArray,
  ArrayMinSize
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ShareProductDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(0)
  orgs: number[]
}

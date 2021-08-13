import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { TIMESTAMP_OBJECT_TYPE } from '..'

export class TimestampDetailsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(TIMESTAMP_OBJECT_TYPE)
  type: TIMESTAMP_OBJECT_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  hash: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string
}

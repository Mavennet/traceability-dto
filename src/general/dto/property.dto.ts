import { IsNotEmpty, IsOptional, IsString, Equals } from 'class-validator'
import { PROPERTY_TYPE } from '../constants'
import { ApiProperty } from '@nestjs/swagger'

export abstract class PropertyDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(PROPERTY_TYPE)
  type: PROPERTY_TYPE

  @ApiProperty()
  @IsOptional()
  @IsString()
  identifier?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string
}

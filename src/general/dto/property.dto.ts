import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
  IsArray,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import { PROPERTY_TYPE } from '../constants'
import { ApiProperty } from '@nestjs/swagger'

export abstract class PropertyDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(PROPERTY_TYPE, { each: true })
  type: PROPERTY_TYPE[]

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

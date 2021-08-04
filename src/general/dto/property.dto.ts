import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
  IsArray,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import { JSON_TYPE } from '../constants'
import { ApiProperty } from '@nestjs/swagger'

export abstract class PropertyDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o =>
    o.type === [JSON_TYPE.MECHANICAL_PROPERTY] ||
    o.type === [JSON_TYPE.CHEMICAL_PROPERTY])
  type: JSON_TYPE[]

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

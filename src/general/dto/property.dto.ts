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

export abstract class PropertyDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o =>
    o.type === [JSON_TYPE.MECHANICAL_PROPERTY] ||
    o.type === [JSON_TYPE.CHEMICAL_PROPERTY])
  abstract type: JSON_TYPE[]

  @IsOptional()
  @IsString()
  abstract identifier: string

  @IsNotEmpty()
  @IsString()
  abstract name: string

  @IsOptional()
  @IsString()
  abstract description: string
}

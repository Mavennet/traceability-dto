import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
  IsArray,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import {
  JSON_TYPE,
  MECHANICAL_PROPERTY_TYPE,
  CHEMICAL_PROPERTY_TYPE,
  GAS_PROPERTY_TYPE
} from './constants'

export class PropertyDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o =>
    o.type === [JSON_TYPE.MECHANICAL_PROPERTY] ||
    o.type === [JSON_TYPE.CHEMICAL_PROPERTY] ||
    o.type === [JSON_TYPE.GAS_PROPERTY])
  type: JSON_TYPE[]

  @IsOptional()
  @IsString()
  identifier: string

  @IsNotEmpty()
  @IsEnum({
    ...MECHANICAL_PROPERTY_TYPE,
    ...CHEMICAL_PROPERTY_TYPE,
    ...GAS_PROPERTY_TYPE
  })
  name: MECHANICAL_PROPERTY_TYPE | CHEMICAL_PROPERTY_TYPE | GAS_PROPERTY_TYPE

  @IsOptional()
  @IsString()
  description: string
}

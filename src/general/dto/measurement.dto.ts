import {
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsString,
  IsArray,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import { JSON_TYPE } from '../constants'

export abstract class MeasurementDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type === [JSON_TYPE.MEASURED_VALUE] || o.type === [JSON_TYPE.QUANTITATIVE_VALUE])
  abstract type: JSON_TYPE[]

  @IsOptional()
  @IsString()
  abstract unitCode: string

  @IsNotEmpty()
  @IsString()
  abstract value: string
}

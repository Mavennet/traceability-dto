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
import { ApiProperty } from '@nestjs/swagger'

export abstract class MeasurementDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type === [JSON_TYPE.MEASURED_VALUE] || o.type === [JSON_TYPE.QUANTITATIVE_VALUE])
  type: JSON_TYPE[]

  @ApiProperty()
  @IsOptional()
  @IsString()
  unitCode?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  value: string
}

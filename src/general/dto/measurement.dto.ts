import {
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsString,
  IsNumberString,
  IsArray,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import { JSON_TYPE } from '../constants'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

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
  @IsNumberString()
  value: string
}

export abstract class COMPACT_MeasurementDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  unit?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  value: string
}

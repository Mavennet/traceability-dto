import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { ArrayNotEmpty, Equals, IsArray, IsNotEmpty, IsOptional, IsString, Validate } from 'class-validator'
import { JSON_TYPE } from '../constants'

export abstract class MeasurementDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Validate((o) => o.type.includes(JSON_TYPE.MEASURED_VALUE) || o.type.includes(JSON_TYPE.QUANTITATIVE_VALUE))
  type: JSON_TYPE.MEASURED_VALUE | JSON_TYPE.QUANTITATIVE_VALUE

  @ApiProperty()
  @IsOptional()
  @IsString()
  unitCode?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  value: string
}

export abstract class COMPACT_MeasurementDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  unit?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  value: string
}

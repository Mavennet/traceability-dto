import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsEnum,
  IsString,
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE, PROPERTY_TYPE } from '../constants'
import { PropertyDTO } from './property.dto'
import { MeasurementDTO } from './measurement.dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export abstract class ObservationDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type === [JSON_TYPE.OBSERVATION])
  type: JSON_TYPE[]

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PropertyDTO)
  property: PropertyDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  measurement: MeasurementDTO
}

export abstract class FLAT_ObservationDTO {
  @ApiProperty()
  @IsEnum(PROPERTY_TYPE)
  type: PROPERTY_TYPE

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  identifier?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  value: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  unit?: string
}

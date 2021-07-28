import {
  IsNotEmptyObject,
  IsEnum,
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../constants'
import { PropertyDTO } from './property.dto'
import { MeasurementDTO } from './measurement.dto'
import { ApiProperty } from '@nestjs/swagger'

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

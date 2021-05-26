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

export abstract class ObservationDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type === [JSON_TYPE.OBSERVATION])
  abstract type: JSON_TYPE[]

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PropertyDTO)
  abstract property: PropertyDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => MeasurementDTO)
  abstract measurement: MeasurementDTO
}

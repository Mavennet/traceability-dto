import {
  IsEnum,
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../constants'
import { ObservationDTO } from './observation.dto'
import { ApiProperty } from '@nestjs/swagger'

export abstract class InspectionReportDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type === [JSON_TYPE.INSPECTION_REPORT])
  type: JSON_TYPE[]

  @ApiProperty({ type: () => ObservationDTO })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  observation: ObservationDTO[]
}

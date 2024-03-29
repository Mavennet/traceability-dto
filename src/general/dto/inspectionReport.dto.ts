import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { ArrayNotEmpty, IsArray, Validate, ValidateNested } from 'class-validator'
import { JSON_TYPE } from '../constants'
import { ObservationDTO } from './observation.dto'

export abstract class InspectionReportDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @Validate((o) => o.type.includes(JSON_TYPE.INSPECTION_REPORT))
  type: JSON_TYPE[]

  @ApiProperty({ type: () => ObservationDTO })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  observation: ObservationDTO[]
}

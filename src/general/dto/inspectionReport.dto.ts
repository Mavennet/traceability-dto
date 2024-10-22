import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { ArrayNotEmpty, Equals, IsArray, IsNotEmpty, IsString, Validate, ValidateNested } from 'class-validator'
import { JSON_TYPE } from '../constants'
import { ObservationDTO } from './observation.dto'

export abstract class InspectionReportDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE.INSPECTION_REPORT)
  type: JSON_TYPE.INSPECTION_REPORT

  @ApiProperty({ type: () => ObservationDTO })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  observation: ObservationDTO[]
}

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

export abstract class InspectionDTO {
	@ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type === [JSON_TYPE.INSPECTION_REPORT])
	tupe: JSON_TYPE[]

	@ApiProperty({ type: [ObservationDTO]})
	@IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  observation: ObservationDTO[]
}
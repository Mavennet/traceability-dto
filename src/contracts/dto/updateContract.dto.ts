import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Matches,
  ValidateNested
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { UpdateSubContractDTO } from './updateSubContract.dto'
import { Type } from 'class-transformer'

export abstract class UpdateContractDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  contractId: number

  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
  startDate: string

  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
  endDate: string

  @ApiPropertyOptional()
  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => UpdateSubContractDTO)
  UpdateSubContracts?: UpdateSubContractDTO[]

}

import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { JSON_TYPE, PROOF_PURPOSE_TYPE } from '../constants'

export abstract class ProofDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(JSON_TYPE)
  type: JSON_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  created: string

  @ApiProperty()
  @IsEnum(PROOF_PURPOSE_TYPE)
  proofPurpose?: PROOF_PURPOSE_TYPE

  @ApiProperty()
  @IsOptional()
  proofValue?: string

  @ApiProperty()
  @IsString()
  @IsOptional()
  verificationMethod?: string
}

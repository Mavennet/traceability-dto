import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsEnum, IsNotEmpty, IsString, Matches } from 'class-validator'
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
  @IsNotEmpty()
  @IsEnum(PROOF_PURPOSE_TYPE)
  proofPurpose: PROOF_PURPOSE_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  verificationMethod: string
}

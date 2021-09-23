import {
  IsNotEmpty,
  IsEnum,
  IsString,
  IsDateString,
  Matches,
  Equals
} from 'class-validator'
import {
  JSON_TYPE,
  PROOF_PURPOSE_TYPE
} from '../constants'
import { ApiProperty } from '@nestjs/swagger'

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

import {
  IsNotEmpty,
  IsEnum,
  IsString,
  IsDateString,
  Matches,
  Equals
} from 'class-validator'
import { JSON_TYPE, PROOF_PURPOSE_TYPE } from './constants'

export class VerifiableCredentialDTO {
  @IsNotEmpty()
  @IsEnum(JSON_TYPE)
  @Equals(JSON_TYPE.ED25519_SIGNATURE_2018)
  type: JSON_TYPE

  @IsNotEmpty()
  @IsDateString()
  created: Date

  @IsNotEmpty()
  @IsString()
  jws: string

  @IsNotEmpty()
  @IsEnum(PROOF_PURPOSE_TYPE)
  proofPurpose: PROOF_PURPOSE_TYPE

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  verificationMethod: string
}

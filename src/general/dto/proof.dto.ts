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

export abstract class ProofDTO {
  @IsNotEmpty()
  @IsEnum(JSON_TYPE)
  @Equals(JSON_TYPE.ED25519_SIGNATURE_2018)
  abstract type: JSON_TYPE

  @IsNotEmpty()
  @IsDateString()
  abstract created: Date

  @IsNotEmpty()
  @IsString()
  abstract jws: string

  @IsNotEmpty()
  @IsEnum(PROOF_PURPOSE_TYPE)
  abstract proofPurpose: PROOF_PURPOSE_TYPE

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  abstract verificationMethod: string
}

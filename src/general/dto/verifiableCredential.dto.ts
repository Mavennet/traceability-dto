import {
  IsNotEmpty,
  IsUrl,
  IsArray,
  IsString,
  IsDateString,
  ArrayMinSize,
  ArrayMaxSize,
  ValidateNested,
  Validate,
  Matches
} from 'class-validator'
import { Type } from 'class-transformer'
import { ProofDTO } from './proof.dto'

export abstract class VerifiableCredentialDTO {
  abstract '@context': string[]

  @IsNotEmpty()
  @IsUrl()
  id: string

  abstract type: any[]

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  issuer: string

  @IsNotEmpty()
  @IsDateString()
  issuanceDate: string
  
  credentialSubject: Object

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}

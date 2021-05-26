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
  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @Validate(o =>
    o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
    o['@context'].includes('https://schema.org/')
  )
  abstract '@context': string[]

  @IsNotEmpty()
  @IsUrl()
  abstract id: string

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(2)
  @Validate(o => o.type.includes('VerifiableCredential'))
  abstract type: string[]

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  abstract issuer: string

  @IsNotEmpty()
  @IsDateString()
  abstract issuanceDate: Date
  
  abstract credentialSubject: Object

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  abstract proof: ProofDTO
}

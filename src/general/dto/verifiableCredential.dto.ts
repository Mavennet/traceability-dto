import {
  IsNotEmpty,
  IsUrl,
  IsString,
  IsDateString,
  ValidateNested,
  Matches
} from 'class-validator'
import { Type } from 'class-transformer'
import { ProofDTO } from './proof.dto'
import { ApiProperty } from '@nestjs/swagger'

export abstract class VerifiableCredentialDTO {
  abstract '@context': string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  id: string

  abstract type: any[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  issuer: string

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  issuanceDate: string

  abstract credentialSubject: Object

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}

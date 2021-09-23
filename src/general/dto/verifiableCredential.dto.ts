import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsUrl,
  IsString,
  IsDateString,
  IsOptional,
  ValidateNested,
  Matches
} from 'class-validator'
import { Type } from 'class-transformer'
import { ProofDTO } from './'
import { CredentialStatusDTO } from '../../credentials'

export abstract class VerifiableCredentialDTO {
  abstract '@context': string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development'})
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

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  expirationDate?: string

  abstract credentialSubject: Object

  @ApiPropertyOptional({ type: () => CredentialStatusDTO })
  @IsOptional()
  @ValidateNested()
  @Type(() => CredentialStatusDTO)
  credentialStatus?: CredentialStatusDTO

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}

import { ApiPropertyOptional } from '@nestjs/swagger'
import { Equals, IsDateString, IsEnum, IsString, IsOptional, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { CredentialStatusDTO } from './'
import { PROOF_PURPOSE_TYPE } from '../../general'

export class CredentialOptionsDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(PROOF_PURPOSE_TYPE)
  @Equals(PROOF_PURPOSE_TYPE.ASSERTION_METHOD || PROOF_PURPOSE_TYPE.AUTHENTICATION)
  proofPurpose?: PROOF_PURPOSE_TYPE

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  assertionMethod?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  issuanceDate?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  issuer?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  verificationMethod?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  created?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  challenge?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  domain?: string

  @ApiPropertyOptional({ type: () => CredentialStatusDTO })
  @IsOptional()
  @ValidateNested()
  @Type(() => CredentialStatusDTO)
  credentialStatus?: CredentialStatusDTO
}

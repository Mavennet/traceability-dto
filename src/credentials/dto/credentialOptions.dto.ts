import { ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { Equals, IsDateString, IsOptional, IsString, ValidateNested } from 'class-validator'
import { PROOF_PURPOSE_TYPE } from '../../general'
import { CredentialStatusDTO } from './'

export class CredentialOptionsDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @Equals(PROOF_PURPOSE_TYPE.ASSERTION_METHOD)
  proofPurpose?: PROOF_PURPOSE_TYPE.ASSERTION_METHOD

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  assertionMethod?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  issuanceDate?: string | Date

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

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  type?: string
}

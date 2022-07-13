import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Validate,
  ValidateNested
} from 'class-validator'
import { CredentialStatusDTO } from '..'
import { ProofDTO, IssuerDTO } from '../../general/dto'

export abstract class VerifiableCredentialDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/2018/credentials/v1'))
  '@context': string[]

  @ApiProperty()
  @IsNotEmpty()
  id: string

  @ApiProperty()
  @IsString({ each: true })
  abstract type: string[] | string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  issuer: string | IssuerDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  issuanceDate: string | Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  expirationDate?: string

  @ApiProperty()
  @IsNotEmpty()
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

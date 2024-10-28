import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  IsUrl,
  Validate,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import type { IssuerDTO } from '../../general'
import { Type } from 'class-transformer'
import { CredentialStatusDTO } from './credentialStatus.dto'
import { CredentialSchema } from './credentialSchema.dto'

export abstract class CredentialDTO<T> {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/ns/credentials/v2'))
  '@context': string[]

  @ApiProperty()
  @IsString()
  @ValidateIf((object, value) => value !== undefined)
  id: string

  @ApiProperty()
  @IsString({ each: true })
  @ArrayMinSize(1)
  type: string[]

  @ApiProperty()
  @IsNotEmpty()
  issuer: string | IssuerDTO

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  validFrom: string | Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  validUntil?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  abstract credentialSubject: T

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => CredentialStatusDTO)
  credentialStatus?: CredentialStatusDTO

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => CredentialSchema)
  credentialSchema?: CredentialSchema
}

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Validate
} from 'class-validator'
import type { IssuerDTO } from '../..'

export class CredentialDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/2018/credentials/v1'))
  '@context': string[]

  @ApiProperty()
  @IsString()
  @IsOptional()
  id: string

  @ApiProperty()
  @IsString({ each: true })
  @ArrayMinSize(1)
  type: any[]

  @ApiProperty()
  @IsNotEmpty()
  issuer: string | IssuerDTO

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsDateString()
  issuanceDate?: string | Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  expirationDate?: string

  @ApiProperty()
  @IsNotEmpty()
  credentialSubject: unknown
}

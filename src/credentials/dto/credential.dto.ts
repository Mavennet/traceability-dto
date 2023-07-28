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

class CredentialSubject {
  @ApiProperty()
  @IsOptional()
  @IsString()
  id?: string;

  [key: string]: any
}

export class CredentialDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/2018/credentials/v1'))
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
  issuanceDate: string | Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  expirationDate?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  @ValidateNested()
  credentialSubject: CredentialSubject
}

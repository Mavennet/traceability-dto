import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsArray,
  IsDateString,
  ArrayMinSize,
  IsUrl,
  IsOptional,
  IsNotEmpty,
  ValidateNested,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { CredentialStatusDTO } from './'
import { IssuerDTO } from '../..'

export class CredentialDTO {
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
  @IsArray()
  @ArrayMinSize(1)
  type: any[]

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
  credentialSubject: Object

  @ApiPropertyOptional({ type: () => CredentialStatusDTO })
  @IsOptional()
  @ValidateNested()
  @Type(() => CredentialStatusDTO)
  credentialStatus?: CredentialStatusDTO
}

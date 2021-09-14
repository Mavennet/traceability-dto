import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsArray,
  IsDateString,
  ArrayMinSize,
  IsUrl,
  IsOptional,
  IsNotEmpty,
  IsString,
  Matches,
  ValidateNested
} from 'class-validator'
import { Type } from 'class-transformer'
import { CredentialStatusDTO } from './'

export class CredentialDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  '@context': string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  id: string

  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  type: any[]

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

  @ApiProperty()
  @IsNotEmpty()
  credentialSubject: Object

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => CredentialStatusDTO)
  credentialStatus?: CredentialStatusDTO
}

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
  ValidateNested,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { CredentialStatusDTO } from './'

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

  @ApiPropertyOptional({ type: () => CredentialStatusDTO })
  @IsOptional()
  @ValidateNested()
  @Type(() => CredentialStatusDTO)
  credentialStatus?: CredentialStatusDTO
}

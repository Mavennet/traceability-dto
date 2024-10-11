import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  Equals,
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  IsUrl,
  Validate
} from 'class-validator'
import { JSON_TYPE } from '../../general'

export class CredentialStatusDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  id?: string

  @ApiProperty()
  @IsArray()
  @Validate((o) => o['@context'].includes('BitstringStatusListEntry'))
  type: string[]

  @ApiPropertyOptional()
  @IsNumberString()
  @IsNotEmpty()
  statusListIndex: string

  @ApiPropertyOptional()
  @IsNumberString()
  @IsNotEmpty()
  statusPurpose: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  statusListCredential?: string
}

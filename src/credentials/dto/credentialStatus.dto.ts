import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNumberString, IsOptional, IsUrl } from 'class-validator'
import { JSON_TYPE } from '../../general'

export class CredentialStatusDTO {
  @ApiProperty()
  @IsOptional()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  id?: string

  @ApiProperty()
  @IsEnum(JSON_TYPE)
  type: JSON_TYPE

  @ApiProperty()
  @IsNumberString()
  @IsOptional()
  revocationListIndex?: string

  @ApiProperty()
  @IsOptional()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  revocationListCredential?: string
}

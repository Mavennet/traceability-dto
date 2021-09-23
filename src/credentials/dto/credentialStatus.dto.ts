import { ApiProperty } from '@nestjs/swagger'
import {
  Equals,
  IsEnum,
  IsNotEmpty,
  IsUrl,
  IsNumberString
} from 'class-validator'
import { JSON_TYPE } from '../../general'

export class CredentialStatusDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development'})
  id: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(JSON_TYPE)
  type: JSON_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  revocationListIndex: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development'})
  revocationListCredential: string
}

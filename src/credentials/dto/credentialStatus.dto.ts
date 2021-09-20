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
  @IsUrl()
  id: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEnum(JSON_TYPE)
  @Equals(JSON_TYPE.REVOCATION_LIST_2020_STATUS)
  type: JSON_TYPE

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  revocationListIndex: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl()
  revocationListCredential: string
}
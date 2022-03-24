import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNumberString } from 'class-validator'
import { JSON_TYPE } from '../../general'

export class CredentialStatusDTO {
  @ApiProperty()
  id: string

  @ApiProperty()
  @IsEnum(JSON_TYPE)
  type: JSON_TYPE

  @ApiProperty()
  @IsNumberString()
  revocationListIndex: string

  @ApiProperty()
  revocationListCredential: string
}

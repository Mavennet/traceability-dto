import { ApiProperty } from '@nestjs/swagger'
import { IsEnum } from 'class-validator'
import { JSON_TYPE } from '../../general'

export class CredentialStatusDTO {
  @ApiProperty()
  id: string

  @ApiProperty()
  @IsEnum(JSON_TYPE)
  type: JSON_TYPE

  @ApiProperty()
  revocationListIndex: string

  @ApiProperty()
  revocationListCredential: string
}

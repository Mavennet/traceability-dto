import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsEnum, IsNumberString, IsOptional, IsUrl } from 'class-validator'
import { JSON_TYPE } from '../../general'

export class CredentialStatusDTO {
  @ApiPropertyOptional({
    example: 'https://neoflow-{{org}}-{{env}}-revocation.s3.amazonaws.com/RevocationList2020VC#27'
  })
  @IsOptional()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  id?: string

  @ApiProperty({ example: 'RevocationList2020Status' })
  @IsEnum(JSON_TYPE)
  type: JSON_TYPE

  @ApiPropertyOptional({ example: '27' })
  @IsNumberString()
  @IsOptional()
  revocationListIndex?: string

  @ApiPropertyOptional({ example: 'https://neoflow-{{org}}-{{env}}-revocation.s3.amazonaws.com/RevocationList2020VC' })
  @IsOptional()
  @IsUrl({ require_tld: process.env.NODE_ENV !== 'development' })
  revocationListCredential?: string
}

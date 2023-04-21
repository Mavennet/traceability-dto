import { ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDateString, IsOptional, IsString, ValidateNested } from 'class-validator'
import { CredentialStatusDTO } from '.'

export class IssueCredentialOptionsDTO {
  @ApiPropertyOptional({ example: '2023-04-01T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  created?: string

  @ApiPropertyOptional({ type: () => CredentialStatusDTO, example: { type: 'RevocationList2020Status' } })
  @IsOptional()
  @ValidateNested()
  @Type(() => CredentialStatusDTO)
  credentialStatus?: CredentialStatusDTO

  @ApiPropertyOptional({ examples: ['Ed25519Signature2018', 'Ed25519Signature2020'], example: 'Ed25519Signature2018' })
  @IsOptional()
  @IsString()
  type?: string
}

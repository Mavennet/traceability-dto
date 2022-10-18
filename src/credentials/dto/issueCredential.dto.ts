import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, ValidateNested, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'
import { CredentialOptionsDTO } from './credentialOptions.dto'
import { CredentialDTO } from './credential.dto'

export class IssueCredentialDTO {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CredentialDTO)
  credential: CredentialDTO

  @ApiPropertyOptional()
  @ValidateNested()
  @IsOptional()
  @Type(() => CredentialOptionsDTO)
  options?: CredentialOptionsDTO
}

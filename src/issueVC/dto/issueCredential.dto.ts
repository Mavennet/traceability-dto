import { IsNotEmpty, ValidateNested, IsOptional } from 'class-validator'
import { CredentialDTO } from './credential.dto'
import { CredentialOptionsDTO } from './credentialOptions.dto'
import { Type } from 'class-transformer'

export class IssueCredentialDTO {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CredentialDTO)
  credential: CredentialDTO

  @ValidateNested()
  @IsOptional()
  @Type(() => CredentialOptionsDTO)
  options?: CredentialOptionsDTO
}
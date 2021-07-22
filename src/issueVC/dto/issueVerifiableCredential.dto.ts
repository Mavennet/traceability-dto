import { IsNotEmpty, IsOptional } from 'class-validator'

export class IssueVerifiableCredentialDTO {
  @IsNotEmpty()
  verifiableCredential: any

  @IsOptional()
  options?: any
}

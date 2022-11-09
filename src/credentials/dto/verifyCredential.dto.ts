import { Type } from 'class-transformer'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { VerifiableCredentialDTO } from './verifiableCredential.dto'

export class VerifyCredentialDTO {
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => VerifiableCredentialDTO)
  verifiableCredential: VerifiableCredentialDTO
}

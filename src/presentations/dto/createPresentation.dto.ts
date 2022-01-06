import { IsNotEmpty, ValidateNested } from 'class-validator'
import { VerifiableCredentialDTO } from '../..'

export class CreatePresentationDTO {
  @ValidateNested()
  @IsNotEmpty()
  verifiableCredential: VerifiableCredentialDTO[]
}

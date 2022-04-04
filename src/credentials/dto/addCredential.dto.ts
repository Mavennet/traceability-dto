import { IsNotEmpty } from 'class-validator'

export class AddCredentialDTO {
  @IsNotEmpty()
  id: string

  @IsNotEmpty()
  '@context': string[]

  @IsNotEmpty()
  type: string[]

  @IsNotEmpty()
  issuer: string

  @IsNotEmpty()
  proof: JSON

  @IsNotEmpty()
  credentialSubject: JSON
}
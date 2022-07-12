import { Type } from 'class-transformer'
import { ArrayNotEmpty, IsNotEmpty, IsString, IsUrl, Validate, ValidateNested } from 'class-validator'
import { ProofDTO } from '../../general'

export class AddCredentialDTO {
  @IsNotEmpty()
  @IsString()
  id: string

  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/2018/credentials/v1'))
  @ArrayNotEmpty()
  '@context': string[]

  @IsNotEmpty()
  @IsString()
  type: string[]

  @IsNotEmpty()
  @IsString()
  issuer: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO

  @IsNotEmpty()
  credentialSubject: JSON
}

import { Type } from 'class-transformer'
import { ArrayNotEmpty, IsNotEmpty, IsOptional, IsString, IsUrl, Validate, ValidateNested } from 'class-validator'
import { ProofDTO } from '../../general'
import { ApiProperty } from '@nestjs/swagger'
import { CredentialStatusDTO } from './credentialStatus.dto'

export class AddCredentialDTO {
  @ApiProperty({ example: 'https://api.{{ENV}}.{{ORG}}.neoflow.energy/credentials/{{$randomUUID}}' })
  @IsString()
  id: string

  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/2018/credentials/v1'))
  @ArrayNotEmpty()
  @ApiProperty({ example: ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/traceability/v1'] })
  '@context': string[]

  @IsNotEmpty()
  @IsString({ each: true })
  @ApiProperty({ example: ['VerifiableCredential'] })
  type: string[]

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'https://api.{{ENV}}.{{ORG}}.neoflow.energy' })
  issuer: string

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  @ApiProperty({ type: () => ProofDTO })
  proof: ProofDTO

  @IsNotEmpty()
  @ApiProperty({ example: { '@id': 'did:example:123456789abcdefghi', name: 'John Doe' } })
  credentialSubject: JSON

  @IsOptional()
  @ApiProperty({ type: () => CredentialStatusDTO })
  credentialStatus?: CredentialStatusDTO
}

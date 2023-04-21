import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { ArrayMinSize, IsArray, IsDateString, IsNotEmpty, IsOptional, IsString, IsUrl, Validate } from 'class-validator'
import type { IssuerDTO } from '../..'

export class CredentialDTO {
  @ApiProperty({ example: ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/traceability/v1'] })
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/2018/credentials/v1'))
  '@context': string[]

  @ApiProperty({ example: 'https://api.{{ENV}}.{{ORG}}.neoflow.energy/credentials/{{$randomUUID}}' })
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty({ example: ['VerifiableCredential'] })
  @IsArray()
  @ArrayMinSize(1)
  type: any[]

  @ApiProperty({ example: 'https://api.{{ENV}}.{{ORG}}.neoflow.energy' })
  @IsNotEmpty()
  issuer: string | IssuerDTO

  @ApiPropertyOptional({ example: '2023-04-01T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  issuanceDate?: string | Date

  @ApiPropertyOptional({ example: '2025-04-01T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  expirationDate?: string

  @ApiProperty({ example: { id: 'did:example:123456789abcdefghi', name: 'John Doe' } })
  @IsNotEmpty()
  credentialSubject: unknown
}

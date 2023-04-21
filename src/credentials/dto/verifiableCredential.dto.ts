import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Validate,
  ValidateNested
} from 'class-validator'
import { CredentialStatusDTO } from '..'
import { ProofDTO } from '../../general/dto'
import type { IssuerDTO } from '../../general/dto'

export abstract class VerifiableCredentialDTO {
  @ApiProperty({ example: ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/traceability/v1'] })
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/2018/credentials/v1'))
  '@context': string[]

  @ApiProperty({ example: 'https://api.{{ENV}}.{{ORG}}.neoflow.energy/credentials/{{$randomUUID}}' })
  @IsNotEmpty()
  id: string

  @ApiProperty({ example: 'VerifiableCredential' })
  @IsString({ each: true })
  abstract type: string[] | string

  @ApiProperty({ example: 'https://api.{{ENV}}.{{ORG}}.neoflow.energy' })
  @IsNotEmpty()
  @IsString()
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
  abstract credentialSubject: unknown

  @ApiPropertyOptional({ type: () => CredentialStatusDTO })
  @IsOptional()
  @ValidateNested()
  @Type(() => CredentialStatusDTO)
  credentialStatus?: CredentialStatusDTO

  @ApiProperty({ type: () => ProofDTO })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}

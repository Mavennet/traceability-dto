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
import { IsType } from '../../general/decorators/isType.decorator'
import { ProofDTO } from '../../general/dto'

export abstract class VerifiableCredentialDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/2018/credentials/v1'))
  '@context': string[]

  @ApiProperty()
  @IsNotEmpty()
  id: string

  @ApiProperty()
  @IsType(['string', 'array'])
  type: string[] | string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsType(['string', 'array'])
  issuer: string | any[]

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  issuanceDate: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  expirationDate?: string

  @ApiProperty()
  @IsNotEmpty()
  abstract credentialSubject: Object

  @ApiPropertyOptional({ type: () => CredentialStatusDTO })
  @IsOptional()
  @ValidateNested()
  @Type(() => CredentialStatusDTO)
  credentialStatus?: CredentialStatusDTO

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}

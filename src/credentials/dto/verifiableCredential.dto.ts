import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsObject, IsOptional, ValidateNested } from 'class-validator'
import { ProofDTO } from '../../general/dto'
import { CredentialDTO } from './credential.dto'
import { CredentialStatusDTO } from './credentialStatus.dto'

export class VerifiableCredentialDTO extends CredentialDTO {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  @IsObject()
  proof: ProofDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => CredentialStatusDTO)
  credentialStatus?: CredentialStatusDTO
}

import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'

export class IssueVerifiableCredentialDTO {
  @ApiProperty()
  @IsNotEmpty()
  verifiableCredential: any

  @IsOptional()
  options?: any
}

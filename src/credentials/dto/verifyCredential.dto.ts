import { Type } from 'class-transformer'
import { IsNotEmpty, ValidateNested } from 'class-validator'
import { VerifiableCredentialDTO } from './verifiableCredential.dto'
import { ApiProperty } from '@nestjs/swagger'

export class VerifyCredentialDTO {
  @ApiProperty({ type: () => VerifiableCredentialDTO })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => VerifiableCredentialDTO)
  verifiableCredential: VerifiableCredentialDTO
}

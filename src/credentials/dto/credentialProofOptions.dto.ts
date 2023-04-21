import { ApiPropertyOptional } from '@nestjs/swagger'
import { Equals, IsDateString, IsOptional, IsString, ValidateNested } from 'class-validator'
import { CredentialStatusDTO } from './credentialStatus.dto'
import { PROOF_PURPOSE_TYPE } from '../../general'

export class CredentialProofOptionsDTO {
  @ApiPropertyOptional({ example: '2023-04-01T00:00:00.000Z' })
  @IsOptional()
  @IsDateString()
  created?: string

  @ApiPropertyOptional({ examples: ['Ed25519Signature2018', 'Ed25519Signature2020'], example: 'Ed25519Signature2018' })
  @IsOptional()
  @IsString()
  type?: string

  @ApiPropertyOptional({ example: PROOF_PURPOSE_TYPE.ASSERTION_METHOD })
  @IsOptional()
  @Equals(PROOF_PURPOSE_TYPE.ASSERTION_METHOD)
  proofPurpose?: PROOF_PURPOSE_TYPE.ASSERTION_METHOD

  @ApiPropertyOptional({
    example: 'did:key:z6MkmN2kyuYs2o7Sv9X43azrN1Ts6eXCeBHwJ6gNqkhvNXLT#z6MkmN2kyuYs2o7Sv9X43azrN1Ts6eXCeBHwJ6gNqkhvNXLT'
  })
  @IsOptional()
  @IsString()
  verificationMethod?: string
}

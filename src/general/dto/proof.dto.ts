import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { JSON_TYPE, PROOF_PURPOSE_TYPE } from '../constants'

export abstract class ProofDTO {
  @ApiProperty({ examples: ['Ed25519Signature2018', 'Ed25519Signature2020'], example: 'Ed25519Signature2018' })
  @IsNotEmpty()
  @IsEnum(JSON_TYPE)
  type: JSON_TYPE

  @ApiProperty({ example: '2023-04-01T00:00:00.000Z' })
  @IsNotEmpty()
  @IsDateString()
  created: Date

  @ApiProperty({ enum: PROOF_PURPOSE_TYPE })
  @IsEnum(PROOF_PURPOSE_TYPE)
  proofPurpose?: PROOF_PURPOSE_TYPE

  @ApiProperty({ example: 'z2hbRFvhrxiZ9bPdTt5S3qcmnoYXWjWdPXYUVwp5SjiLwNpvLTj9H4kuVNX8GmxVwQ5MQ3CvZGiuYqN7sZqQJWB3p' })
  @IsOptional()
  proofValue?: string

  @ApiProperty({
    example:
      'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Kozxn1kKSydXBJAWedCg7ukztJAWrcB__R_lQjWTC6uDkNVdRJofQAs6pkD1WyHW8-hxufWmmhNaurcFDYe1Aw'
  })
  @IsOptional()
  jws?: string

  @ApiProperty({
    example: 'did:key:z6MkmN2kyuYs2o7Sv9X43azrN1Ts6eXCeBHwJ6gNqkhvNXLT#z6MkmN2kyuYs2o7Sv9X43azrN1Ts6eXCeBHwJ6gNqkhvNXLT'
  })
  @IsString()
  @IsOptional()
  verificationMethod?: string

  @ApiProperty({ example: '91a7e353-fd17-4eb9-a408-b60d61c4c410' })
  @IsOptional()
  @IsString()
  challenge?: string

  @ApiProperty({ example: '{{org}}' })
  @IsOptional()
  @IsString()
  domain?: string
}

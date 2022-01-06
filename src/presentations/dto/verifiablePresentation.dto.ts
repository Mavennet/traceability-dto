import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { ArrayMinSize, IsArray, IsNotEmpty, IsString, IsUrl, Validate, ValidateNested } from 'class-validator'
import { ProofDTO, VerifiableCredentialDTO } from '../..'

export class VerifiablePresentationDTO {
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
  @IsString({ each: true })
  type: string[] | string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @IsArray()
  verifiableCredential: VerifiableCredentialDTO[]

  @ApiProperty()
  @IsString()
  holder: string

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof: ProofDTO
}

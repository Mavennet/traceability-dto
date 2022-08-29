import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, IsArray, IsNotEmpty, IsString, IsUrl, Validate, ValidateNested } from 'class-validator'
import { VerifiableCredentialDTO } from '../..'

export abstract class PresentationDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @IsUrl({}, { each: true })
  @Validate((o) => o['@context'].includes('https://www.w3.org/2018/credentials/v1'))
  '@context': string[]

  @ApiProperty()
  @IsNotEmpty()
  abstract id: string

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
}

import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

export class CredentialSubject {
  @IsString()
  type: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  id?: string;

  [key: string]: any
}

import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, IsOptional, IsString } from 'class-validator'

export class CredentialSubject<T> {
  @IsString()
  type: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  id?: string;

  [key: string]: any
}

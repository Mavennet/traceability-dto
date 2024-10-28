import { ApiProperty } from '@nestjs/swagger'
import { ArrayMinSize, IsOptional, IsString } from 'class-validator'

export abstract class CredentialSchema {
  @ApiProperty()
  @IsString()
  type: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  id?: string
}

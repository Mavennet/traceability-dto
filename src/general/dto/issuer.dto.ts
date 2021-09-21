import {
  IsNotEmpty,
  IsOptional,
  IsUrl,
  IsString,
  IsArray,
  ArrayMinSize,
  Matches,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE } from '../constants'
import { ApiProperty } from '@nestjs/swagger'

export abstract class IssuerDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  type: JSON_TYPE[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  id: string

  @ApiProperty()
  @IsNotEmpty()
  @IsUrl({ require_tld: false })
  url: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string
}

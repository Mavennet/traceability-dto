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

export abstract class IssuerDTO {
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  abstract type: JSON_TYPE[]

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  abstract id: string

  @IsNotEmpty()
  @IsUrl()
  abstract url: string

  @IsNotEmpty()
  @IsString()
  abstract name: string

  @IsOptional()
  @IsString()
  abstract description: string
}

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
  type: JSON_TYPE[]

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  id: string

  @IsNotEmpty()
  @IsUrl()
  url: string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  description: string
}

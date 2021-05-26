import {
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsString,
  IsArray,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import { JSON_TYPE } from '../constants'

export abstract class PostalAddressDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type === [JSON_TYPE.POSTAL_ADDRESS])
  abstract type: JSON_TYPE[]

  @IsOptional()
  @IsString()
  abstract organizationName: string

  @IsOptional()
  @IsString()
  abstract streetAddress: string

  @IsNotEmpty()
  @IsString()
  abstract addressLocality: string

  @IsNotEmpty()
  @IsString()
  abstract addressRegion: string

  @IsOptional()
  @IsString()
  abstract postalCode: string

  @IsNotEmpty()
  @IsString()
  abstract addressCountry: string
}

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
  type: JSON_TYPE[]

  @IsOptional()
  @IsString()
  organizationName: string

  @IsOptional()
  @IsString()
  streetAddress: string

  @IsNotEmpty()
  @IsString()
  addressLocality: string

  @IsNotEmpty()
  @IsString()
  addressRegion: string

  @IsOptional()
  @IsString()
  postalCode: string

  @IsNotEmpty()
  @IsString()
  addressCountry: string
}

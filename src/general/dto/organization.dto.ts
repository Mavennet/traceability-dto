import {
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsString,
  IsEmail,
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../constants'
import { PostalAddressDTO } from './postalAddress.dto'

export abstract class OrganizationDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type === [JSON_TYPE.ORGANIZATION])
  type: JSON_TYPE[]

  @IsNotEmpty()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  description?: string

  @IsOptional()
  @IsString()
  did?: string

  @IsOptional()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  address?: PostalAddressDTO

  @IsOptional()
  @IsEmail()
  email?: string

  @IsOptional()
  @IsString() // would be ideal to use IsPhoneNumber(REGION_CODE)
  phone?: string

  @IsOptional()
  @IsString() // would be ideal to use IsPhoneNumber(REGION_CODE)
  faxNumber?: string
}

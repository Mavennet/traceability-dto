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
  abstract type: JSON_TYPE[]

  @IsNotEmpty()
  @IsString()
  abstract name: string

  @IsOptional()
  @IsString()
  abstract description: string

  @IsOptional()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  abstract address: PostalAddressDTO

  @IsOptional()
  @IsEmail()
  abstract email: string

  @IsOptional()
  @IsString() // would be ideal to use IsPhoneNumber(REGION_CODE)
  abstract phoneNumber: string

  @IsOptional()
  @IsString() // would be ideal to use IsPhoneNumber(REGION_CODE)
  abstract faxNumber: string
}

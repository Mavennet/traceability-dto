import {
  IsNotEmpty,
  IsOptional,
  IsEnum,
  IsString,
  IsEmail,
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
  Validate,
  Equals
} from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../constants'
import { PostalAddressDTO, COMPACT_PostalAddressDTO } from './postalAddress.dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export abstract class OrganizationDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE.ORGANIZATION)
  type: JSON_TYPE.ORGANIZATION

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  did?: string

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  address?: PostalAddressDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  email?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString() // would be ideal to use IsPhoneNumber(REGION_CODE)
  phoneNumber?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString() // would be ideal to use IsPhoneNumber(REGION_CODE)
  faxNumber?: string
}

export abstract class COMPACT_OrganizationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  did?: string

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => COMPACT_PostalAddressDTO)
  address?: COMPACT_PostalAddressDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  email?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString() // would be ideal to use IsPhoneNumber(REGION_CODE)
  phoneNumber?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString() // would be ideal to use IsPhoneNumber(REGION_CODE)
  faxNumber?: string
}

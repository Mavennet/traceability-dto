import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator'
import type { JSON_TYPE } from '../constants'
import { Type } from 'class-transformer'
import { PostalAddressDTO } from './postalAddress.dto'

export abstract class IssuerDTO {
  @ApiProperty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  type: JSON_TYPE[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty()
  @IsNotEmpty()
  url: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  description: string

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  address?: PostalAddressDTO
}

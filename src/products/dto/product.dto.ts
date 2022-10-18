import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsEnum,
  IsString,
  IsUUID,
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
  Validate
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  OrganizationDTO,
  JSON_TYPE
} from '../../general'

export abstract class ProductDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type.includes(JSON_TYPE.PRODUCT))
  abstract type: any

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  manufacturer: OrganizationDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsUUID()
  productID?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  abstract name: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string
}

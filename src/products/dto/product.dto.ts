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
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type.includes(JSON_TYPE.PRODUCT))
  abstract type: any

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  manufacturer: OrganizationDTO

  @IsOptional()
  @IsUUID()
  productID?: string

  @IsNotEmpty()
  @IsString()
  abstract name: string

  @IsOptional()
  @IsString()
  description?: string
}

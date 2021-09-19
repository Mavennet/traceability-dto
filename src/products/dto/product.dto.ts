import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsEnum,
  IsString,
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
  @Validate(o => o.type === [JSON_TYPE.PRODUCT])
  abstract type: JSON_TYPE[]

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => OrganizationDTO)
  manufacturer: OrganizationDTO

  @IsNotEmpty()
  @IsString()
  abstract name: string

  @IsOptional()
  @IsString()
  description?: string
}

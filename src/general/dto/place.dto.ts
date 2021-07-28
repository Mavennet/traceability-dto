import {
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
import { JSON_TYPE } from '../constants'
import { GeoCoordinatesDTO } from './geoCoordinates.dto'
import { PostalAddressDTO } from './postalAddress.dto'
import { ApiProperty } from '@nestjs/swagger'

export abstract class PlaceDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type === [JSON_TYPE.PLACE])
  type: JSON_TYPE[]

  @ApiProperty()
  @IsOptional()
  @IsString()
  globalLocationNumber?: string

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => GeoCoordinatesDTO)
  geo: GeoCoordinatesDTO

  @ApiProperty()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  address: PostalAddressDTO
}

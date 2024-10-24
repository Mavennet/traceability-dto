import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { Equals, IsLatitude, IsLongitude, IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator'
import { JSON_TYPE } from '../constants'
import { GeoCoordinatesDTO } from './geoCoordinates.dto'
import { PostalAddressDTO } from './postalAddress.dto'

export abstract class PlaceDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE.PLACE)
  type: JSON_TYPE.PLACE

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  globalLocationNumber?: string

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => GeoCoordinatesDTO)
  geo?: GeoCoordinatesDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  address?: PostalAddressDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  locationName?: string
}

export abstract class COMPACT_PlaceDTO {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  globalLocationNumber?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsLatitude()
  latitude: string

  @ApiProperty()
  @IsNotEmpty()
  @IsLongitude()
  longitude: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  organizationName?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  streetAddress?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  addressLocality: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  addressRegion: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  postalCode?: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  addressCountry: string
}

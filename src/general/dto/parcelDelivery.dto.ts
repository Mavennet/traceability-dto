import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import {
  ArrayNotEmpty,
  Equals,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  Validate,
  ValidateNested
} from 'class-validator'
import { JSON_TYPE } from '../constants'
import { PlaceDTO } from './place.dto'

export abstract class ParcelDeliveryDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE.PARCEL_DELIVERY)
  type: JSON_TYPE.PARCEL_DELIVERY

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  originAddress: PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PlaceDTO)
  deliveryAddress: PlaceDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  abstract deliveryMethod?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  trackingNumber?: string
}

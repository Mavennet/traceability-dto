import { IsOptional, IsEnum, IsString, ValidateNested, IsArray, ArrayNotEmpty, Validate } from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../constants'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { PlaceDTO } from './place.dto'

export abstract class ParcelDeliveryDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.PARCEL_DELIVERY])
  type: JSON_TYPE[]

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

import { IsOptional, IsEnum, IsString, ValidateNested, IsArray, ArrayNotEmpty, Validate } from 'class-validator'
import { Type } from 'class-transformer'
import { JSON_TYPE } from '../constants'
import { PostalAddressDTO } from './postalAddress.dto'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

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
  @Type(() => PostalAddressDTO)
  originAddress: PostalAddressDTO

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  deliveryAddress: PostalAddressDTO

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  abstract deliveryMethod?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  trackingNumber?: string
}

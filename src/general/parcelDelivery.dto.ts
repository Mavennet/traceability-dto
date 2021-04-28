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
import { JSON_TYPE, TRANSPORTATION_TYPE } from './constants'
import { PostalAddressDTO } from './postalAddress.dto'

export class ParcelDeliveryDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate(o => o.type === [JSON_TYPE.PARCEL_DELIVERY])
  type: JSON_TYPE

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  originAddress: PostalAddressDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PostalAddressDTO)
  deliveryAddress: PostalAddressDTO

  @IsOptional()
  @IsEnum(TRANSPORTATION_TYPE)
  deliveryMethod: TRANSPORTATION_TYPE

  @IsOptional()
  @IsString()
  trackingNumber: string
}

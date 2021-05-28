import {
  IsNotEmpty,
  IsString,
  IsLatitude,
  IsLongitude
} from 'class-validator'

export abstract class AddressDTO {
  @IsNotEmpty()
  @IsString()
  address: string

  @IsNotEmpty()
  @IsLatitude()
  latitude: string

  @IsNotEmpty()
  @IsLongitude()
  longitude: string
}

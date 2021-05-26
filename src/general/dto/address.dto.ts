import {
  IsNotEmpty,
  IsString,
  IsLatitude,
  IsLongitude
} from 'class-validator'

export abstract class AddressDTO {
  @IsNotEmpty()
  @IsString()
  abstract address: string

  @IsNotEmpty()
  @IsLatitude()
  abstract latitude: string

  @IsNotEmpty()
  @IsLongitude()
  abstract longitude: string
}

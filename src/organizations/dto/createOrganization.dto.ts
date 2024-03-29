import { IsNotEmpty, IsEnum, IsString, Matches, IsEmail, IsPhoneNumber } from 'class-validator'
import { ORGANIZATION_ROLE } from '../constants'

export abstract class CreateOrganizationDTO {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  address: string

  @IsNotEmpty()
  @IsPhoneNumber('CA')
  phone: string

  @IsNotEmpty()
  @IsEnum(ORGANIZATION_ROLE)
  role: ORGANIZATION_ROLE

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  did: string

  @IsNotEmpty()
  @IsString()
  backendLink: string
}

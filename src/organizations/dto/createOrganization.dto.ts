import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsEnum,
  IsString,
  Matches,
  IsEmail,
  IsPhoneNumber
} from 'class-validator'
import { ORGANIZATION_ROLE } from '../constants'

export abstract class CreateOrganizationDto {
  @IsNotEmpty()
  @IsString()
  abstract name: string

  @IsNotEmpty()
  @IsEmail()
  abstract email: string

  @IsNotEmpty()
  @IsString()
  abstract address: string

  @IsNotEmpty()
  @IsPhoneNumber('CA')
  abstract phone: string

  @IsNotEmpty()
  @IsEnum(ORGANIZATION_ROLE)
  abstract role: ORGANIZATION_ROLE

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  abstract did: string

  @IsNotEmpty()
  @IsString()
  abstract backendLink: string

  @IsNotEmptyObject()
  abstract uwi: Map<string, string>
}

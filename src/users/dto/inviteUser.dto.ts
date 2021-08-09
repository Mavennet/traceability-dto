import {
  IsNotEmpty,
  IsEmail,
  IsString
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export abstract class InviteUserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string
}

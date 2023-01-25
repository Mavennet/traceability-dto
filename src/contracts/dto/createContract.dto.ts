import {
  IsNotEmpty,
  IsString,
  Matches
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export abstract class CreateContractDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  sender: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  destination: string

  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  startDate: string

  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  endDate: string
}

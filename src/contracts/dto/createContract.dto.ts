import {
  IsNotEmpty,
  IsString,
  Matches
} from 'class-validator'

export abstract class CreateContractDTO {
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  sender: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @IsNotEmpty()
  @IsString()
  destination: string

  @IsNotEmpty()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  startDate: string

  @IsNotEmpty()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  endDate: string
}

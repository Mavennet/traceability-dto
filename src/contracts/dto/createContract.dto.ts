import {
  IsNotEmpty,
  IsString,
  Matches
} from 'class-validator'

export abstract class CreateContractDTO {
  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  abstract sender: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  abstract receiver: string

  @IsNotEmpty()
  @IsString()
  abstract destination: string

  @IsNotEmpty()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  abstract startDate: string

  @IsNotEmpty()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  abstract endDate: string
}

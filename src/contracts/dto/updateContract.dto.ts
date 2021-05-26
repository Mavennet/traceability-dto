import {
	IsNotEmpty,
	IsNumber,
	Matches
} from 'class-validator'

export abstract class UpdateContractDTO {
  @IsNotEmpty()
  @IsNumber()
  abstract contractId: number

  @IsNotEmpty()
  @Matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
  abstract startDate: string

  @IsNotEmpty()
  @Matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
  abstract endDate: string
}

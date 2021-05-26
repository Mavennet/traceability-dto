import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsBoolean,
  IsOptional,
  Matches
} from 'class-validator'

export abstract class ConfirmContractDTO {
  @IsNotEmpty()
  @IsNumber()
  abstract contractId: number

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  abstract receiver: string

  @IsNotEmpty()
  @IsBoolean()
  abstract status: boolean

  @IsNotEmpty()
  @IsString()
  abstract destination: string

  @IsOptional()
  @IsString()
  abstract comment: string
}

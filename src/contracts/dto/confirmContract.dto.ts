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
  contractId: number

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  receiver: string

  @IsNotEmpty()
  @IsBoolean()
  status: boolean

  @IsNotEmpty()
  @IsString()
  destination: string

  @IsOptional()
  @IsString()
  comment?: string
}

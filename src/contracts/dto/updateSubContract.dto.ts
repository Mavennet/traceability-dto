import {
  IsNotEmpty,
  IsNumber
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export abstract class UpdateSubContractDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  subContractId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  takeOrPay_Commitment_BPD: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  cost: number
}

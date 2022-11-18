import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export abstract class CreateSubContractDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  shipperEmail: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  pipeline: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  contractId: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  takeOrPay_Commitment_BPD: number

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  cost: number

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  NOS_Period: string | Date

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  Delivery_Facility?: string
}

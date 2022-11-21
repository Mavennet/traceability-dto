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
  pipeline: string

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

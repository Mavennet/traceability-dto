import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
  ValidateIf,
  ValidateNested
} from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { CreateSubContractDTO } from './createSubContract.dto'
import { Type } from 'class-transformer'

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

  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isMonthly: boolean
  
  @ApiPropertyOptional()
  @IsOptional()
  @IsEmail()
  signedInEmail?: string

  @ApiProperty()
  @ValidateIf(o => o.isMonthly === true)
  @ValidateNested({ each: true })
  @IsNotEmpty()
  @Type(() => CreateSubContractDTO)
  CreateSubContracts?: CreateSubContractDTO[]

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  takeOrPay_Volume?: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  tariff?: number

}

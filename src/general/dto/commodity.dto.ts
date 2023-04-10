import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsArray, ArrayNotEmpty, IsOptional, IsString, IsNotEmpty } from 'class-validator'
import { JSON_TYPE } from '../constants'

export class CommodityDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  type: JSON_TYPE[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  commodityCode: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  commodityCodeType?: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string
}

import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsArray, ArrayNotEmpty, IsOptional, IsString } from 'class-validator'
import { JSON_TYPE } from '../constants'

export class CommodityDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  type: JSON_TYPE[]

  @ApiProperty()
  @IsOptional()
  @IsString()
  commodityCode?: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  commodityCodeType?: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  description?: string
}

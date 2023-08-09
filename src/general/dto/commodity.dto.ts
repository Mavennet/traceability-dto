import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsEnum, IsArray, ArrayNotEmpty, IsOptional, IsString, IsNotEmpty } from 'class-validator'
import { JSON_TYPE } from '../constants'

export class CommodityDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  type: JSON_TYPE[]

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  commodityCode?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  commodityCodeType?: string

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string
}

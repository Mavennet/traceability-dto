import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Equals, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { JSON_TYPE } from '../constants'

export class CommodityDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE.COMMODITY)
  type: JSON_TYPE.COMMODITY

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

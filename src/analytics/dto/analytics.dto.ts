import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export abstract class AnalyticsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  currentMillis: number

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  productId: string
}

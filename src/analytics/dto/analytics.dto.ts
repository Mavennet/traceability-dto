import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
} from 'class-validator'

export class AnalyticsDTO {
  @IsNotEmpty()
  @IsNumber()
  currentMillis: number

  @IsNotEmpty()
  @IsUUID()
  productId: string
}

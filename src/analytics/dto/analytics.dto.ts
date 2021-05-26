import {
  IsNotEmpty,
  IsNumber,
  IsUUID,
} from 'class-validator'

export abstract class AnalyticsDTO {
  @IsNotEmpty()
  @IsNumber()
  abstract currentMillis: number

  @IsNotEmpty()
  @IsUUID()
  abstract productId: string
}

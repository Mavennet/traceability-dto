import {
  IsNotEmpty,
  IsOptional,
  IsNumber,
  IsUUID,
  IsString,
  IsDateString,
  IsEnum,
  IsBoolean,
  Matches
} from 'class-validator'
import { NOTIFICATION_TYPE } from '../constants'

export abstract class NotificationDTO {
  @IsNotEmpty()
  @IsNumber()
  abstract notificationId: number

  @IsNotEmpty()
  @IsEnum(NOTIFICATION_TYPE)
  abstract notificationType: NOTIFICATION_TYPE

  @IsOptional()
  @IsUUID()
  abstract productId: string

  @IsOptional()
  @IsNumber()
  abstract contractId: number

  @IsOptional()
  @IsNumber()
  abstract transferRequestId: number

  @IsNotEmpty()
  @IsString()
  @Matches(/^did:/)
  abstract sender: string

  @IsNotEmpty()
  @IsString()
  abstract senderName: string

  @IsNotEmpty()
  @IsBoolean()
  abstract read: boolean

  @IsNotEmpty()
  @IsDateString()
  abstract createdAt: Date
}

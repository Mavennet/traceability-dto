import {
  IsNotEmpty,
  IsNumberString
} from 'class-validator'

export abstract class ReadNotificationDTO {
  @IsNotEmpty()
  @IsNumberString()
  notificationId: number
}

import {
	IsNotEmpty,
	IsNumberString
} from 'class-validator'

export abstract class ReadNotificationDTO {
  @IsNotEmpty()
  @IsNumberString()
  abstract notificationId: number
}

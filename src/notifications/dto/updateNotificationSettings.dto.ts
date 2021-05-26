import {
	IsNotEmpty,
	IsBoolean
} from 'class-validator'

export abstract class UpdateNotificationSettingsDTO {
  @IsNotEmpty()
  @IsBoolean()
  abstract actionableOnly: boolean
}

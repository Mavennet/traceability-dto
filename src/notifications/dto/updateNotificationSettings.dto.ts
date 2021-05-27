import {
	IsNotEmpty,
	IsBoolean
} from 'class-validator'

export abstract class UpdateNotificationSettingsDTO {
  @IsNotEmpty()
  @IsBoolean()
  actionableOnly: boolean
}

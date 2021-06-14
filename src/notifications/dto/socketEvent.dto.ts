import {
  IsNotEmpty,
  IsString
} from 'class-validator'

export abstract class SocketEventDTO {
  @IsNotEmpty()
  @IsString()
  eventName: string
}

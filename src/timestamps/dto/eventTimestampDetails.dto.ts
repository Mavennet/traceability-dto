import { IsNotEmpty, IsString } from 'class-validator'

export class EventTimestampDetailsDTO {
  @IsNotEmpty()
  @IsString()
  hash: string

  @IsNotEmpty()
  @IsString()
  eventId: string
}


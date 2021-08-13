import { ArrayMinSize, IsArray, IsNotEmpty, ValidateNested } from 'class-validator'
import { TimestampDetailsDTO } from '.'
import { ApiProperty } from '@nestjs/swagger'

export class CreateTimestampsDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  timestampsDetails: TimestampDetailsDTO[]
}

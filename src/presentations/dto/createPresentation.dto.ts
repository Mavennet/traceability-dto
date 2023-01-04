import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { PresentationDTO as PresentationBase } from '../..'

class Presentation extends PresentationBase {
  @ApiProperty()
  @IsOptional()
  id: string
}

export class CreatePresentationDTO {
  @ValidateNested()
  @IsNotEmpty()
  @ApiProperty()
  presentation: Presentation
}

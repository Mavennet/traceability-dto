import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsOptional, ValidateNested } from 'class-validator'
import { Presentation } from './presentation.dto'
import { PresentationOptionsDTO } from './presentationOptions.dto'

export class IssuePresentationDTO {
  @ApiProperty()
  @ValidateNested()
  @IsOptional()
  @Type(() => Presentation)
  presentation: Presentation

  @ApiProperty()
  @ValidateNested()
  @IsOptional()
  @Type(() => PresentationOptionsDTO)
  options?: PresentationOptionsDTO
}

import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsOptional, ValidateNested } from 'class-validator'
import { Presentation } from './Presentation.dto'
import { PresentationOptionsDTO } from './PresentationOptions.dto'

export class IssuePresentationDTO {
  @ApiProperty()
  @ValidateNested()
  @IsOptional()
  @Type(() => Presentation)
  verifiablePresentation: Presentation

  @ApiProperty()
  @ValidateNested()
  @IsOptional()
  @Type(() => PresentationOptionsDTO)
  options?: PresentationOptionsDTO
}

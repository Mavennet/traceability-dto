import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator'
import { PresentationOptionsDTO } from './PresentationOptions.dto'
import { VerifiablePresentationDTO } from './VerifiablePresentation.dto'

export class VerifyPresentationDTO {
  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => VerifiablePresentationDTO)
  verifiablePresentation: VerifiablePresentationDTO

  @ApiProperty()
  @ValidateNested()
  @IsOptional()
  @Type(() => PresentationOptionsDTO)
  options?: PresentationOptionsDTO
}

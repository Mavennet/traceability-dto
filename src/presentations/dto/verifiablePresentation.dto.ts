import { IsNotEmpty, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class VerifiablePresentationDTO {
  @ApiProperty()
  @IsNotEmpty()
  verifiablePresentation: any

  @ApiProperty()
  @IsOptional()
  options?: any
}

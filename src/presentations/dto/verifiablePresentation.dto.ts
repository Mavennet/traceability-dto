import { IsNotEmpty, IsOptional, IsString, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { ProofDTO } from '../../general'

export class VerifiablePresentationDTO {
  @ApiProperty()
  @IsNotEmpty()
  verifiablePresentation: any

  @ApiPropertyOptional()
  @IsOptional()
  options?: any

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  id?: string

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested()
  @Type(() => ProofDTO)
  proof?: ProofDTO
}

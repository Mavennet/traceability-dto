import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsNotEmpty, ValidateNested, IsOptional } from 'class-validator'
import { Type } from 'class-transformer'
import { IssueCredentialOptionsDTO } from './issueCredentialOptions.dto'
import { CredentialDTO } from './credential.dto'

export class IssueCredentialDTO {
  @ApiProperty({ type: () => CredentialDTO })
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CredentialDTO)
  credential: CredentialDTO

  @ApiPropertyOptional({ type: () => IssueCredentialOptionsDTO })
  @ValidateNested()
  @IsOptional()
  @Type(() => IssueCredentialOptionsDTO)
  options?: IssueCredentialOptionsDTO
}

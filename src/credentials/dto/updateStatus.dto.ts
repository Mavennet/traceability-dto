import { Equals, IsString, IsNotEmpty, IsArray, ArrayMinSize, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

export class UpdateStatusDTO {
  @IsNotEmpty()
  @IsString()
  credentialId: string

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => credentialStatusType)
  credentialStatus: credentialStatusType[]
}

class credentialStatusType {
  @IsString()
  @Equals('RevocationList2020Status')
  type: string

  @IsNotEmpty()
  @IsString()
  status: string
}

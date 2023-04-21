import { ApiProperty } from '@nestjs/swagger'
import { Equals, IsString, IsNotEmpty, IsArray, ArrayMinSize, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'

class credentialStatusType {
  @ApiProperty({ example: 'RevocationList2020Status' })
  @IsString()
  @Equals('RevocationList2020Status')
  type: string

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  @IsString()
  status: string
}

export class UpdateStatusDTO {
  @ApiProperty({ example: '47f4df54-0832-4234-a538-7745b7096407' })
  @IsNotEmpty()
  @IsString()
  credentialId: string

  @ApiProperty({ isArray: true, type: () => credentialStatusType })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => credentialStatusType)
  credentialStatus: credentialStatusType[]
}

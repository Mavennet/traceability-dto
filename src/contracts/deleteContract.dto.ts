import { IsArray, ArrayMinSize } from 'class-validator'

export class DeleteContractsDTO {
  @IsArray()
  @ArrayMinSize(1)
  contractIds: number[]
}

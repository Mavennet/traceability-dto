import {
	IsArray,
	ArrayMinSize
} from 'class-validator'

export abstract class DeleteContractsDTO {
  @IsArray()
  @ArrayMinSize(1)
  contractIds: number[]
}

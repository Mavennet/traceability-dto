import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsNumberString,
  IsArray,
  ValidateNested,
  Matches
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  PlaceDTO,
  InspectionReportDTO
} from '../../general'
import { ProductDTO } from './product.dto'

export abstract class ProductCredentialSubjectDTO {
  abstract type: any[]

  @IsNotEmpty()
  @IsNumberString()
  HSCode: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  productionDate: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  facility: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  abstract product: ProductDTO

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InspectionReportDTO)
  inspection: InspectionReportDTO[]
}

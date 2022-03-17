import { Type } from 'class-transformer'
import { IsNotEmpty, IsNotEmptyObject, IsNumberString, IsString, Matches, ValidateNested } from 'class-validator'
import { InspectionReportDTO, PlaceDTO } from '../../general'
import { ProductDTO } from './product.dto'

export abstract class ProductCredentialSubjectDTO {
  abstract type: any[]

  @IsNotEmpty()
  @IsNumberString()
  abstract HSCode: string

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

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => InspectionReportDTO)
  inspection: InspectionReportDTO
}

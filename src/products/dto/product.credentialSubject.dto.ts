import {
  IsNotEmpty,
  IsNotEmptyObject,
  IsEnum,
  IsString,
  IsNumberString,
  IsArray,
  ValidateNested,
  Matches,
  Validate,
  ArrayNotEmpty
} from 'class-validator'
import { Type } from 'class-transformer'
import {
  PlaceDTO,
  ObservationDTO,
  JSON_TYPE
} from '../../general'
import { ProductDTO } from './product.dto'

export abstract class ProductCredentialSubjectDTO {
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  abstract type: JSON_TYPE[]

  @IsNotEmpty()
  @IsNumberString()
  abstract HSCode: string

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/)
  abstract productionDate: string

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => PlaceDTO)
  abstract facility: PlaceDTO

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ProductDTO)
  abstract product: ProductDTO

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ObservationDTO)
  abstract observation: ObservationDTO[]
}

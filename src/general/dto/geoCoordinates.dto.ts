import { IsNotEmpty, IsEnum, IsLatitude, IsLongitude, IsArray, ArrayNotEmpty, Validate } from 'class-validator'
import { JSON_TYPE } from '../constants'
import { ApiProperty } from '@nestjs/swagger'

export abstract class GeoCoordinatesDTO {
  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(JSON_TYPE, { each: true })
  @Validate((o) => o.type === [JSON_TYPE.GEO_COORDINATES])
  type: JSON_TYPE[]

  @ApiProperty({
    oneOf: [
      { type: 'string' },
      { type: 'number' }
    ]
  })
  @IsNotEmpty()
  @IsLatitude()
  latitude: string | number

  @ApiProperty({
    oneOf: [
      { type: 'string' },
      { type: 'number' }
    ]
  })
  @IsNotEmpty()
  @IsLongitude()
  longitude: string | number
}

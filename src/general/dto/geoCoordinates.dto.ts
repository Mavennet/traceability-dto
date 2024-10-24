import { ApiProperty } from '@nestjs/swagger'
import { Equals, IsLatitude, IsLongitude, IsNotEmpty, IsString } from 'class-validator'
import { JSON_TYPE } from '../constants'

export abstract class GeoCoordinatesDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Equals(JSON_TYPE.GEO_COORDINATES)
  type: JSON_TYPE.GEO_COORDINATES

  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'number' }]
  })
  @IsNotEmpty()
  @IsLatitude()
  latitude: string | number

  @ApiProperty({
    oneOf: [{ type: 'string' }, { type: 'number' }]
  })
  @IsNotEmpty()
  @IsLongitude()
  longitude: string | number
}

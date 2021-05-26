import {
  IsEnum,
  IsNotEmpty,
  IsString,
  ValidateIf
} from 'class-validator'
import { UPLOAD_TYPE } from '../constants'

export abstract class SaveS3DocumentsFolderPathDTO {
  @IsNotEmpty()
  @IsEnum(UPLOAD_TYPE)
  abstract uploadType: UPLOAD_TYPE

  @ValidateIf(o => o.uploadType === UPLOAD_TYPE.TRANSFER_REQUEST && !o.receiverS3DocumentsFolderPath)
  @IsNotEmpty()
  @IsString()
  abstract senderS3DocumentsFolderPath: string

  @ValidateIf(o => o.uploadType === UPLOAD_TYPE.TRANSFER_REQUEST && !o.senderS3DocumentsFolderPath)
  @IsNotEmpty()
  @IsString()
  abstract receiverS3DocumentsFolderPath: string

  @ValidateIf(o => o.uploadType === UPLOAD_TYPE.CONTRACT || o.uploadType === UPLOAD_TYPE.PRODUCT_EVENT)
  @IsNotEmpty()
  @IsString()
  abstract s3DocumentsFolderPath: string
}

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmptyObject, IsOptional, IsEnum, IsString, ValidateNested, IsArray, ArrayNotEmpty, Validate } from 'class-validator';
import { Type } from 'class-transformer';
import { JSON_TYPE, TRANSPORTATION_TYPE } from './constants';
import { PostalAddressDTO } from './postalAddress.dto';
export class ParcelDeliveryDTO {
}
__decorate([
    IsArray(),
    ArrayNotEmpty(),
    IsEnum(JSON_TYPE, { each: true }),
    Validate(o => o.type === [JSON_TYPE.PARCEL_DELIVERY]),
    __metadata("design:type", String)
], ParcelDeliveryDTO.prototype, "type", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => PostalAddressDTO),
    __metadata("design:type", PostalAddressDTO)
], ParcelDeliveryDTO.prototype, "originAddress", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => PostalAddressDTO),
    __metadata("design:type", PostalAddressDTO)
], ParcelDeliveryDTO.prototype, "deliveryAddress", void 0);
__decorate([
    IsOptional(),
    IsEnum(TRANSPORTATION_TYPE),
    __metadata("design:type", String)
], ParcelDeliveryDTO.prototype, "deliveryMethod", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], ParcelDeliveryDTO.prototype, "trackingNumber", void 0);

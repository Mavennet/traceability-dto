var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsOptional, IsEnum, IsString, IsArray, ArrayNotEmpty, Validate } from 'class-validator';
import { JSON_TYPE } from '../constants';
export class PostalAddressDTO {
}
__decorate([
    IsArray(),
    ArrayNotEmpty(),
    IsEnum(JSON_TYPE, { each: true }),
    Validate(o => o.type === [JSON_TYPE.POSTAL_ADDRESS]),
    __metadata("design:type", Array)
], PostalAddressDTO.prototype, "type", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "organizationName", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "streetAddress", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "addressLocality", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "addressRegion", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "postalCode", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "addressCountry", void 0);

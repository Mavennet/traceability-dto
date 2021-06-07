var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsNotEmptyObject, IsEnum, IsString, IsNumberString, IsArray, ValidateNested, Matches, ArrayNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { PlaceDTO, ObservationDTO, JSON_TYPE } from '../../general';
import { ProductDTO } from './product.dto';
export class ProductCredentialSubjectDTO {
}
__decorate([
    IsArray(),
    ArrayNotEmpty(),
    IsEnum(JSON_TYPE, { each: true }),
    __metadata("design:type", Array)
], ProductCredentialSubjectDTO.prototype, "type", void 0);
__decorate([
    IsNotEmpty(),
    IsNumberString(),
    __metadata("design:type", String)
], ProductCredentialSubjectDTO.prototype, "HSCode", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    __metadata("design:type", String)
], ProductCredentialSubjectDTO.prototype, "productionDate", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => PlaceDTO),
    __metadata("design:type", PlaceDTO)
], ProductCredentialSubjectDTO.prototype, "facility", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => ProductDTO),
    __metadata("design:type", ProductDTO)
], ProductCredentialSubjectDTO.prototype, "product", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => ObservationDTO),
    __metadata("design:type", Array)
], ProductCredentialSubjectDTO.prototype, "observation", void 0);

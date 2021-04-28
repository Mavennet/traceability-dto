var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsOptional, IsString, IsEnum, IsArray, ArrayNotEmpty, Validate } from 'class-validator';
import { JSON_TYPE, MECHANICAL_PROPERTY_TYPE, CHEMICAL_PROPERTY_TYPE, GAS_PROPERTY_TYPE } from './constants';
export class PropertyDTO {
}
__decorate([
    IsArray(),
    ArrayNotEmpty(),
    IsEnum(JSON_TYPE, { each: true }),
    Validate(o => o.type === [JSON_TYPE.MECHANICAL_PROPERTY] ||
        o.type === [JSON_TYPE.CHEMICAL_PROPERTY] ||
        o.type === [JSON_TYPE.GAS_PROPERTY]),
    __metadata("design:type", Array)
], PropertyDTO.prototype, "type", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], PropertyDTO.prototype, "identifier", void 0);
__decorate([
    IsNotEmpty(),
    IsEnum({
        ...MECHANICAL_PROPERTY_TYPE,
        ...CHEMICAL_PROPERTY_TYPE,
        ...GAS_PROPERTY_TYPE
    }),
    __metadata("design:type", String)
], PropertyDTO.prototype, "name", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], PropertyDTO.prototype, "description", void 0);

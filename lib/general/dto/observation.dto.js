"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPACT_ObservationDTO = exports.ObservationDTO = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const constants_1 = require("../constants");
const property_dto_1 = require("./property.dto");
const measurement_dto_1 = require("./measurement.dto");
const swagger_1 = require("@nestjs/swagger");
class ObservationDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayNotEmpty(),
    class_validator_1.IsEnum(constants_1.JSON_TYPE, { each: true }),
    class_validator_1.Validate(o => o.type === [constants_1.JSON_TYPE.OBSERVATION]),
    __metadata("design:type", Array)
], ObservationDTO.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => property_dto_1.PropertyDTO),
    __metadata("design:type", property_dto_1.PropertyDTO)
], ObservationDTO.prototype, "property", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmptyObject(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => measurement_dto_1.MeasurementDTO),
    __metadata("design:type", measurement_dto_1.MeasurementDTO)
], ObservationDTO.prototype, "measurement", void 0);
exports.ObservationDTO = ObservationDTO;
class COMPACT_ObservationDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsEnum(constants_1.PROPERTY_TYPE),
    __metadata("design:type", String)
], COMPACT_ObservationDTO.prototype, "type", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], COMPACT_ObservationDTO.prototype, "identifier", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], COMPACT_ObservationDTO.prototype, "name", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], COMPACT_ObservationDTO.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], COMPACT_ObservationDTO.prototype, "value", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], COMPACT_ObservationDTO.prototype, "unit", void 0);
exports.COMPACT_ObservationDTO = COMPACT_ObservationDTO;

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
exports.VerifiablePresentationDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const __1 = require("../..");
const isType_decorator_1 = require("../../general/decorators/isType.decorator");
class VerifiablePresentationDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    class_validator_1.IsUrl({}, { each: true }),
    class_validator_1.Validate((o) => o['@context'].includes('https://www.w3.org/2018/credentials/v1')),
    __metadata("design:type", Array)
], VerifiablePresentationDTO.prototype, "@context", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VerifiablePresentationDTO.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    isType_decorator_1.IsType(['string', 'array']),
    __metadata("design:type", Object)
], VerifiablePresentationDTO.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => __1.VerifiableCredentialDTO),
    __metadata("design:type", Array)
], VerifiablePresentationDTO.prototype, "verifiableCredential", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], VerifiablePresentationDTO.prototype, "holder", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => __1.ProofDTO),
    __metadata("design:type", __1.ProofDTO)
], VerifiablePresentationDTO.prototype, "proof", void 0);
exports.VerifiablePresentationDTO = VerifiablePresentationDTO;

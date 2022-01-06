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
exports.VerifiableCredentialDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const __1 = require("..");
const isType_decorator_1 = require("../../general/decorators/isType.decorator");
const dto_1 = require("../../general/dto");
class VerifiableCredentialDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    class_validator_1.IsUrl({}, { each: true }),
    class_validator_1.Validate((o) => o['@context'].includes('https://www.w3.org/2018/credentials/v1')),
    __metadata("design:type", Array)
], VerifiableCredentialDTO.prototype, "@context", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    isType_decorator_1.IsType(['string', 'array']),
    __metadata("design:type", Object)
], VerifiableCredentialDTO.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    isType_decorator_1.IsType(['string', 'object']),
    __metadata("design:type", Object)
], VerifiableCredentialDTO.prototype, "issuer", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "issuanceDate", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "expirationDate", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], VerifiableCredentialDTO.prototype, "credentialSubject", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ type: () => __1.CredentialStatusDTO }),
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => __1.CredentialStatusDTO),
    __metadata("design:type", __1.CredentialStatusDTO)
], VerifiableCredentialDTO.prototype, "credentialStatus", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => dto_1.ProofDTO),
    __metadata("design:type", dto_1.ProofDTO)
], VerifiableCredentialDTO.prototype, "proof", void 0);
exports.VerifiableCredentialDTO = VerifiableCredentialDTO;

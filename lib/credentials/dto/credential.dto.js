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
exports.CredentialDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const _1 = require("./");
class CredentialDTO {
}
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    class_validator_1.IsUrl({}, { each: true }),
    __metadata("design:type", Array)
], CredentialDTO.prototype, "@context", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsUrl({ require_tld: process.env.NODE_ENV !== 'development' }),
    __metadata("design:type", String)
], CredentialDTO.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1),
    __metadata("design:type", Array)
], CredentialDTO.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.Matches(/^did:/),
    __metadata("design:type", String)
], CredentialDTO.prototype, "issuer", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], CredentialDTO.prototype, "issuanceDate", void 0);
__decorate([
    swagger_1.ApiPropertyOptional(),
    class_validator_1.IsOptional(),
    class_validator_1.IsDateString(),
    __metadata("design:type", String)
], CredentialDTO.prototype, "expirationDate", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], CredentialDTO.prototype, "credentialSubject", void 0);
__decorate([
    swagger_1.ApiPropertyOptional({ type: () => _1.CredentialStatusDTO }),
    class_validator_1.IsOptional(),
    class_validator_1.ValidateNested(),
    class_transformer_1.Type(() => _1.CredentialStatusDTO),
    __metadata("design:type", _1.CredentialStatusDTO)
], CredentialDTO.prototype, "credentialStatus", void 0);
exports.CredentialDTO = CredentialDTO;

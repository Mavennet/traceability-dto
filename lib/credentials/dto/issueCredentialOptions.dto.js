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
exports.IssueCredentialOptionsDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const _1 = require(".");
class IssueCredentialOptionsDTO {
}
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '2023-04-01T00:00:00.000Z' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], IssueCredentialOptionsDTO.prototype, "created", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ type: () => _1.CredentialStatusDTO, example: { type: 'RevocationList2020Status' } }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => _1.CredentialStatusDTO),
    __metadata("design:type", _1.CredentialStatusDTO)
], IssueCredentialOptionsDTO.prototype, "credentialStatus", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ examples: ['Ed25519Signature2018', 'Ed25519Signature2020'], example: 'Ed25519Signature2018' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], IssueCredentialOptionsDTO.prototype, "type", void 0);
exports.IssueCredentialOptionsDTO = IssueCredentialOptionsDTO;

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
exports.IssueCredentialDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const credentialOptions_dto_1 = require("./credentialOptions.dto");
const credential_dto_1 = require("./credential.dto");
class IssueCredentialDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => credential_dto_1.CredentialDTO),
    __metadata("design:type", credential_dto_1.CredentialDTO)
], IssueCredentialDTO.prototype, "credential", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => credentialOptions_dto_1.CredentialOptionsDTO),
    __metadata("design:type", credentialOptions_dto_1.CredentialOptionsDTO)
], IssueCredentialDTO.prototype, "options", void 0);
exports.IssueCredentialDTO = IssueCredentialDTO;
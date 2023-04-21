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
exports.AddCredentialDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const general_1 = require("../../general");
const swagger_1 = require("@nestjs/swagger");
const credentialStatus_dto_1 = require("./credentialStatus.dto");
class AddCredentialDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'https://api.{{ENV}}.{{ORG}}.neoflow.energy/credentials/{{$randomUUID}}' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AddCredentialDTO.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({}, { each: true }),
    (0, class_validator_1.Validate)((o) => o['@context'].includes('https://www.w3.org/2018/credentials/v1')),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: ['https://www.w3.org/2018/credentials/v1', 'https://w3id.org/traceability/v1'] }),
    __metadata("design:type", Array)
], AddCredentialDTO.prototype, "@context", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, swagger_1.ApiProperty)({ example: ['VerifiableCredential'] }),
    __metadata("design:type", Array)
], AddCredentialDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: 'https://api.{{ENV}}.{{ORG}}.neoflow.energy' }),
    __metadata("design:type", String)
], AddCredentialDTO.prototype, "issuer", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => general_1.ProofDTO),
    (0, swagger_1.ApiProperty)({ type: () => general_1.ProofDTO }),
    __metadata("design:type", general_1.ProofDTO)
], AddCredentialDTO.prototype, "proof", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ example: { '@id': 'did:example:123456789abcdefghi', name: 'John Doe' } }),
    __metadata("design:type", Object)
], AddCredentialDTO.prototype, "credentialSubject", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ type: () => credentialStatus_dto_1.CredentialStatusDTO }),
    __metadata("design:type", credentialStatus_dto_1.CredentialStatusDTO)
], AddCredentialDTO.prototype, "credentialStatus", void 0);
exports.AddCredentialDTO = AddCredentialDTO;

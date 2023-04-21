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
exports.ProofDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const constants_1 = require("../constants");
class ProofDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ examples: ['Ed25519Signature2018', 'Ed25519Signature2020'], example: 'Ed25519Signature2018' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(constants_1.JSON_TYPE),
    __metadata("design:type", String)
], ProofDTO.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-04-01T00:00:00.000Z' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], ProofDTO.prototype, "created", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: constants_1.PROOF_PURPOSE_TYPE }),
    (0, class_validator_1.IsEnum)(constants_1.PROOF_PURPOSE_TYPE),
    __metadata("design:type", String)
], ProofDTO.prototype, "proofPurpose", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'z2hbRFvhrxiZ9bPdTt5S3qcmnoYXWjWdPXYUVwp5SjiLwNpvLTj9H4kuVNX8GmxVwQ5MQ3CvZGiuYqN7sZqQJWB3p' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProofDTO.prototype, "proofValue", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'eyJhbGciOiJFZERTQSIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..Kozxn1kKSydXBJAWedCg7ukztJAWrcB__R_lQjWTC6uDkNVdRJofQAs6pkD1WyHW8-hxufWmmhNaurcFDYe1Aw'
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProofDTO.prototype, "jws", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'did:key:z6MkmN2kyuYs2o7Sv9X43azrN1Ts6eXCeBHwJ6gNqkhvNXLT#z6MkmN2kyuYs2o7Sv9X43azrN1Ts6eXCeBHwJ6gNqkhvNXLT'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProofDTO.prototype, "verificationMethod", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '91a7e353-fd17-4eb9-a408-b60d61c4c410' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProofDTO.prototype, "challenge", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '{{org}}' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ProofDTO.prototype, "domain", void 0);
exports.ProofDTO = ProofDTO;

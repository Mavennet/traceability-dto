var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsEnum, IsString, IsDateString, Matches, Equals } from 'class-validator';
import { JSON_TYPE, PROOF_PURPOSE_TYPE } from '../constants';
export class VerifiableCredentialDTO {
}
__decorate([
    IsNotEmpty(),
    IsEnum(JSON_TYPE),
    Equals(JSON_TYPE.ED25519_SIGNATURE_2018),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "type", void 0);
__decorate([
    IsNotEmpty(),
    IsDateString(),
    __metadata("design:type", Date)
], VerifiableCredentialDTO.prototype, "created", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "jws", void 0);
__decorate([
    IsNotEmpty(),
    IsEnum(PROOF_PURPOSE_TYPE),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "proofPurpose", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    Matches(/^did:/),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "verificationMethod", void 0);

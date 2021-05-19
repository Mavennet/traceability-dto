var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmpty, IsUrl, IsArray, IsString, IsDateString, ArrayMinSize, ArrayMaxSize, ValidateNested, Validate, Matches } from 'class-validator';
import { Type } from 'class-transformer';
import { ProofDTO } from './proof.dto';
export class VerifiableCredentialDTO {
}
__decorate([
    IsArray(),
    ArrayMinSize(2),
    ArrayMaxSize(2),
    Validate(o => o['@context'].includes('https://www.w3.org/2018/credentials/v1') &&
        o['@context'].includes('https://schema.org/')),
    __metadata("design:type", Array)
], VerifiableCredentialDTO.prototype, "@context", void 0);
__decorate([
    IsNotEmpty(),
    IsUrl(),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "id", void 0);
__decorate([
    IsArray(),
    ArrayMinSize(2),
    ArrayMaxSize(2),
    Validate(o => o.type.includes('VerifiableCredential')),
    __metadata("design:type", Array)
], VerifiableCredentialDTO.prototype, "type", void 0);
__decorate([
    IsNotEmpty(),
    IsString(),
    Matches(/^did:/),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "issuer", void 0);
__decorate([
    IsNotEmpty(),
    IsDateString(),
    __metadata("design:type", Date)
], VerifiableCredentialDTO.prototype, "issuanceDate", void 0);
__decorate([
    IsNotEmpty(),
    ValidateNested(),
    Type(() => ProofDTO),
    __metadata("design:type", ProofDTO)
], VerifiableCredentialDTO.prototype, "proof", void 0);

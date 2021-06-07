var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsNotEmptyObject, IsEnum, ValidateNested, IsArray, ArrayNotEmpty, Validate } from 'class-validator';
import { Type } from 'class-transformer';
import { JSON_TYPE } from '../constants';
import { PropertyDTO } from './property.dto';
import { MeasurementDTO } from './measurement.dto';
export class ObservationDTO {
}
__decorate([
    IsArray(),
    ArrayNotEmpty(),
    IsEnum(JSON_TYPE, { each: true }),
    Validate(o => o.type === [JSON_TYPE.OBSERVATION]),
    __metadata("design:type", Array)
], ObservationDTO.prototype, "type", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => PropertyDTO),
    __metadata("design:type", PropertyDTO)
], ObservationDTO.prototype, "property", void 0);
__decorate([
    IsNotEmptyObject(),
    ValidateNested(),
    Type(() => MeasurementDTO),
    __metadata("design:type", MeasurementDTO)
], ObservationDTO.prototype, "measurement", void 0);

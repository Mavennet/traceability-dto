'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classValidator = require('class-validator');
var classTransformer = require('class-transformer');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

class AnalyticsDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], AnalyticsDTO.prototype, "currentMillis", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsUUID(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "productId", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsDateString(),
    __metadata("design:type", Date)
], AnalyticsDTO.prototype, "eventCreatedAt", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "eventType", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsDateString(),
    __metadata("design:type", Date)
], AnalyticsDTO.prototype, "productCreatedAt", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "productionMonth", void 0);
__decorate([
    classValidator.IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "aging", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "buyerName", void 0);
__decorate([
    classValidator.IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "qpInBond", void 0);
__decorate([
    classValidator.IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "entryId", void 0);
__decorate([
    classValidator.IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "ftzNo", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "origin", void 0);
__decorate([
    classValidator.IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "portOfEntry", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "streamType", void 0);
__decorate([
    classValidator.IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "startTransportMonth", void 0);
__decorate([
    classValidator.IsString(),
    __metadata("design:type", String)
], AnalyticsDTO.prototype, "refineryName", void 0);
__decorate([
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], AnalyticsDTO.prototype, "sulphur", void 0);
__decorate([
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], AnalyticsDTO.prototype, "density", void 0);
__decorate([
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], AnalyticsDTO.prototype, "tan", void 0);
__decorate([
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], AnalyticsDTO.prototype, "price", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], AnalyticsDTO.prototype, "volume", void 0);

class ValidationDTO {
}

class ConfirmContractDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], ConfirmContractDTO.prototype, "contractId", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], ConfirmContractDTO.prototype, "receiver", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsBoolean(),
    __metadata("design:type", Boolean)
], ConfirmContractDTO.prototype, "status", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], ConfirmContractDTO.prototype, "destination", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], ConfirmContractDTO.prototype, "comment", void 0);

class CreateContractDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^did:/),
    __metadata("design:type", String)
], CreateContractDTO.prototype, "sender", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^did:/),
    __metadata("design:type", String)
], CreateContractDTO.prototype, "receiver", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], CreateContractDTO.prototype, "destination", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    __metadata("design:type", String)
], CreateContractDTO.prototype, "startDate", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.Matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/),
    __metadata("design:type", String)
], CreateContractDTO.prototype, "endDate", void 0);

class DeleteContractsDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayMinSize(1),
    __metadata("design:type", Array)
], DeleteContractsDTO.prototype, "contractIds", void 0);

class UpdateContractDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], UpdateContractDTO.prototype, "contractId", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.Matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),
    __metadata("design:type", String)
], UpdateContractDTO.prototype, "startDate", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.Matches(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),
    __metadata("design:type", String)
], UpdateContractDTO.prototype, "endDate", void 0);

exports.UPLOAD_TYPE = void 0;
(function (UPLOAD_TYPE) {
    UPLOAD_TYPE["CONTRACT"] = "contract";
    UPLOAD_TYPE["PRODUCT_EVENT"] = "product_event";
    UPLOAD_TYPE["TRANSFER_REQUEST"] = "transfer_request";
})(exports.UPLOAD_TYPE || (exports.UPLOAD_TYPE = {}));

class SaveS3DocumentsFolderPathDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsEnum(exports.UPLOAD_TYPE),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "uploadType", void 0);
__decorate([
    classValidator.ValidateIf(o => o.uploadType === exports.UPLOAD_TYPE.TRANSFER_REQUEST && !o.receiverS3DocumentsFolderPath),
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "senderS3DocumentsFolderPath", void 0);
__decorate([
    classValidator.ValidateIf(o => o.uploadType === exports.UPLOAD_TYPE.TRANSFER_REQUEST && !o.senderS3DocumentsFolderPath),
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "receiverS3DocumentsFolderPath", void 0);
__decorate([
    classValidator.ValidateIf(o => o.uploadType === exports.UPLOAD_TYPE.CONTRACT || o.uploadType === exports.UPLOAD_TYPE.PRODUCT_EVENT),
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], SaveS3DocumentsFolderPathDTO.prototype, "s3DocumentsFolderPath", void 0);

class AddressDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], AddressDTO.prototype, "address", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsLatitude(),
    __metadata("design:type", String)
], AddressDTO.prototype, "latitude", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsLongitude(),
    __metadata("design:type", String)
], AddressDTO.prototype, "longitude", void 0);

exports.JSON_TYPE = void 0;
(function (JSON_TYPE) {
    JSON_TYPE["VERIFIABLE_CREDENTIAL"] = "VerifiableCredential";
    JSON_TYPE["CRUDE_OIL_PRODUCT"] = "CrudeOilProduct";
    JSON_TYPE["NATURAL_GAS_PRODUCT"] = "NaturalGasProduct";
    JSON_TYPE["PLACE"] = "Place";
    JSON_TYPE["GEO_COORDINATES"] = "GeoCoordinates";
    JSON_TYPE["POSTAL_ADDRESS"] = "PostalAddress";
    JSON_TYPE["PARCEL_DELIVERY"] = "ParcelDelivery";
    JSON_TYPE["PRODUCT"] = "Product";
    JSON_TYPE["ORGANIZATION"] = "Organization";
    JSON_TYPE["OBSERVATION"] = "Observation";
    JSON_TYPE["MEASURED_VALUE"] = "MeasuredValue";
    JSON_TYPE["QUANTITATIVE_VALUE"] = "QuantitativeValue";
    JSON_TYPE["MECHANICAL_PROPERTY"] = "MechanicalProperty";
    JSON_TYPE["CHEMICAL_PROPERTY"] = "ChemicalProperty";
    JSON_TYPE["GAS_PROPERTY"] = "GasProperty";
    JSON_TYPE["INBOND"] = "Inbond";
    JSON_TYPE["BILL_OF_LADING"] = "BillOfLading";
    JSON_TYPE["OG_BILL_OF_LADING"] = "OGBillOfLading";
    JSON_TYPE["ED25519_SIGNATURE_2018"] = "Ed25519Signature2018";
    JSON_TYPE["QP_IN_BOND_EVENT_CREDENTIAL"] = "QPInBondEventCredential";
})(exports.JSON_TYPE || (exports.JSON_TYPE = {}));
exports.MECHANICAL_PROPERTY_TYPE = void 0;
(function (MECHANICAL_PROPERTY_TYPE) {
    MECHANICAL_PROPERTY_TYPE["API_GRAVITY"] = "apiGravity";
    MECHANICAL_PROPERTY_TYPE["VISCOSITY_AT_10C"] = "viscosityAt10C";
    MECHANICAL_PROPERTY_TYPE["VISCOSITY_AT_20C"] = "viscosityAt20C";
    MECHANICAL_PROPERTY_TYPE["VISCOSITY_AT_30C"] = "viscosityAt30C";
    MECHANICAL_PROPERTY_TYPE["VISCOSITY_AT_40C"] = "viscosityAt40C";
    MECHANICAL_PROPERTY_TYPE["VISCOSITY_AT_45C"] = "viscosityAt45C";
    MECHANICAL_PROPERTY_TYPE["POUR_POINT"] = "pourPoint";
    MECHANICAL_PROPERTY_TYPE["FLASH_POINT"] = "flashPoint";
    MECHANICAL_PROPERTY_TYPE["VAPOUR_PRESSURE"] = "vapourPressure";
    MECHANICAL_PROPERTY_TYPE["DENSITY"] = "density";
    MECHANICAL_PROPERTY_TYPE["NAPHTHA"] = "naphtha";
    MECHANICAL_PROPERTY_TYPE["DISTILLATE_AT_350_TO_650F"] = "distillateAt350To650F";
    MECHANICAL_PROPERTY_TYPE["GAS_OIL_AT_650_TO_980F"] = "gasOilAt650To980F";
    MECHANICAL_PROPERTY_TYPE["RESID_AT_980F"] = "residAt980F";
    MECHANICAL_PROPERTY_TYPE["DEEMED_BUTANE"] = "deemedButane";
    MECHANICAL_PROPERTY_TYPE["TAN"] = "tan";
    MECHANICAL_PROPERTY_TYPE["RON"] = "ron";
    MECHANICAL_PROPERTY_TYPE["MON"] = "mon";
    MECHANICAL_PROPERTY_TYPE["BOILING_POINT"] = "boilingPoint";
    MECHANICAL_PROPERTY_TYPE["FREEZING_POINT"] = "freezingPoint";
    MECHANICAL_PROPERTY_TYPE["CRITICAL_TEMPERATURE"] = "criticalTemperature";
    MECHANICAL_PROPERTY_TYPE["CRITICAL_PRESSURE"] = "criticalPressure";
    MECHANICAL_PROPERTY_TYPE["AUTO_IGNITION_TEMPERATURE_IN_AIR_AT_1_ATM"] = "autoIgnitionTemperatureInAirAt1atm";
    MECHANICAL_PROPERTY_TYPE["SOLUBILITY_IN_TRICHLOROETHYLENE"] = "solubilityInTrichloroethylene";
    MECHANICAL_PROPERTY_TYPE["PENETRATION_AT_25C_100G_5SEC"] = "penetrationAt25C100g5sec";
    MECHANICAL_PROPERTY_TYPE["SOFTENING_POINT"] = "softeningPoint";
    MECHANICAL_PROPERTY_TYPE["DUCTILITY_AT_25C"] = "ductilityAt25C";
    MECHANICAL_PROPERTY_TYPE["OLEFIN"] = "olefin";
    MECHANICAL_PROPERTY_TYPE["COLOR"] = "color";
    MECHANICAL_PROPERTY_TYPE["ODOR"] = "odor";
    MECHANICAL_PROPERTY_TYPE["GROSS_CALORIFIC_VALUE_AT_15C"] = "grossCalorificValueAt15C";
    MECHANICAL_PROPERTY_TYPE["NET_CALORIFIC_VALUE_AT_15C"] = "netCalorificValueAt15C";
    MECHANICAL_PROPERTY_TYPE["AIR_REQUIRED_FOR_COMBUSTION"] = "airRequiredForCombustion";
    MECHANICAL_PROPERTY_TYPE["COPPER_CORROSION_AT_38C_FOR_1HOUR"] = "copperCorrosionAt38CFor1Hour";
    MECHANICAL_PROPERTY_TYPE["ROCKWELL_HARDNESS_TEST_SCALE_A"] = "Rockwell Hardness Test (Scale A)";
    MECHANICAL_PROPERTY_TYPE["BERYLLIUM"] = "Beryllium";
    MECHANICAL_PROPERTY_TYPE["CHARPY_IMPACT_STRENGTH_TEST"] = "Charpy Impact Strength Test";
    MECHANICAL_PROPERTY_TYPE["IZOD_IMPACT_STRENGTH_TEST"] = "Izod Impact Strength Test";
})(exports.MECHANICAL_PROPERTY_TYPE || (exports.MECHANICAL_PROPERTY_TYPE = {}));
exports.CHEMICAL_PROPERTY_TYPE = void 0;
(function (CHEMICAL_PROPERTY_TYPE) {
    CHEMICAL_PROPERTY_TYPE["MICRO_CARBON_RESIDUE"] = "microCarbonResidue";
    CHEMICAL_PROPERTY_TYPE["AROMATICS_TOTAL_BTEX"] = "aromaticsTotalBTEX";
    CHEMICAL_PROPERTY_TYPE["SEDIMENT_AND_WATER"] = "sedimentAndWater";
    CHEMICAL_PROPERTY_TYPE["LIQUID_PHASE_H2S"] = "liquidPhaseH2S";
    CHEMICAL_PROPERTY_TYPE["MERCURY"] = "mercury";
    CHEMICAL_PROPERTY_TYPE["OXYGENATES"] = "oxygenates";
    CHEMICAL_PROPERTY_TYPE["FILTERABLE_SOLIDS"] = "filterableSolids";
    CHEMICAL_PROPERTY_TYPE["PHOSPHOROUS_VOLATILE"] = "phosphorousVolatile";
    CHEMICAL_PROPERTY_TYPE["MEDIUM_CHAIN_TRIGLYCERIDES"] = "mediumChainTriglycerides";
    CHEMICAL_PROPERTY_TYPE["BENZENE"] = "benzene";
    CHEMICAL_PROPERTY_TYPE["PARTICULATES"] = "particulates";
    CHEMICAL_PROPERTY_TYPE["ORGANIC_CHLORIDES"] = "organicChlorides";
    CHEMICAL_PROPERTY_TYPE["NICKEL"] = "nickel";
    CHEMICAL_PROPERTY_TYPE["VANADIUM"] = "vanadium";
    CHEMICAL_PROPERTY_TYPE["WATER"] = "water";
    CHEMICAL_PROPERTY_TYPE["MOLECULAR_WEIGHT"] = "molecularWeight";
    CHEMICAL_PROPERTY_TYPE["SULPHUR"] = "sulphur";
    CHEMICAL_PROPERTY_TYPE["NAPHTHENES"] = "naphthenes";
    CHEMICAL_PROPERTY_TYPE["CHLORIDE"] = "chloride";
    CHEMICAL_PROPERTY_TYPE["ARSENIC"] = "arsenic";
    CHEMICAL_PROPERTY_TYPE["LEAD"] = "lead";
    CHEMICAL_PROPERTY_TYPE["ETHENE"] = "ethene";
    CHEMICAL_PROPERTY_TYPE["PROPANE"] = "propane";
    CHEMICAL_PROPERTY_TYPE["ISO_BUTANE"] = "isoButane";
    CHEMICAL_PROPERTY_TYPE["N_BUTANE"] = "nButane";
    CHEMICAL_PROPERTY_TYPE["HYDROCARBONS_HEAVIER"] = "hydrocarbonsHeavier";
    CHEMICAL_PROPERTY_TYPE["UNSATURATED_HYDROCARBONS"] = "unsaturatedHydrocarbons";
    CHEMICAL_PROPERTY_TYPE["CESIUM"] = "Cesium";
})(exports.CHEMICAL_PROPERTY_TYPE || (exports.CHEMICAL_PROPERTY_TYPE = {}));
exports.GAS_PROPERTY_TYPE = void 0;
(function (GAS_PROPERTY_TYPE) {
    GAS_PROPERTY_TYPE["WATER_CONTENT"] = "waterContent";
    GAS_PROPERTY_TYPE["HYDROGEN_SULFIDE_CONTENT"] = "hydrogenSulfideContent";
    GAS_PROPERTY_TYPE["GROSS_HEATING_VALUE"] = "grossHeatingValue";
    GAS_PROPERTY_TYPE["HYDROCARBON_DEW_POINT"] = "hydrocarbonDewPoint";
    GAS_PROPERTY_TYPE["MERCAPTAN_CONTENT"] = "mercaptanContent";
    GAS_PROPERTY_TYPE["TOTAL_SULFUR_CONTENT"] = "totalSulfurContent";
    GAS_PROPERTY_TYPE["CARBON_DIOXIDE_CONTENT"] = "carbonDioxideContent";
    GAS_PROPERTY_TYPE["OXYGEN_CONTENT"] = "oxygenContent";
    GAS_PROPERTY_TYPE["NITROGEN_CONTENT"] = "nitrogenContent";
    GAS_PROPERTY_TYPE["TOTAL_INERTS_CONTENT"] = "totalInertsContent";
    GAS_PROPERTY_TYPE["SAND_DUST_GUMS_AND_FREE_LIQUID"] = "sandDustGumsAndFreeLiquid";
    GAS_PROPERTY_TYPE["TEMPERATURE"] = "temperature";
    GAS_PROPERTY_TYPE["PRESSURE"] = "pressure";
})(exports.GAS_PROPERTY_TYPE || (exports.GAS_PROPERTY_TYPE = {}));
exports.TRANSPORTATION_TYPE = void 0;
(function (TRANSPORTATION_TYPE) {
    TRANSPORTATION_TYPE["PIPELINE"] = "Pipeline";
    TRANSPORTATION_TYPE["TRUCK"] = "Truck";
    TRANSPORTATION_TYPE["RAIL"] = "Rail";
})(exports.TRANSPORTATION_TYPE || (exports.TRANSPORTATION_TYPE = {}));
exports.PROOF_PURPOSE_TYPE = void 0;
(function (PROOF_PURPOSE_TYPE) {
    PROOF_PURPOSE_TYPE["ASSERTION_METHOD"] = "assertionMethod";
    PROOF_PURPOSE_TYPE["AUTHENTICATION"] = "authentication";
})(exports.PROOF_PURPOSE_TYPE || (exports.PROOF_PURPOSE_TYPE = {}));

class GeoCoordinatesDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.GEO_COORDINATES]),
    __metadata("design:type", Array)
], GeoCoordinatesDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsLatitude(),
    __metadata("design:type", String)
], GeoCoordinatesDTO.prototype, "latitude", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsLongitude(),
    __metadata("design:type", String)
], GeoCoordinatesDTO.prototype, "longitude", void 0);

class IssuerDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayMinSize(1),
    classValidator.ValidateNested({ each: true }),
    __metadata("design:type", Array)
], IssuerDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^did:/),
    __metadata("design:type", String)
], IssuerDTO.prototype, "id", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsUrl(),
    __metadata("design:type", String)
], IssuerDTO.prototype, "url", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], IssuerDTO.prototype, "name", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], IssuerDTO.prototype, "description", void 0);

class MeasurementDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.MEASURED_VALUE] || o.type === [exports.JSON_TYPE.QUANTITATIVE_VALUE]),
    __metadata("design:type", Array)
], MeasurementDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], MeasurementDTO.prototype, "unitCode", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], MeasurementDTO.prototype, "value", void 0);

class PropertyDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.MECHANICAL_PROPERTY] ||
        o.type === [exports.JSON_TYPE.CHEMICAL_PROPERTY] ||
        o.type === [exports.JSON_TYPE.GAS_PROPERTY]),
    __metadata("design:type", Array)
], PropertyDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PropertyDTO.prototype, "identifier", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsEnum({
        ...exports.MECHANICAL_PROPERTY_TYPE,
        ...exports.CHEMICAL_PROPERTY_TYPE,
        ...exports.GAS_PROPERTY_TYPE
    }),
    __metadata("design:type", String)
], PropertyDTO.prototype, "name", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PropertyDTO.prototype, "description", void 0);

class ObservationDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.OBSERVATION]),
    __metadata("design:type", Array)
], ObservationDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => PropertyDTO),
    __metadata("design:type", PropertyDTO)
], ObservationDTO.prototype, "property", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => MeasurementDTO),
    __metadata("design:type", MeasurementDTO)
], ObservationDTO.prototype, "measurement", void 0);

class PostalAddressDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.POSTAL_ADDRESS]),
    __metadata("design:type", Array)
], PostalAddressDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "organizationName", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "streetAddress", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "addressLocality", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "addressRegion", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "postalCode", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PostalAddressDTO.prototype, "addressCountry", void 0);

class OrganizationDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.ORGANIZATION]),
    __metadata("design:type", Array)
], OrganizationDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], OrganizationDTO.prototype, "name", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], OrganizationDTO.prototype, "description", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => PostalAddressDTO),
    __metadata("design:type", PostalAddressDTO)
], OrganizationDTO.prototype, "address", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsEmail(),
    __metadata("design:type", String)
], OrganizationDTO.prototype, "email", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], OrganizationDTO.prototype, "phoneNumber", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], OrganizationDTO.prototype, "faxNumber", void 0);

class ParcelDeliveryDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.PARCEL_DELIVERY]),
    __metadata("design:type", String)
], ParcelDeliveryDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => PostalAddressDTO),
    __metadata("design:type", PostalAddressDTO)
], ParcelDeliveryDTO.prototype, "originAddress", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => PostalAddressDTO),
    __metadata("design:type", PostalAddressDTO)
], ParcelDeliveryDTO.prototype, "deliveryAddress", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsEnum(exports.TRANSPORTATION_TYPE),
    __metadata("design:type", String)
], ParcelDeliveryDTO.prototype, "deliveryMethod", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], ParcelDeliveryDTO.prototype, "trackingNumber", void 0);

class PlaceDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ArrayNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE, { each: true }),
    classValidator.Validate(o => o.type === [exports.JSON_TYPE.PLACE]),
    __metadata("design:type", Array)
], PlaceDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsString(),
    __metadata("design:type", String)
], PlaceDTO.prototype, "globalLocationNumber", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => GeoCoordinatesDTO),
    __metadata("design:type", GeoCoordinatesDTO)
], PlaceDTO.prototype, "geo", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    classValidator.ValidateNested(),
    classTransformer.Type(() => PostalAddressDTO),
    __metadata("design:type", PostalAddressDTO)
], PlaceDTO.prototype, "address", void 0);

class VerifiableCredentialDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsEnum(exports.JSON_TYPE),
    classValidator.Equals(exports.JSON_TYPE.ED25519_SIGNATURE_2018),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "type", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsDateString(),
    __metadata("design:type", Date)
], VerifiableCredentialDTO.prototype, "created", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "jws", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsEnum(exports.PROOF_PURPOSE_TYPE),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "proofPurpose", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^did:/),
    __metadata("design:type", String)
], VerifiableCredentialDTO.prototype, "verificationMethod", void 0);

exports.NOTIFICATION_TYPE = void 0;
(function (NOTIFICATION_TYPE) {
    NOTIFICATION_TYPE["CONTRACT_CREATED"] = "CONTRACT_CREATED";
    NOTIFICATION_TYPE["CONTRACT_ACCEPTED"] = "CONTRACT_ACCEPTED";
    NOTIFICATION_TYPE["CONTRACT_REJECTED"] = "CONTRACT_REJECTED";
    NOTIFICATION_TYPE["CONTRACT_UPDATED"] = "CONTRACT_UPDATED";
    NOTIFICATION_TYPE["TRANSPORT_STARTED"] = "TRANSPORT_STARTED";
    NOTIFICATION_TYPE["TRANSPORT_FINISHED"] = "TRANSPORT_FINISHED";
    NOTIFICATION_TYPE["STORAGE_STARTED"] = "STORAGE_STARTED";
    NOTIFICATION_TYPE["STORAGE_FINISHED"] = "STORAGE_FINISHED";
    NOTIFICATION_TYPE["PRODUCT_SHARED"] = "PRODUCT_SHARED";
    NOTIFICATION_TYPE["PRODUCT_UNSHARED"] = "PRODUCT_UNSHARED";
    NOTIFICATION_TYPE["TRANSFER_OWNERSHIP_CREATED"] = "TRANSFER_OWNERSHIP_CREATED";
    NOTIFICATION_TYPE["TRANSFER_OWNERSHIP_ACCEPTED"] = "TRANSFER_OWNERSHIP_ACCEPTED";
    NOTIFICATION_TYPE["TRANSFER_OWNERSHIP_CHANGE_REQUESTED"] = "TRANSFER_OWNERSHIP_CHANGE_REQUESTED";
    NOTIFICATION_TYPE["TRANSFER_OWNERSHIP_FINISHED"] = "TRANSFER_OWNERSHIP_FINISHED";
    NOTIFICATION_TYPE["TRANSFER_CUSTODY_CREATED"] = "TRANSFER_CUSTODY_CREATED";
    NOTIFICATION_TYPE["TRANSFER_CUSTODY_ACCEPTED"] = "TRANSFER_CUSTODY_ACCEPTED";
    NOTIFICATION_TYPE["TRANSFER_CUSTODY_CHANGE_REQUESTED"] = "TRANSFER_CUSTODY_CHANGE_REQUESTED";
    NOTIFICATION_TYPE["TRANSFER_CUSTODY_FINISHED"] = "TRANSFER_CUSTODY_FINISHED";
    NOTIFICATION_TYPE["TRANSFER_OWNERSHIP_UPDATED"] = "TRANSFER_OWNERSHIP_UPDATED";
    NOTIFICATION_TYPE["TRANSFER_CUSTODY_UPDATED"] = "TRANSFER_CUSTODY_UPDATED";
})(exports.NOTIFICATION_TYPE || (exports.NOTIFICATION_TYPE = {}));
const ActionableNotifications = new Map([
    [exports.NOTIFICATION_TYPE.CONTRACT_CREATED, true],
    [exports.NOTIFICATION_TYPE.CONTRACT_ACCEPTED, false],
    [exports.NOTIFICATION_TYPE.TRANSPORT_STARTED, false],
    [exports.NOTIFICATION_TYPE.TRANSPORT_FINISHED, false],
    [exports.NOTIFICATION_TYPE.STORAGE_STARTED, false],
    [exports.NOTIFICATION_TYPE.STORAGE_FINISHED, false],
    [exports.NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_CREATED, true],
    [exports.NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_ACCEPTED, true],
    [exports.NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_CHANGE_REQUESTED, true],
    [exports.NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_FINISHED, false],
    [exports.NOTIFICATION_TYPE.TRANSFER_CUSTODY_CREATED, true],
    [exports.NOTIFICATION_TYPE.TRANSFER_CUSTODY_ACCEPTED, true],
    [exports.NOTIFICATION_TYPE.TRANSFER_CUSTODY_CHANGE_REQUESTED, true],
    [exports.NOTIFICATION_TYPE.TRANSFER_CUSTODY_FINISHED, false],
    [exports.NOTIFICATION_TYPE.TRANSFER_OWNERSHIP_UPDATED, true],
    [exports.NOTIFICATION_TYPE.TRANSFER_CUSTODY_UPDATED, true]
]);
exports.SOCKET_EVENT_NAME = void 0;
(function (SOCKET_EVENT_NAME) {
    SOCKET_EVENT_NAME["CONTRACTS_CHANGED"] = "CONTRACTS_CHANGED";
    SOCKET_EVENT_NAME["NOTIFICATIONS_CHANGED"] = "NOTIFICATIONS_CHANGED";
    SOCKET_EVENT_NAME["PRODUCTS_CHANGED"] = "PRODUCTS_CHANGED";
    SOCKET_EVENT_NAME["ACTIONS_CHANGED"] = "ACTIONS_CHANGED";
    SOCKET_EVENT_NAME["TRANSPORT_CHANGED"] = "TRANSPORT_CHANGED";
    SOCKET_EVENT_NAME["STORAGE_CHANGED"] = "STORAGE_CHANGED";
})(exports.SOCKET_EVENT_NAME || (exports.SOCKET_EVENT_NAME = {}));

class NotificationDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], NotificationDTO.prototype, "notificationId", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsEnum(exports.NOTIFICATION_TYPE),
    __metadata("design:type", String)
], NotificationDTO.prototype, "notificationType", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsUUID(),
    __metadata("design:type", String)
], NotificationDTO.prototype, "productId", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], NotificationDTO.prototype, "contractId", void 0);
__decorate([
    classValidator.IsOptional(),
    classValidator.IsNumber(),
    __metadata("design:type", Number)
], NotificationDTO.prototype, "transferRequestId", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^did:/),
    __metadata("design:type", String)
], NotificationDTO.prototype, "sender", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], NotificationDTO.prototype, "senderName", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsBoolean(),
    __metadata("design:type", Boolean)
], NotificationDTO.prototype, "read", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsDateString(),
    __metadata("design:type", Date)
], NotificationDTO.prototype, "createdAt", void 0);

class CategorizedNotificationsDTO {
}
__decorate([
    classValidator.IsArray(),
    classValidator.ValidateNested({ each: true }),
    classTransformer.Type(() => NotificationDTO),
    __metadata("design:type", Array)
], CategorizedNotificationsDTO.prototype, "new", void 0);
__decorate([
    classValidator.IsArray(),
    classValidator.ValidateNested({ each: true }),
    classTransformer.Type(() => NotificationDTO),
    __metadata("design:type", Array)
], CategorizedNotificationsDTO.prototype, "previous", void 0);

class ReadNotificationDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsNumberString(),
    __metadata("design:type", Number)
], ReadNotificationDTO.prototype, "notificationId", void 0);

class SocketEventDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], SocketEventDTO.prototype, "eventName", void 0);

class UpdateNotificationSettingsDTO {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsBoolean(),
    __metadata("design:type", Boolean)
], UpdateNotificationSettingsDTO.prototype, "actionableOnly", void 0);

exports.ORGANIZATION_ROLE = void 0;
(function (ORGANIZATION_ROLE) {
    ORGANIZATION_ROLE["CLIENT"] = "client";
    ORGANIZATION_ROLE["AGENCY"] = "agency";
    ORGANIZATION_ROLE["BROKER"] = "broker";
})(exports.ORGANIZATION_ROLE || (exports.ORGANIZATION_ROLE = {}));

class CreateOrganizationDto {
}
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "name", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsEmail(),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "email", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "address", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsPhoneNumber('CA'),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "phone", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "mid", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "cbpImporterRecord", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsEnum(exports.ORGANIZATION_ROLE),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "role", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    classValidator.Matches(/^did:/),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "did", void 0);
__decorate([
    classValidator.IsNotEmpty(),
    classValidator.IsString(),
    __metadata("design:type", String)
], CreateOrganizationDto.prototype, "backendLink", void 0);
__decorate([
    classValidator.IsNotEmptyObject(),
    __metadata("design:type", Map)
], CreateOrganizationDto.prototype, "uwi", void 0);

exports.ActionableNotifications = ActionableNotifications;
exports.AddressDTO = AddressDTO;
exports.AnalyticsDTO = AnalyticsDTO;
exports.CategorizedNotificationsDTO = CategorizedNotificationsDTO;
exports.ConfirmContractDTO = ConfirmContractDTO;
exports.CreateContractDTO = CreateContractDTO;
exports.CreateOrganizationDto = CreateOrganizationDto;
exports.DeleteContractsDTO = DeleteContractsDTO;
exports.GeoCoordinatesDTO = GeoCoordinatesDTO;
exports.IssuerDTO = IssuerDTO;
exports.MeasurementDTO = MeasurementDTO;
exports.NotificationDTO = NotificationDTO;
exports.ObservationDTO = ObservationDTO;
exports.OrganizationDTO = OrganizationDTO;
exports.ParcelDeliveryDTO = ParcelDeliveryDTO;
exports.PlaceDTO = PlaceDTO;
exports.PostalAddressDTO = PostalAddressDTO;
exports.PropertyDTO = PropertyDTO;
exports.ReadNotificationDTO = ReadNotificationDTO;
exports.SaveS3DocumentsFolderPathDTO = SaveS3DocumentsFolderPathDTO;
exports.SocketEventDTO = SocketEventDTO;
exports.UpdateContractDTO = UpdateContractDTO;
exports.UpdateNotificationSettingsDTO = UpdateNotificationSettingsDTO;
exports.ValidationDTO = ValidationDTO;
exports.VerifiableCredentialDTO = VerifiableCredentialDTO;

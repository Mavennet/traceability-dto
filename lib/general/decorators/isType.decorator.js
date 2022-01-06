"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsType = void 0;
const class_validator_1 = require("class-validator");
const IS_TYPE = 'isType';
function IsType(types, validationOptions) {
    return class_validator_1.ValidateBy({
        name: IS_TYPE,
        validator: {
            validate: (value) => types.includes(typeof value),
            defaultMessage: ({ value }) => `Current type ${typeof value} is not in [${types.join(', ')}]`
        }
    }, validationOptions);
}
exports.IsType = IsType;

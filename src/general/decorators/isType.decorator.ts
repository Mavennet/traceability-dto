import { ValidateBy, ValidationArguments, ValidationOptions } from 'class-validator'

// const typeValidator = {
//   string: function (value: any, args: ValidationArguments) {
//     const validator = new Validator()

//     return validator.isString(value)
//   },
//   int: function (value: any, args: ValidationArguments) {
//     const validator = new Validator()
//     return validator.isInt(value)
//   },
//   stringArray: function (value: any, args: ValidationArguments) {
//     const validator = new Validator()
//     return validator.isArray(value) && value.every((item) => validator.isString(item))
//   },
//   array: function (value: any, args: ValidationArguments) {
//     const validator = new Validator()
//     return validator.isArray(value)
//   }
//   // Add more here
// }

const IS_TYPE = 'isType'

export function IsType(
  types: Array<'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' | 'array'>,
  validationOptions?: ValidationOptions
): PropertyDecorator {
  return ValidateBy(
    {
      name: IS_TYPE,
      validator: {
        validate: (value: unknown) => types.includes(typeof value),
        defaultMessage: ({ value }: ValidationArguments) =>
          `Current type ${typeof value} is not in [${types.join(', ')}]`
      }
    },
    validationOptions
  )
}

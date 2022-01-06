import { ValidationOptions } from 'class-validator';
export declare function IsType(types: Array<'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function' | 'array'>, validationOptions?: ValidationOptions): PropertyDecorator;

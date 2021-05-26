export abstract class ValidationDTO {
  abstract readonly email?: string

  abstract readonly password?: string

  abstract readonly apiKey?: string

  abstract readonly context: 'https://metaltrail.com/metal-vocab/#'

  abstract '@type': 'loginValidationAction'
}

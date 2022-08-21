import * as core from '@actions/core'
import Ajv from 'ajv'

const ajv = new Ajv()

const schema = {
  type: 'object',
  properties: {
    foo: {type: 'integer'},
    bar: {type: 'string'}
  },
  required: ['foo'],
  additionalProperties: false
}

const data = {
  foo: 1,
  bar: 'abc'
}

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) core.info(ajv.errorsText(validate.errors))

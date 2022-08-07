/* eslint-disable @typescript-eslint/no-var-requires,import/no-extraneous-dependencies */
const { assert } = require('console')

const { getName } = require('./func_export')

assert(getName('Paul') === 'Paul')
assert(getName('Jacky') === 'Not found')

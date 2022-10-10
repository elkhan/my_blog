// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const { expect } = require('chai')

const func = (...params) => params

const result = func(1, 2, 3, 4, 4)

expect(result).to.deep.equal([1, 2, 3, 4, 4])

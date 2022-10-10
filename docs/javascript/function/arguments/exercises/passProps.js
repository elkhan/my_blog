// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const { expect } = require('chai')

const parentFunc = (firstName, lastName) => {
  const fullName = `${firstName} ${lastName}`
  const childFunc = arg => arg.toUpperCase()
  return childFunc(fullName)
}

expect(parentFunc('John', 'Doe')).to.eq('JOHN DOE')

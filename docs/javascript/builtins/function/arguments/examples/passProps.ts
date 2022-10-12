import { assert } from 'console'
const parentFunc = (firstName: string, lastName: string) => {
  const fullName = `${firstName} ${lastName}`
  const childFunc = (arg: string) => arg.toUpperCase()
  return childFunc(fullName)
}

assert(parentFunc('John', 'Doe') === 'JOHN DOE')

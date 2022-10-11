export const person = {
  name: 'Joe',
  age: 45,
  getName () {
    return this.name
  },
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
const module = {
  x: 42,
  getX() {
    return this.x
  },
}

const unboundGetX = module.getX
console.log(unboundGetX()) // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module)
console.log(boundGetX())
// expected output: 42

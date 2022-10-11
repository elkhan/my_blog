// https://stackoverflow.com/questions/39156315/function-property-vs-method
const obj1 = {
  value: 1,
  square() {
    return 'square'
  },
}

const obj2 = {
  value: 2,
  // can be set to readonly, as example
  square: () => 'square',
}

console.log(obj1.square())
console.log(obj2.square())

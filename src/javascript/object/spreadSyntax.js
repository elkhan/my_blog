// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

const person1 = {
  name: 'Jake',
  age: 32,
}
const person2 = {
  name: 'Jane',
  age: 30,
}

const person3 = { ...person1 }
console.log(person3) // { name: 'Jake', age: 32 }

const person4 = { ...person1, ...person2 }
console.log(person4) // { name: 'Jane', age: 30 }
const person5 = { ...person1, ...person2}
console.log(person5) // { name: 'Jane', age: 30 }
// https://2ality.com/2016/10/rest-spread-properties.html#spreading-objects-versus-object.assign()

let a = 'hello'
const b = a
a = 'hello world'
console.log(a)
console.log(b)
console.log(a === b)

const objA = {
  hello: 'world',
}
const objB = objA
objA.hello = 'hello world'

console.log(objA)
console.log(objB)
console.log(objA === objB)

// eslint-disable-next-line no-new-wrappers
let hello = String('world')
console.log(hello)
hello = String(hello)
console.log(hello)
hello = Object(hello)
console.log(hello)
console.log(hello.valueOf())
/*
world
world
[String: 'world']
world
 */

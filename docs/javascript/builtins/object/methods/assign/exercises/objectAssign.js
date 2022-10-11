const map1 = { a: 2, b: 5 }
let map2 = map1
map2 = Object.assign(this, { ...map1, c: 10 })
const map3 = map1
// let map4 = map1;
// map4 = Object.assign(map4, { ...map1, c: 10 });

/*
console.log(map1) // { a: 2, b: 5 }
console.log(map2) // { a: 2, b: 5, c: 10 }
console.log(map3) // { a: 2, b: 5 }
 */
// console.log(map4);

const objA = {
  name: 'John',
  age: 32,
}
const objB = {
  surname: 'Doe',
  age: 40,
}
const objC = { ...objA, ...objB}
console.log(objC)

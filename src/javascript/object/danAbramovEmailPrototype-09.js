const human = {
  teeth: 32,
}

const gwen = {
  __proto__: human,
  age: 19,
}
console.log(human.age) // undefined
console.log(gwen.age) // 19

console.log(human.teeth) // 32
console.log(gwen.teeth) // 32

console.log(human.tail) // undefined
console.log(gwen.tail) // undefined

//
const spider = {
  legs: 8,
}
const miles = {
  __proto__: spider,
}
const gwyneth = {
  __proto__: spider,
}
miles.legs = 2
spider.legs = gwyneth.legs * 2
console.log(gwyneth.legs) // 16
console.log(miles.legs) // 2

//
const goose = {
  location: 'sky',
}
const cheese = {
  __proto__: goose,
}
console.log(cheese === goose) // false
console.log(cheese.location) // sky
goose.location = 'ground'
console.log(cheese.location) // ground

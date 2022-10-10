function Foo(who) {
  this.me = who
}

Foo.prototype.identify = function() {
  return `I am ${this.me}`
}

const a1 = new Foo('a1')
const a2 = new Foo('a2')
a2.speak = function() {
  console.log(`Hello, ${this.identify()}.`)
}

a1.constructor === Foo
a1.constructor === a2.constructor
a1.__proto__ === Foo.prototype
a1.__proto__ === a2.__proto__

// console.log(a1.identify());
// a2.speak();
console.log('a1.constructor.prototype: ', a1.constructor.prototype)
console.log('Object.getPrototypeOf(a1): ', Object.getPrototypeOf(a1))
console.log('a1.__proto__: ', a1.__proto__)

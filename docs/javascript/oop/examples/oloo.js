// Objects linked to other objects
// https://medium.com/predict/javascript-prototypal-inheritance-constructors-vs-oloo-d90c482aaa55
// https://levelup.gitconnected.com/an-introduction-to-oloo-in-javascript-f2ba3445896a

const Foo = {
  init(who) {
    this.me = who
  },
  identify() {
    return `I am ${this.me}`
  }
}
const Bar = Object.create(Foo)

Bar.speak = function () {
  console.log(`Hello, ${this.identify()}.`)
}

const b1 = Object.create(Bar)
b1.init('b1')
b1.speak() // Hello, I am b1.

const b2 = Object.create(Bar)
b2.init('b2')
b2.speak() // Hello, I am b2.

if (!Object.create) {
  Object.create = function (o) {
    function F() {}
    F.prototype = o
    return new F()
  }
}

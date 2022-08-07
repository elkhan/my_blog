class Foo {
  constructor(who) {
    this.me = who
  }

  identify() {
    return `I am  ${this.me}`
  }

  static hello() {
    console.log('Hello')
  }
}

const a1 = new Foo('a1')
const a2 = new Foo('a2')
console.log(a1.identify())
console.log(a2.identify())

class Bar extends Foo {
  identify() {
    console.log(`Hello,  ${super.identify()}.`)
  }
}

const b1 = new Bar('b1')
const b2 = new Bar('b2')

b1.identify()
b2.identify()

Foo.hello()
Bar.hello()

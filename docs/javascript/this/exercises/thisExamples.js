const obj = {
  a: 5,
  b: 3,
  add(num) {
    console.log(this.a + this.b + num)
  },
}
global.a = 3
global.b = 4
obj.add(2) // 10
const globalAdd = obj.add
globalAdd(2) // 9 THIS is pointing to the global context
const bindAdd = obj.add.bind(obj, 3)
bindAdd() // 11

const anotherObject = {
  a: 1,
  b: 2,
}
obj.add.call(anotherObject, 15) // 18 === 1 + 2 + 15

//
const obj2 = {
  a: 10,
  b: 25,
  add() {
    // eslint-disable-next-line func-names
    return function() {
      console.log(`obj2.add: a + b *${this.a + this.b}*`)
    }
  },
  arrowAdd() {
    return () => console.log(`obj2.arrowAdd: a + b *${this.a + this.b}*`)
  },
  nestedObj: {
    c: 1,
    nestedAdd() {
      console.log(`this.a ${this.a}`)
      console.log(`this.b ${this.b}`)
      console.log(`this.c ${this.c}`)
    },
  },
}

obj2.add()() // obj2.add: a + b  *7* THIS is pointing to the global context
obj2.arrowAdd()() // obj2.arrowAdd: a + b  *35* THIS is pointing to the local context
obj2.nestedObj.nestedAdd()
/*
this.a undefined
this.b undefined
this.c 1
*/

// Linking to the prototype chain
const parentObj = {
  a: 1,
  b: 2,
}

const childObj = Object.create(parentObj)
childObj.c = 3
// eslint-disable-next-line func-names
childObj.childAdd = function() {
  console.log(`childObj.childAdd: a + b + c *${this.a + this.b + this.c}*`)
}
childObj.childAdd() // childObj.childAdd: a + b + c *6*
console.log(parentObj)

// New
function Parent() {
  this.a = 5
  this.b = 10
  // eslint-disable-next-line func-names
  this.add = function() {
    console.log(this.a + this.b)
  }
}

const child = new Parent()
child.add() // 15

// Arrow function
const obj3 = {
  a: 1.4,
  b: 2.7,
  arrowAdd() {
    console.log(`obj3.arrowAdd: a + b *${this.a + this.b}*`)
  },
}

obj3.arrowAdd() // obj3.arrowAdd: a + b *4.1*

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

const test = {
  prop: 42,
  func() {
    return this.prop
  },
  retThis() {
    return this
  },
}

console.log(test.func()) // 42
console.log(test.retThis()) // { prop: 42, func: [Function: func], retThis: [Function: retThis] }

const anotherTestFuncResult = test.func()
const anotherTestFunc = test.func
const anotherTestFuncRetThis = test.retThis

console.log(anotherTestFuncResult) // 42
console.log(anotherTestFunc()) // undefined
// console.log(anotherTestFuncRetThis()); // Object [global] ... *lots of output*

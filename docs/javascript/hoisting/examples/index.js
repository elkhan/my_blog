// 'use strict'

console.log(a) // Output: undefined

var a = 'hello'

foo()

function foo() {
  console.log('Hello world')
}

function hoist() {
  c = 20
  const d = 100
}

hoist()

console.log(c)
/*
Accessible as a global variable outside hoist() function
Output: 20
*/

// console.log(d);
/*
Since it was declared, it is confined to the hoist() function scope.
We can't print it out outside the confines of the hoist() function.
Output: ReferenceError: d is not defined
*/

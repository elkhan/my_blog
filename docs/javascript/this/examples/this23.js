/* eslint-disable no-unused-vars */
/* eslint-disable no-func-assign */
/* eslint-disable new-cap */
function foo() {
  console.log(this.bar)
}

const bar = 'bar1'

const o2 = {
  bar: 'bar2',
  foo,
}

const o3 = {
  bar: 'bar3',
  foo,
}

const obj = {
  bar: 'bar',
}

const obj2 = {
  bar: 'bar2',
}

const orig = foo

foo = function() {
  orig.call(obj)
}

foo() // "bar1" - global in a browser
o2.foo() // "bar2"
o3.foo() // "bar3"

foo.call(obj) // "bar"
foo.call(obj2) // "bar"

/**
 *
 */

function foo2(baz, bam) {
  console.log(`${this.bar} ${baz} ${bam}`)
}

const obj3 = {
  bar: 'bar3',
}

foo2 = foo2.bind(obj3, 'baz')

foo2('bam') // bar3 baz bam

/**
 *
 */

function foo3() {
  this.baz3 = 'baz'
  console.log(`${this.bar3} ${baz3}`)
}

const bar3 = 'bar'
var baz3 = new foo3()

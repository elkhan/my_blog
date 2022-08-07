const foo = (function foo() {
  const o = {
    bar: 'bar!',
  }

  return {
    bar: () => console.log(o.bar),
  }
})()

foo.bar() // bar

/**
 *
 */

const moo = (function() {
  const publicAPI = {
    bar: () => {
      publicAPI.baz()
    },
    baz: () => {
      console.log('baz')
    },
  }
  return publicAPI
})()

moo.bar() // baz
console.log(moo)

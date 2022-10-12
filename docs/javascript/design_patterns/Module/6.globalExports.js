/*
This variation allows us to declare globals without consuming them.
 */

// Global module
const myModule = (function() {
  // Module object
  const module = {}
  const privateVariable = 'Hello World'
  // eslint-disable-next-line no-unused-vars
  function privateMethod() {}

  module.publicProperty = 'Foobar'
  module.publicMethod = function() {
    console.log(privateVariable)
  }

  return module
})()

console.log(myModule) // { publicProperty: 'Foobar', publicMethod: [Function] }
myModule.publicMethod() // Hello World

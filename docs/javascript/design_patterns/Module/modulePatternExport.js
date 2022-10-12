// Global module
const myModule = (function() {
  // Module object
  const module = {}
  const privateVariable = 'Hello World'
  function privateMethod() {
    //
  }
  module.publicProperty = 'Foobar'
  module.publicMethod = function() {
    console.log(privateVariable)
  }
  return module
})()

myModule.publicMethod() // Hello World
console.log(myModule.publicProperty) // Foobar

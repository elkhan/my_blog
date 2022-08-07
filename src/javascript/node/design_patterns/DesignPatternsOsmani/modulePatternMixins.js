/**
 * Import mixins
 * This variation of the pattern demonstrates how globals (e.g jQuery, Underscore) can be passed in
 * as arguments to our module's anonymous function.
 * This effectively allows us to import them and locally alias them as we wish.
 */

const _ = require('lodash')

const oldArr = [1, 2, 3, 4, 5, 6]
const myModule = (function(chunkArr, arr, size) {
  let newArr
  function privateMethod1() {
    newArr = chunkArr.chunk(arr, size)
  }

  function privateMethod2() {
    console.log(newArr)
  }

  return {
    publicMethod1() {
      privateMethod1()
    },
    publicMethod2() {
      privateMethod2()
    },
  }
})(_, oldArr, 2)

myModule.publicMethod1()
myModule.publicMethod2() // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

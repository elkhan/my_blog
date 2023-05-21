/* eslint-disable import/no-extraneous-dependencies */
const _ = require('underscore')
const jQuery = require('jquery')

const myModule = (function(jQ, score) {
  // eslint-disable-next-line no-unused-vars
  function privateMethod1() {
    jQ('.container').html('test')
  }

  function privateMethod2() {
    console.log(score.min([10, 5, 100, 2, 1000]))
  }

  return {
    publicMethod() {
      privateMethod2()
    },
  }
})(jQuery, _)

myModule.publicMethod() // 2

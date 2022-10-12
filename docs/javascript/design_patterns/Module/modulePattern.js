/**
 * The Module pattern was originally defined as a way to provide both private and public encapsulation
 * for classes in conventional software engineering.
 */
// IIFE - http://benalman.com/news/2010/11/immediately-invoked-function-expression/

// +function() {
//   console.log("Hello");
// }();

// eslint-disable-next-line no-unused-vars
const testModule = (function () {
  let counter = 0
  return {
    incrementCounter() {
      // eslint-disable-next-line no-plusplus
      return (counter += 1)
    },
    resetCounter() {
      console.log(`counter value prior to reset: ${counter}`)
      counter = 0
    },
    counterValue() {
      console.log(`counter value: ${counter}`)
    }
  }
})()

// testModule.incrementCounter();
// testModule.incrementCounter();
// testModule.counterValue(); // counter value: 2
// testModule.resetCounter(); // counter value prior to reset: 2
// testModule.counterValue(); // counter value: 0

const nameSpace = (function () {
  let myPrivateVar = 0
  let myPrivateMethod

  myPrivateMethod = function (foo) {
    console.log(foo)
  }

  return {
    myPublicVar: 'foo',

    myPublicFunction(bar) {
      // Increment private counter
      myPrivateVar += 1
      // Call private method using bar
      myPrivateMethod(bar)
    }
  }
})()

console.log(nameSpace.myPublicVar) // foo
// console.log(nameSpace.myPrivateVar); // undefined
nameSpace.myPublicFunction('hello') // hello

/**
 *
 */
const basketModule = (function () {
  const basket = []
  function doSomethingPrivate() {
    console.log('Calling from a private function')
  }
  // eslint-disable-next-line no-unused-vars
  function doSomethingElsePrivate() {
    //
  }
  // Return an object exposed to the public
  return {
    // Add items to our basket
    addItem(values) {
      basket.push(values)
    },

    // Get the count of items in the basket
    getItemCount() {
      return basket.length
    },

    // Public alias to a private function
    doSomething: doSomethingPrivate,

    // Get the total value of items in the basket
    getTotal() {
      let q = this.getItemCount()
      let p = 0
      while ((q -= 1)) {
        p += basket[q].price
      }
      return p
    }
  }
})()

basketModule.addItem({
  item: 'bread',
  price: 0.5
})

basketModule.addItem({
  item: 'butter',
  price: 0.3
})

console.log(basketModule.getItemCount()) // 2
console.log(basketModule.getTotal()) // 0.8
basketModule.doSomething() // Calling from a private function
// basketModule.doSomethingPrivate(); // TypeError: basketModule.doSomethingPrivate is not a function
// console.log(basketModule.basket); // undefined
// console.log(basket); // ReferenceError: basket is not defined - https://stackoverflow.com/questions/35799283/what-is-the-difference-between-uncaught-referenceerror-and-undefined

/**
 * Promises
 * A Promise is an object representing the eventual completion or failure of an asynchronous operation.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
 * https://eloquentjavascript.net/11_async.html
 * https://scotch.io/tutorials/javascript-promises-for-dummies
 */
const isMomHappy = false

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: 'Samsung',
      color: 'black',
    }
    resolve(phone) // fulfilled
  } else {
    reject(new Error('mom is not happy 😔')) // reject
  }
})

const askMom = () => {
  willIGetNewPhone
    .then(fulfilled => {
      // yay, you got a new phone
      console.log(fulfilled)
      // output: { brand: 'Samsung', color: 'black' }
    })
    .catch(error => {
      // oops, mom don't buy it
      console.log(error.message)
      // output: 'mom is not happy'
    })
}

askMom()

/**
 * Chaining Promises
 */

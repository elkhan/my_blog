function makeThrow() {
  throw new Error('This is a throw')
}

// eslint-disable-next-line consistent-return
function catchThrow() {
  try {
    makeThrow()
  } catch (err) {
    // console.log(err.name)
    // console.log(err.stack)
    return err.message
  }
}

expect(catchThrow()).to.eq('This is a throw')

/*
https://levelup.gitconnected.com/the-definite-guide-to-handling-errors-gracefully-in-javascript-58424d9c60e6
 */

const a = 5

try {
  // eslint-disable-next-line no-undef,no-console
  console.log(b) // b is not defined, so throws an error
} catch (err) {
  expect(err.message).to.eq('b is not defined')
}

expect(a).to.eq(5) // Still gets executed

/*
Async

https://stackoverflow.com/questions/54186748/how-to-handle-catch-error-with-settimeout
https://stackoverflow.com/questions/41431605/handle-error-from-settimeout


https://github.com/getify/You-Dont-Know-JS/issues/1360#issuecomment-445551516
When you use the setTimeout, the promise constructor has already completed, synchronously, before you throw the exception...
so it obviously cannot catch it after the fact. More precisely, exceptions are synchronous to their execution stack,
and you've moved the exception to a separate execution stack by wrapping it in the timeout.

https://javascript.info/task/error-async
https://javascript.info/promise-error-handling

https://levelup.gitconnected.com/5-things-you-dont-know-about-try-catch-finally-in-javascript-5d661996d77c

https://catchjs.com/Docs/AsyncAwait
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      throw new Error('Async code thrown')
    } catch (e) {
      reject(e)
    }
  }, 0)
})
promise.catch((err) => expect(err.message).to.eq('Async code thrown'))

// TODO: Add more examples
/* eslint-disable no-unused-vars */
/* eslint-disable no-throw-literal */

/* eslint-disable no-param-reassign */

function reverseString(s) {
  try {
    s = s
      .split('')
      .reverse()
      .join('')
  } catch (e) {
    console.log(e.message)
  } finally {
    console.log(s)
  }
}

function isPositive(a) {
  try {
    if (a < 0) {
      throw 'Negative Error'
    } else if (a === 0) {
      throw 'Zero Error'
    }
  } catch (e) {
    return e
  }
  return 'YES'
}

function isPositiveAlternative(a) {
  if (a < 0) {
    throw new Error('Negative Error')
  } else if (a === 0) {
    throw new Error('Zero Error')
  }
  return 'YES'
}

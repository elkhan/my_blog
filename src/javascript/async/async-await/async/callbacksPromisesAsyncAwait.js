/**
 * Reference
 * https://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
 * https://medium.com/better-programming/improve-your-asynchronous-javascript-code-with-async-and-await-c02fc3813eda
 */

const array = ['dog', 'cat', 'banana']
const hasMelon = array.includes('melon')

function throwAwayPeelings() {
  console.log('throwing away peelings')
}

function err() {
  console.log('whoops, looks like there are no melons')
}

function chewMelon(bool, peel, error) {
  // eslint-disable-next-line no-unused-expressions
  bool ? peel() : error()
}

chewMelon(hasMelon, throwAwayPeelings, err) // whoops, looks like there are no melons

/**
 * vs
 */

function anotherChewMelon(bool, peel, error) {
  // eslint-disable-next-line no-unused-expressions
  bool ? peel() : error()
}

anotherChewMelon(
  array.includes('melon'),
  () => {
    console.log('throwing away peelings')
  },
  () => {
    console.log('whoops, looks like there are no melons')
  }
)

/*
Promises
 */

const arrayWithMelon = ['dog', 'cat', 'melon']

const promise = arg =>
  new Promise((resolve, reject) => {
    if (arg.includes('melon')) {
      console.log('throwing away peelings')
      resolve({ message: 'throwing away peelings', hasMelon: true })
    } else {
      console.log('whoops, looks like there are no melons')
      // eslint-disable-next-line prefer-promise-reject-errors
      reject({
        message: 'whoops, looks like there are no melons',
        hasMelon: false,
      })
    }
  }).catch(error => new Error(error))

promise(arrayWithMelon)
  .then(res => console.log(res))
  .catch(error => {
    throw new Error(error.message)
  })

/*
Async/Await
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fetch = require('node-fetch')

function fetchTodos(url) {
  return new Promise((resolve, reject) => fetch(url)
      .then(res => resolve(res))
      .catch(error => reject(error)))
}

fetchTodos('https://jsonplaceholder.typicode.com/todos/2')
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(error => new Error(error))

// eslint-disable-next-line consistent-return
async function fetchTodosAsync(url) {
  try {
    const result = await fetch(url)
    const todos = await result.json()
    return todos
  } catch (e) {
    console.log(e.message)
  }
}

fetchTodosAsync('https://jsonplaceholder.typicode.com/todos/5').then(res =>
  console.log(res)
)

/*
{
  userId: 1,
  id: 5,
  title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
  completed: false
}
{
  userId: 1,
  id: 2,
  title: 'quis ut nam facilis et officia qui',
  completed: false
}
 */

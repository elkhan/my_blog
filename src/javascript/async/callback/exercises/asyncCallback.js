import * as fs from 'fs'

let hello1
let hello2
let hello3

export const logDetails = (args) => {
  hello3 = args
}

export const sayHello = (callback, hello) => {
  hello1 = 'Hello 1'
  setTimeout(() => {
    callback(hello)
    expect(hello3).to.eq('Hello 3')
  }, 0)
  hello2 = 'Hello 2'
}

sayHello(logDetails, 'Hello 3')

// noinspection JSUnusedAssignment
expect(hello1).to.eq('Hello 1')
// noinspection JSUnusedAssignment
expect(hello2).to.eq('Hello 2')
// noinspection JSUnusedAssignment
expect(hello3).to.eq(undefined)

/*
Another example
 */

// TODO: Rewrite using callbacks
// https://learn.co/lessons/javascript-callbacks
const nails = ['rusty nail', 'bent nail', 'clean nail']
const planks = ['splintered plank', 'straight plank', 'bent plank']

export const nailsAndPlanks = [...nails, ...planks]

export const groupAndClean = (items, cleaningMethod) => {
  const result = []
  items.forEach((item) => {
    result.push(cleaningMethod(item))
  })
  return result.join(', \n')
}

export const doneCleaning = () => '\n Whew, that was a lot of work!'

export const clean = (item) => `I just cleaned a ${item}`

export const output = (fn) => {
  setTimeout(() => {
    fn(groupAndClean(nailsAndPlanks, clean), doneCleaning())
  }, 0)
}

output((work, done) => {
  expect(work, done).to.eq(
    'I just cleaned a rusty nail, \n' +
      'I just cleaned a bent nail, \n' +
      'I just cleaned a clean nail, \n' +
      'I just cleaned a splintered plank, \n' +
      'I just cleaned a straight plank, \n' +
      'I just cleaned a bent plank'
  )
})

/*
Reading from a file asynchronously
https://stackoverflow.com/a/10058931
*/

function readContent(callback) {
  // eslint-disable-next-line consistent-return
  fs.readFile('./utils/text.json', 'utf8', (err, content) => {
    if (err) return callback(err)
    callback(null, content)
  })
}

readContent((err, content) => {
  expect(content).to.eq('{\n  "text": "Long text is here"\n}')
})

// TODO: Add examples from https://glebbahmutov.com/blog/sync-callbacks/

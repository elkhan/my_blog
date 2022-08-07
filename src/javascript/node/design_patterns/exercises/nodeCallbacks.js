function addAsync(a, b, cb) {
  cb(a + b)
}

addAsync(2, 2, result => console.log(result))

addAsync(2, 2, console.log)

/* eslint-disable prefer-arrow-callback */
addAsync(2, 2, function add(result) {
  console.log(result)
})

// https://www.freecodecamp.org/news/understanding-node-js-event-driven-architecture-223292fcbc2d/

const fs = require('fs')

const readFileAsArray = (file, cb) => {
  // eslint-disable-next-line consistent-return
  fs.readFile(file, (err, data) => {
    if (err) {
      return cb(err)
    }
    const lines = data
      .toString()
      .trim()
      .split('\n')
    const language = 'JavaScript'
    cb(null, lines, language)
  })
}

readFileAsArray('./numbers.txt', (err, lines, lang) => {
  if (err) {
    throw err
  }
  const numbers = lines.map(Number)
  const oddNumbers = numbers.filter(n => n % 2 === 1)
  console.log('Odd numbers count:', oddNumbers.length)
  console.log(lang)
})
// Odd numbers count: 4
// JavaScript

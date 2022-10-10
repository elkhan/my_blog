// https://www.freecodecamp.org/news/understanding-node-js-event-driven-architecture-223292fcbc2d/

const fs = require('fs')

const readFileAsArrayPromisify = file => 
  // eslint-disable-next-line consistent-return
   new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err)
      }
      const lines = data
        .toString()
        .trim()
        .split('\n')
      const language = 'JavaScript'
      resolve(lines, language)
    })
  })


readFileAsArrayPromisify('./numbers.txt')
  .then((lines, lang) => {
    const numbers = lines.map(Number)
    const oddNumbers = numbers.filter(n => n % 2 === 1)
    console.log('Promise: Odd numbers count:', oddNumbers.length)
    console.log(lang)
  })
  .catch(console.error)

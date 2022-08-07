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


async function countOdd() {
  try {
    const lines = await readFileAsArrayPromisify('./numbers.txt')
    const numbers = lines.map(Number)
    const oddCount = numbers.filter(n => n % 2 === 1).length
    console.log('Async: Odd numbers count:', oddCount) // Async: Odd numbers count: 4
  } catch (error) {
    console.log(error)
  }
}

countOdd()

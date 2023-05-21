// https://www.youtube.com/watch?v=KuD1SW-2lGA
const fs = require('fs')
const path = require('path')
const { readFile } = require('node:fs/promises')

const filePath = path.resolve(__dirname, 'hello.txt')

const promiseToRead = async () => {
  try {
    return await readFile(filePath, { encoding: 'utf8' })
  } catch (err) {
    throw new Error(err)
  }
}

const getFileContent = () =>
  new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })

getFileContent()
  .then((value) => console.log(value))
  .catch((e) => console.log(e))
promiseToRead()
  .then((value) => console.log(value))
  .catch((e) => console.log(e))

// Swap values
let x = 1
let y = 2

;[x, y] = [y, x]

console.log('x', x, 'y', y)

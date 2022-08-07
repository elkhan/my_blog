const readline = require('readline')

const L = readline()
const N = parseInt(readline(), 10)
const base = Date.parse('2018-06-04T00:00:00')
let s = 0
// eslint-disable-next-line no-plusplus
for (let i = 0; i < N; i += 1) {
  const T = Date.parse(`2018-06-04T${readline()}`)
  console.error(T)
  s += T - base
}

console.log(s <= Date.parse(`2018-06-04T${L}`) - base)

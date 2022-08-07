// eslint-disable-next-line @typescript-eslint/no-var-requires
const readline = require('readline')

const [h, m, s] = readline()
  .split(':')
  .map((x) => parseInt(x, 10))

const limit = h * 60 * 60 + m * 60 + s
const N = parseInt(readline(), 10)
let sum = 0
for (let i = 0; i < N; i += 1) {
  // eslint-disable-next-line no-shadow
  const [h, m, s] = readline()
    .split(':')
    .map((x) => parseInt(x, 10))
  const v = h * 60 * 60 + m * 60 + s
  sum += v
}

console.log(sum <= limit)

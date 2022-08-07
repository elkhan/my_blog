const list = [1, 2, 3, 4, 5]
const accumulator = 0

function sum(arg, acc) {
  if (arg.length === 0) {
    return acc
  }
  return sum(arg.slice(1), acc + arg[0])
}

console.log('sum: ', sum(list, accumulator))

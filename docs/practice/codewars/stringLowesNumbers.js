/* You are given a string of space separated numbers, and have to return the highest and lowest number. */
function highAndLow(numbers) {
  const numberArray = numbers.split(' ')
  const sorted = numberArray.sort((a, b) => b - a)
  const toReturn = [sorted[0], sorted[sorted.length - 1]]
  return toReturn.join(' ')
}

console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'))

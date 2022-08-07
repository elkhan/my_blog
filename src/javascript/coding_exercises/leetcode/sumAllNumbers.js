function sumRangeWhile(num) {
  let sum = 0
  let i = num
  while (i >= 1) {
    sum += i
    i -= 1
  }
  return sum
}

console.log(sumRangeWhile(5)) // 15 = 1 + 2 + 3 + 4 + 5

function sumRangeFor(num) {
  let sum = 0
  for (let i = 1; i <= num; i += 1) {
    sum += i
  }
  return sum
}

console.log(sumRangeFor(5)) // 15

function sumRangeRecursive(num) {
  if (num >= 1) {
    return num + sumRangeRecursive(num - 1)
  }
  return 0
}

console.log(sumRangeRecursive(5)) // 15

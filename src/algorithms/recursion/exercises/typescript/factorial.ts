/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/

// https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
// https://www.youtube.com/watch?v=rf60MejMz3E
// https://www.mathsisfun.com/numbers/fibonacci-sequence.html

function fibonacciFor(targetIndex) {
  const sequence = [0, 1]

  // eslint-disable-next-line no-plusplus
  for (let i = 2; i < targetIndex + 1; i += 1) {
    const next = sequence[i - 2] + sequence[i - 1]

    sequence.push(next)
  }

  return sequence[targetIndex]
}

console.log('fibonacciFor', fibonacciFor(10))

function fibonacciWhile(num1) {
  let a = 1
  let b = 0
  let temp

  while (num1 >= 1) {
    temp = a
    a += b
    b = temp
    num1--
  }

  return b
}

console.log('fibonacciWhile', fibonacciWhile(10))

function fibonacciRec(num2) {
  if (num2 === 0) {
    return 0
  }
  if (num2 <= 2) {
    return 1
  }

  return fibonacciRec(num2 - 1) + fibonacciRec(num2 - 2)
}

console.log('fibonacciRec', fibonacciRec(10))

function fibonacciMemo(num3, memo) {
  memo = memo || {}

  if (memo[num3]) {
    return memo[num3]
  }
  if (num3 === 0) {
    return 0
  }
  if (num3 <= 2) {
    return 1
  }

  return (memo[num3] =
    fibonacciMemo(num3 - 1, memo) + fibonacciMemo(num3 - 2, memo))
}

console.log('fibonacciMemo', fibonacciMemo(10))

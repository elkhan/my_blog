/* eslint-disable no-restricted-syntax */
function solution(N) {
  const str = N.toString(2)
  let zeroCount = 0
  let result = 0

  for (const digit of str) {
    if (digit === '0') {
      zeroCount += 1
    } /* if ( digit === '1' ) */ else {
      result = Math.max(result, zeroCount)
      zeroCount = 0
    }
  }

  return result
}

console.log(solution(18))

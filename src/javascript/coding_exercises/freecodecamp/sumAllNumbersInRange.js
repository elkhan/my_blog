/*
https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-sum-all-numbers-in-a-range/16083
 */

function sumAll(arr) {
  const minNum = Math.min.apply(null, arr)
  const maxNum = Math.max.apply(null, arr)
  const arrayResult = []

  for (let i = minNum; i <= maxNum; i += 1) {
    arrayResult.push(i)
  }
  return arrayResult.reduce((total, num) => total + num, 0)
}
expect(sumAll([1, 4])).to.eq(10) // 10
expect(sumAll([2, 5])).to.eq(14) // 14

/*
2
https://en.wikipedia.org/wiki/Arithmetic_progression#Sum
 */

function sumAll2(arr) {
  arr.sort((a, b) => a - b)
  const firstNum = arr[0]
  const lastNum = arr[1]
  return ((lastNum - firstNum + 1) * (firstNum + lastNum)) / 2
}
expect(sumAll2([1, 4])).to.eq(10) // 10
expect(sumAll2([2, 5])).to.eq(14) // 14

/*
3
 */

function sumAll3(arr) {
  let sum = 0

  for (let i = Math.min(...arr); i <= Math.max(...arr); i += 1) {
    sum += i
  }
  return sum
}
expect(sumAll3([1, 4])).to.eq(10) // 10
expect(sumAll3([2, 5])).to.eq(14) // 14
expect(sumAll3([1, 5])).to.eq(15) // 15

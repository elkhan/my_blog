// @ts-ignore
export const decimalToBinary = (num: number, result = '') => {
  if (num === 0) return result
  // eslint-disable-next-line no-param-reassign
  result = (num % 2) + result
  return decimalToBinary(Math.floor(num / 2), result)
}

console.log(decimalToBinary(233))

/*
  https://www.rapidtables.com/convert/number/binary-to-decimal.html
  The decimal number is equal to the sum of binary digits (dn) times their power of 2 (2n):
  111 === 1(2\0)+2(2\1)+4(2\2) === 7
  100 === 0 + 0 + 4(2\2)
*/

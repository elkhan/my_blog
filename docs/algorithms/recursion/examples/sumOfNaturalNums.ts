export const sumOfNaturalNums = (num: number): number => {
  if (num === 1) return 1
  return sumOfNaturalNums(num - 1) + num
}

console.log(sumOfNaturalNums(10))

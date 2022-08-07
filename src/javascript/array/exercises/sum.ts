export const sumArrayForLoop = (arr: number[]) => {
  let sum = 0
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i]
  }
  return sum
}

export const sumArrayForEach = (arr: number[]) => {
  let sum = 0
  arr.forEach((x) => {
    sum += x
  })
  return sum
}

export const sumArrayReduce = (arr: number[]) => arr.reduce((x, i) => x + i, 0)

export const sumForOF = (arr: number[]) => {
  let sum = 0

  for (const el of arr) {
    sum += el
  }
  return sum
}

import { assert } from 'console'

const linearSearch = (arr: number[], num: number) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === num) {
      return i
    }
  }
  return -1
}

assert(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5) === 4)

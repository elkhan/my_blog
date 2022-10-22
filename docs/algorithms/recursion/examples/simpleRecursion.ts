export function stack(n: number): void {
  if (n < 0) return
  console.log(`begin: ${n}`)
  stack(n - 1)
  console.log(`end: ${n}`)
}

export function sumAll(n: number): number {
  // Base case
  if (n === 1) return 1
  return n + sumAll(n - 1)
  /*
   sumAll of 5

   push to stack ↓
   pop from stack ↑

    1 + sumAll(1) -> base case
          ↓ 1
    2 + sumAll(2 - 1) 1 + 2 == 3
          ↓ 3
    3 + sumAll(3 - 1) 3 + 3 == 6
          ↓ 6
    4 + sumAll(4 - 1) 6 + 4 == 10
          ↓ 10
    5 + sumAll(5 - 1) 10 + 5 == 15
   */
}

export function sumIter(nums: number[]) {
  let result = 0
  for (let i = 0; i < nums.length; i += 1) {
    // eslint-disable-next-line prefer-rest-params
    result += nums[i]
  }
  return result
}

export function sumRecur(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0]
  }
  if (nums.length <= 2) {
    return nums[0] + nums[1]
  }
  // @ts-ignore
  return nums[0] + sumRecur(nums.slice(1))
}

export function sum(arg: number[], acc: number): number {
  if (arg.length === 0) {
    return acc
  }
  return sum(arg.slice(1), acc + arg[0])
}

export function stringReverse(str: string): string {
  if (!str.length) return ''
  return stringReverse(str.substring(1)) + str.charAt(0)
}
/*
stringReverseExample('hello') {
  stringReverseExample('ello') + h {
    stringReverseExample('llo') + e {
      stringReverseExample('lo') + l {
        stringReverseExample('o') + l {
          stringReverseExample('') + o // base case - empty string
            return ''
          }
        }
      }
    }
  }
}

Call stack

stringReverseExample('')     ↓ o
stringReverseExample('o')    ↓ ol
stringReverseExample('lo')   ↓ oll
stringReverseExample('llo')  ↓ olle
stringReverseExample('ello') ↓ return olleh

*/

export function pow(x: number, n: number): number {
  if (n === 1) return x
  return x * pow(x, n - 1)

  /*
  https://javascript.info/recursion#the-execution-context-and-stack

  Call stack

  pow(2, 1) -> x = 2, n = 1 -> 2 ↓
  pow(2, 2) -> x = 2, n = 2 -> 2 * 2 ↓
  pow(2, 3) -> x = 2, n = 3 -> 2 * 4
  */
}

export function factorial(n: number): number {
  if (n === 0) return 1
  return n * factorial(n - 1)
}

export const forLoopFactorial = (num: number): number => {
  let product = 1
  for (let i = num; i >= 1; i -= 1) {
    product *= i
  }
  return product
}

export function fibonacci(n: number): number {
  if (n <= 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

export function reduce(
  fn: (a: number, b: number) => number,
  acc: number,
  [curr, ...rest]: number[]
): number {
  if (curr === undefined) return acc
  return reduce(fn, fn(acc, curr), rest)
}

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

   ↓ 5 + sumAll(5)  = 10 + 5
          ↑ 6 + 4
   ↓ 4 + sumAll(4)
          ↑ 3 + 3
   ↓ 3 + sumAll(3)
          ↑ 2 + 1
   ↓ 2 + sumAll(2)
          ↑ 1
   ↓ 1 + sumAll(1) -> base case
   */
}

export function pow(x: number, n: number): number {
  if (n === 1) return x
  return x * pow(x, n - 1)
}

export function factorial(n: number): number {
  if (n === 0) return 1
  return n * factorial(n - 1)
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

export function stringReverse(str: string): string {
  if (!str.length) return ''
  return stringReverse(str.substring(1)) + str.charAt(0)

  /*
   push to stack ↓
   pop from stack ↑

   ↓ stringReverse('') + 'o' ↑
   ↓ stringReverse('o') + 'l' ↑
   ↓ stringReverse('lo') + 'l' ↑
   ↓ stringReverse('llo') + 'e' ↑
   ↓ stringReverse('ello') + 'h' ↑
   */
}

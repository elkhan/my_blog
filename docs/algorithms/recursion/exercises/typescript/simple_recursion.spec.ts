import { factorial, fibonacci, pow, reduce, stack, stringReverse, sumAll } from './simple_recursion'

beforeEach(() => {
  jest.clearAllMocks()
})

describe('sumAll', () => {
  it('should sum passed in value recursively', () => {
    expect(sumAll(4)).toBe(10)
    expect(sumAll(5)).toBe(15)
  })
  it('should return 1 if 1 passed in', () => {
    expect(sumAll(1)).toBe(1)
  })
})

describe('pow', () => {
  it('should raise x to the power of n', () => {
    expect(pow(2, 4)).toBe(16)
    expect(pow(3, 3)).toBe(27)
  })
  it('should return n if x equals 1', () => {
    expect(pow(2, 1)).toBe(2)
  })
})

describe('factorial', () => {
  it('should factorial of n', () => {
    expect(factorial(4)).toBe(24)
    expect(factorial(10)).toBe(3628800)
  })
  it('should return 1 if n equals 0', () => {
    expect(factorial(0)).toBe(1)
  })
})

describe('fibonacci', () => {
  it('should return a fibonacci number (sum of 2 previous numbers in sequence)', () => {
    expect(fibonacci(10)).toBe(55)
  })
  it('should return 1 if n is less or equal to 2', () => {
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(1)).toBe(1)
    expect(fibonacci(0)).toBe(1)
  })
})

describe('reduce', () => {
  it('should return a sum of passed in array of numbers', () => {
    expect(reduce((a, b) => a + b, 0, [2, 3, 4])).toBe(9)
  })
  it('should return a product of passed in array of numbers', () => {
    // acc has to be 1 to avoid multiplication by 0
    expect(reduce((a, b) => a * b, 1, [2, 8])).toBe(16)
  })
  it('should return acc if curr is undefined', () => {
    expect(reduce((a, b) => a + b, 0, [8])).toBe(8)
  })
})

describe('stack', () => {
  const consoleSpy = jest.spyOn(console, 'log')
  it.each([
    [1, 'begin: 2'],
    [2, 'begin: 1'],
    [3, 'begin: 0'],
    [4, 'end: 0'],
    [5, 'end: 1'],
    [6, 'end: 2'],
  ])('should illustrate a function stack (%d, %s)', (a: number, expected: string) => {
    stack(2)
    expect(consoleSpy).toHaveBeenNthCalledWith(a, expected)
  })
})

describe('stringReverse', () => {
  it('should return a passed in string reversed', () => {
    expect(stringReverse('some real string')).toBe('gnirts laer emos')
  })
  it('should return an empty string if one passed in', () => {
    expect(stringReverse('')).toBe('')
  })
})

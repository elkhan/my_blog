import * as f from './simpleRecursion'

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Recursive functions', () => {
  describe('sumAll', () => {
    it('should sum natural number up to passed in value recursively', () => {
      expect(f.sumAll(4)).toBe(10)
      expect(f.sumAll(5)).toBe(15)
    })
    it('should return 1 if 1 passed in', () => {
      expect(f.sumAll(1)).toBe(1)
    })
  })

  describe('sumIter', () => {
    it('should sum passed in array elements recursively', () => {
      expect(f.sumIter([3, 4, 5])).toBe(12)
      expect(f.sumIter([1, 2, 3, 4, 5])).toBe(15)
    })
    it('should return 1 if 1 passed in', () => {
      expect(f.sumIter([1])).toBe(1)
    })
  })

  describe('sumRecur', () => {
    it('should sum passed in array elements recursively', () => {
      expect(f.sumRecur([3, 4, 5])).toBe(12)
      expect(f.sumRecur([1, 2, 3, 4, 5])).toBe(15)
    })
    it('should return 1 if 1 passed in', () => {
      expect(f.sumRecur([1])).toBe(1)
    })
  })

  describe('sum', () => {
    it('should sum passed in array elements recursively plus acc', () => {
      expect(f.sum([3, 4, 5], 0)).toBe(12)
      expect(f.sum([1, 2, 3, 4, 5], 5)).toBe(20) // 15 + 5
    })
    it('should return 1 if 1 passed in', () => {
      expect(f.sum([1], 0)).toBe(1)
      expect(f.sum([1], 10)).toBe(11)
    })
  })

  describe('pow', () => {
    it('should raise x to the power of n', () => {
      expect(f.pow(2, 4)).toBe(16)
      expect(f.pow(3, 3)).toBe(27)
    })
    it('should return n if x equals 1', () => {
      expect(f.pow(2, 1)).toBe(2)
    })
  })

  describe('factorial', () => {
    it('should factorial of n', () => {
      expect(f.factorial(4)).toBe(24)
      expect(f.factorial(10)).toBe(3628800)
    })
    it('should return 1 if n equals 0', () => {
      expect(f.factorial(0)).toBe(1)
    })
  })
  describe('forLoopFactorial', () => {
    it('should factorial of n', () => {
      expect(f.forLoopFactorial(4)).toBe(24)
      expect(f.forLoopFactorial(10)).toBe(3628800)
    })
    it('should return 1 if n equals 0', () => {
      expect(f.forLoopFactorial(0)).toBe(1)
    })
  })

  describe('fibonacci', () => {
    it('should return a fibonacci number (sum of 2 previous numbers in sequence)', () => {
      expect(f.fibonacci(10)).toBe(55)
    })
    it('should return 1 if n is less or equal to 2', () => {
      expect(f.fibonacci(2)).toBe(1)
      expect(f.fibonacci(1)).toBe(1)
      expect(f.fibonacci(0)).toBe(1)
    })
  })

  describe('reduce', () => {
    it('should return a sum of passed in array of numbers', () => {
      expect(f.reduce((a, b) => a + b, 0, [2, 3, 4])).toBe(9)
    })
    it('should return a product of passed in array of numbers', () => {
      // acc has to be 1 to avoid multiplication by 0
      expect(f.reduce((a, b) => a * b, 1, [2, 8])).toBe(16)
    })
    it('should return acc if curr is undefined', () => {
      expect(f.reduce((a, b) => a + b, 0, [8])).toBe(8)
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
      [6, 'end: 2']
    ])(
      'should illustrate a function stack (%d, %s)',
      (a: number, expected: string) => {
        f.stack(2)
        expect(consoleSpy).toHaveBeenNthCalledWith(a, expected)
      }
    )
  })

  describe('stringReverse', () => {
    it('should return a passed in string reversed', () => {
      expect(f.stringReverse('some real string')).toBe('gnirts laer emos')
    })
    it('should return an empty string if one passed in', () => {
      expect(f.stringReverse('')).toBe('')
    })
  })
})

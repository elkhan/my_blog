import { sumArrayForEach, sumArrayForLoop, sumArrayReduce, sumForOF } from './sum'

describe('sum', () => {
  describe('sumArrayForLoop', () => {
    it('should return the sum of array elements', () => {
      const nums = [1, 2, 3, 5, 8, 13, 21]

      expect(sumArrayForLoop(nums)).toBe(53)
      expect(sumArrayForLoop([])).toBe(0)
    })
  })

  describe('sumArrayForEach', () => {
    it('should return the sum of array elements', () => {
      const nums = [1, 2, 3, 5, 8, 13, 21]

      expect(sumArrayForEach(nums)).toBe(53)
      expect(sumArrayForEach([])).toBe(0)
    })
  })

  describe('sumArrayReduce', () => {
    it('should return the sum of array elements', () => {
      const nums = [1, 2, 3, 5, 8, 13, 21]

      expect(sumArrayReduce(nums)).toBe(53)
      expect(sumArrayReduce([])).toBe(0)
    })
  })

  describe('sumForOF', () => {
    it('should return the sum of array elements', () => {
      const nums = [1, 2, 3, 5, 8, 13, 21]

      expect(sumForOF(nums)).toBe(53)
      expect(sumForOF([])).toBe(0)
    })
  })
})

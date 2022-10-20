import {
  binarySearch,
  binarySearchRecursive,
  createArray
} from './binarySearch'

describe('Binary search', () => {
  const nums = createArray(100)
  describe('binarySearch', () => {
    it('should return index of passed in element or null', () => {
      expect(binarySearch(nums, 1)).toBe(0)
      expect(binarySearch(nums, 55)).toBe(54) // index
      expect(binarySearch(nums, 101)).toBe(null)
    })
  })

  describe('binarySearchRecursive', () => {
    it('should return index of passed in element or null', () => {
      expect(binarySearchRecursive(nums, 1)).toBe(0)
      expect(binarySearchRecursive(nums, 55)).toBe(54) // index
      expect(binarySearchRecursive(nums, 101)).toBe(null)
    })
  })
})

import { binarySearch } from './binary_search'

describe('Binary search', () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8]
  it('should return index of passed in element or null', () => {
    expect(binarySearch(nums, 1)).toBe(0)
    expect(binarySearch(nums, 9)).toBe(null)
  })
})

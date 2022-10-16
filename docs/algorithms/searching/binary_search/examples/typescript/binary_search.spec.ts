import { binarySearch, createArray } from './binary_search'

describe('Binary search', () => {
  const nums = createArray(100)
  it('should return index of passed in element or null', () => {
    expect(binarySearch(nums, 1)).toBe(0)
    expect(binarySearch(nums, 55)).toBe(54) // index
    expect(binarySearch(nums, 101)).toBe(null)
  })
})

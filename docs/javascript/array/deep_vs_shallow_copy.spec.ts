import { deepCopy, nums } from './deep_vs_shallow_copy'

describe('shallow copy', () => {
  // copying reference
  it('should return true when object references compared', () => {
    const numsCopy = nums
    expect(nums).toEqual(numsCopy)
    expect(nums).toBe(numsCopy)
    // The same as above
    expect(nums === numsCopy).toEqual(true)
  })
})

describe('deep copy', () => {
  it('should return false when object references compared', () => {
    const numsCopy: number[] = []
    deepCopy(nums, numsCopy)
    expect(nums).toEqual(numsCopy)
    expect(nums === numsCopy).toEqual(false)
    expect(nums).not.toBe(numsCopy)
  })
})

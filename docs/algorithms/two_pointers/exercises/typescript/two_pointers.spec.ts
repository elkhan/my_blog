import { findSum } from './two_pointers'

describe('FindSum', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7]
  it('should return an array where pair of elements add up to target', () => {
    expect(findSum(arr, 6)).toEqual([6, 1, 5])
    expect(findSum(arr, 9)).toEqual([9, 2, 7])
  })
})

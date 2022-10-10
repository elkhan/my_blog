import { twoSum, twoSumHash, twoSumMap } from './two_sum'

const arr = [2, 7, 11, 15]
const arr1 = [3, 2, 3]
const arr2 = [2, 7]

describe('twoSum', () => {
  it('should ', () => {
    expect(twoSum(arr, 9)).toEqual([0, 1])
    expect(twoSum(arr1, 6)).toEqual([0, 2])
    expect(twoSum(arr2, 9)).toEqual([0, 1])
  })
})

describe('twoSumMap', () => {
  it('should ', () => {
    expect(twoSumMap(arr, 9)).toEqual([0, 1])
    expect(twoSumMap(arr1, 6)).toEqual([0, 2])
    expect(twoSumMap(arr2, 9)).toEqual([0, 1])
  })
})

describe('twoSumHash', () => {
  it('should ', () => {
    expect(twoSumHash(arr, 9)).toEqual([0, 1])
    expect(twoSumHash(arr1, 6)).toEqual([0, 2])
    expect(twoSumHash(arr2, 9)).toEqual([0, 1])
  })
})

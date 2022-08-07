import { intersect, intersectHash, intersectSort } from './intersection_of_two_arrays'

describe('intersect', () => {
  it('should return an array of two arrays intersection', () => {
    const arr1 = [1, 2, 2, 1]
    const arr2 = [2, 2]
    const arr3 = [4, 9, 5]
    const arr4 = [9, 4, 9, 8, 4]
    const arr5 = [1]
    const arr6 = [1]
    const arr7 = [1, 2, 2, 1]
    const arr8 = [2]
    const arr9 = [1, 2, 2, 1]
    const arr10 = [1, 2]
    expect(intersect(arr1, arr2)).toEqual([2, 2])
    expect(intersect(arr3, arr4)).toEqual([9, 4])
    expect(intersect(arr5, arr6)).toEqual([1])
    expect(intersect(arr7, arr8)).toEqual([2])
    expect(intersect(arr9, arr10)).toEqual([1, 2])
  })
})

describe('intersectSort', () => {
  it('should return an array of two arrays intersection', () => {
    const arr1 = [1, 2, 2, 1]
    const arr2 = [2, 2]
    const arr3 = [4, 9, 5]
    const arr4 = [9, 4, 9, 8, 4]
    const arr5 = [1]
    const arr6 = [1]
    const arr7 = [1, 2, 2, 1]
    const arr8 = [2]
    const arr9 = [1, 2, 2, 1]
    const arr10 = [1, 2]
    expect(intersectSort(arr1, arr2)).toEqual([2, 2])
    // Both [4, 9] and [9, 4] accepted
    expect(intersectSort(arr3, arr4)).toEqual([4, 9])
    expect(intersectSort(arr5, arr6)).toEqual([1])
    expect(intersectSort(arr7, arr8)).toEqual([2])
    expect(intersectSort(arr9, arr10)).toEqual([1, 2])
  })
})

describe('intersectHash', () => {
  it('should return an array of two arrays intersection', () => {
    const arr1 = [1, 2, 2, 1]
    const arr2 = [2, 2]
    const arr3 = [4, 9, 5]
    const arr4 = [9, 4, 9, 8, 4]
    const arr5 = [1]
    const arr6 = [1]
    const arr7 = [1, 2, 2, 1]
    const arr8 = [2]
    const arr9 = [1, 2, 2, 1]
    const arr10 = [1, 2]
    expect(intersectHash(arr1, arr2)).toEqual([2, 2])
    expect(intersectHash(arr3, arr4)).toEqual([9, 4])
    expect(intersectHash(arr5, arr6)).toEqual([1])
    expect(intersectHash(arr7, arr8)).toEqual([2])
    expect(intersectHash(arr9, arr10)).toEqual([1, 2])
  })
})

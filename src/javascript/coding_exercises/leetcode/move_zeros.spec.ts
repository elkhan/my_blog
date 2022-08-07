import { moveZeroes1, moveZeros } from './move_zeros'

describe('moveZeros', () => {
  it('should move zeros to the array start', () => {
    const arr = [0, 1, 0, 3, 12]
    const arr1 = [0, 0, 1]
    expect(moveZeros(arr)).toEqual([1, 3, 12, 0, 0])
    expect(moveZeros(arr1)).toEqual([1, 0, 0])
    expect(arr).toEqual([1, 3, 12, 0, 0])
    expect(arr1).toEqual([1, 0, 0])
  })
})

describe('moveZeros1', () => {
  it('should move zeros to the array start', () => {
    const arr = [0, 1, 0, 3, 12]
    const arr1 = [0, 0, 1]
    expect(moveZeroes1(arr)).toEqual([1, 3, 12, 0, 0])
    expect(moveZeroes1(arr1)).toEqual([1, 0, 0])
    expect(arr).toEqual([1, 3, 12, 0, 0])
    expect(arr1).toEqual([1, 0, 0])
  })
})

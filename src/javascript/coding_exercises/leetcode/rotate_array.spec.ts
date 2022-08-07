import { rotateArray } from './rotate_array'

const arr = [1, 2, 3, 4, 5, 6, 7]
const arr2 = [1, 2, 3, 4, 5, 6, 7]
const smallArr = [1, 2]

describe('rotateArray', () => {
  it('should reverse passed in array up to the target index', () => {
    rotateArray(arr, 3)
    rotateArray(arr2, 5)
    expect(arr).toEqual([5, 6, 7, 1, 2, 3, 4])
    expect(arr2).toEqual([3, 4, 5, 6, 7, 1, 2])
  })
  it('should reverse passed in array up to the target index even if target index is large than array length', () => {
    rotateArray(smallArr, 3)
    expect(smallArr).toEqual([2, 1])
  })
})

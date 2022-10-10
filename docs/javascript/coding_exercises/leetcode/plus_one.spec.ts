import { plusOne, plusOne1, plusOne2, plusOne3 } from './plus_one'

describe('plusOne', () => {
  const arr1 = [1, 2, 3, 4]
  const arr2 = [0]
  const arr3 = [9, 9, 9]
  const arr4 = [9]
  it('should return an array incremented large integer by one', () => {
    expect(plusOne(arr1)).toEqual([1, 2, 3, 5])
    expect(plusOne(arr2)).toEqual([1])
    expect(plusOne(arr3)).toEqual([1, 0, 0, 0])
    expect(plusOne(arr4)).toEqual([1, 0])
  })
})

describe('plusOne1', () => {
  const arr1 = [1, 2, 3, 4]
  const arr2 = [0]
  const arr3 = [9, 9, 9]
  const arr4 = [9]
  it('should return an array incremented large integer by one', () => {
    expect(plusOne1(arr1)).toEqual([1, 2, 3, 5])
    expect(plusOne1(arr2)).toEqual([1])
    expect(plusOne1(arr3)).toEqual([1, 0, 0, 0])
    expect(plusOne1(arr4)).toEqual([1, 0])
  })
})

describe('plusOne2', () => {
  const arr1 = [1, 2, 3, 4]
  const arr2 = [0]
  const arr3 = [9, 9, 9]
  const arr4 = [9]
  it('should return an array incremented large integer by one', () => {
    expect(plusOne2(arr1)).toEqual([1, 2, 3, 5])
    expect(plusOne2(arr2)).toEqual([1])
    expect(plusOne2(arr3)).toEqual([1, 0, 0, 0])
    expect(plusOne2(arr4)).toEqual([1, 0])
  })
})

describe('plusOne3', () => {
  const arr1 = [1, 2, 3, 4]
  const arr2 = [0]
  const arr3 = [9, 9, 9]
  const arr4 = [9]
  it('should return an array incremented large integer by one', () => {
    expect(plusOne3(arr1)).toEqual([1, 2, 3, 5])
    expect(plusOne3(arr2)).toEqual([1])
    expect(plusOne3(arr3)).toEqual([1, 0, 0, 0])
    expect(plusOne3(arr4)).toEqual([1, 0])
  })
})

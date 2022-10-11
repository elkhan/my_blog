import { filteredArray } from './filtered_subarray'

const arr = [
  [10, 8, 3],
  [14, 6, 23],
  [3, 18, 6],
]

const arr1 = [
  ['trumpets', 2],
  ['flutes', 4],
  ['saxophones', 2],
]

describe('filteredArray', () => {
  it('should remove nested array if it contains passed in element', () => {
    expect(filteredArray(arr, 18)).toEqual([
      [10, 8, 3],
      [14, 6, 23],
    ])
    expect(filteredArray(arr1, 2)).toEqual([['flutes', 4]])
  })
})

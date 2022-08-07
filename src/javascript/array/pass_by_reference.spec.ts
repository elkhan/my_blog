import { curve } from './pass_by_reference'

describe('arrays are passed by reference', () => {
  it('should return array', () => {
    const arr = [1, 3, 4, 5]
    expect(curve(arr)).toStrictEqual(arr)
  })
  it('should return mutated array', () => {
    const arr = [1, 3, 4, 5]
    curve(arr, 5)
    expect(arr).toStrictEqual([6, 8, 9, 10])
  })
})

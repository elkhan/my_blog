import { multiplyAll } from './multiply_inner_array'

describe('multiplyAll', () => {
  it('should multiply elements of passed in array', () => {
    expect(multiplyAll([[1], [2], [3]])).toEqual(6)
    expect(multiplyAll([[1, 2], [2], [3]])).toEqual(12) // 1 * 2 * 2 * 3
  })
})

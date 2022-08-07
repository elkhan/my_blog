import { fillArrayFill, fillForLoop, matrix } from './fill'

describe('fill', () => {
  describe('matrix', () => {
    it('should create a matrix', () => {
      expect(matrix()).toEqual([
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ])
    })
  })

  describe('fillForLoop', () => {
    it('should fill an empty array with values in a for loop', () => {
      expect(fillForLoop(5)).toEqual([1, 2, 3, 4, 5])
    })
  })

  describe('fillArrayFill', () => {
    it('should fill an empty array with values in a for loop', () => {
      expect(fillArrayFill(5)).toEqual([5, 5, 5, 5, 5])
    })
  })
})

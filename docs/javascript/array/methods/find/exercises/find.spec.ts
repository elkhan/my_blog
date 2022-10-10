import { customFind } from './find'

describe('find', () => {
  describe('array.prototype.find()', () => {
    it('should return the first occurrence', () => {
      const animals = ['dog', 'cat', 'dog', 'horse', 'mouse', 'ant', 'cow', 'antelope', 'cow']
      const result = animals.find((elem) => elem.length > 4)
      expect(result).toEqual('horse')
    })
  })

  describe('customFind', () => {
    it('should return the first occurrence', () => {
      const animals = ['dog', 'cat', 'dog', 'horse', 'mouse', 'ant', 'cow', 'antelope', 'cow']
      const numbers = [1, 1, 3, 1, 5, 6, 8, 10]
      const animalsLengthResult = customFind(animals, (elem) => elem.length > 4)
      const animalsCompareResult = customFind(animals, (elem) => elem === 'turtle')
      const numbersResult = customFind(numbers, (elem) => elem > 4)
      expect(animalsLengthResult).toEqual('horse')
      expect(animalsCompareResult).toBeUndefined()
      expect(numbersResult).toEqual(5)
    })
  })
})

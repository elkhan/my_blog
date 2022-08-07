import './forEach'

beforeEach(() => {
  jest.resetAllMocks()
})

describe('forEach', () => {
  describe('customForEach', () => {
    it.each([
      [1, 'Lorem'],
      [2, 'ipsum'],
      [3, 'dolor'],
      [4, 'sit'],
      [5, 'amet'],
    ])('should map over array of strings and print its elements (%s, %s)', (a, expected) => {
      const consoleSpy = jest.spyOn(console, 'log')
      const strings = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet']
      // eslint-disable-next-line no-console
      strings.customForEach((x: string) => console.log(x))
      expect(consoleSpy).toHaveBeenNthCalledWith(a, expected)
      expect(consoleSpy).lastCalledWith('amet')
    })

    it.each([
      [1, 1],
      [2, 100],
      [3, 36],
      [4, 64],
      [5, 25],
    ])('should map array over and print square of its elements (%i, %i)', (a, expected) => {
      const consoleSpy = jest.spyOn(console, 'log')
      const numbers = [1, 10, 6, 8, 5, 7, 5]
      // eslint-disable-next-line no-console
      numbers.customForEach((x: number) => console.log(x * x))
      expect(consoleSpy).toHaveBeenNthCalledWith(a, expected)
      expect(consoleSpy).lastCalledWith(25)
    })
  })
})

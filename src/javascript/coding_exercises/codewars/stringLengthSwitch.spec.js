/* eslint-disable func-names */
/* eslint-disable @typescript-eslint/no-var-requires */
const likes = require('./stringLengthSwitch')

describe('example tests', () => {
  test('should return correct text', () => {
    expect(likes([])).toEqual('no one likes this')
    expect(likes(['Peter'])).toEqual('Peter likes this')
    expect(likes(['Jacob', 'Alex'])).toEqual('Jacob and Alex like this')
    expect(likes(['Max', 'John', 'Mark'])).toEqual(
      'Max, John and Mark like this'
    )
    expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toEqual(
      'Alex, Jacob and 2 others like this'
    )
  })
  test('Dummy', () => {
    expect(2 + 2).not.toEqual(5)
  })
})

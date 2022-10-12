import { myDate } from './promiseBasics'

describe('a simple promise test', () => {
  const output = {
    location: '55th Street',
    name: 'Cubana Restaurant',
    table: 5
  }
  it('should return what is promised', async () => {
    const result = await myDate()
    expect(result).toStrictEqual(output)
  })
})

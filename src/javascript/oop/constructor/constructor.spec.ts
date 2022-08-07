import { PersonConstructor, simplePersonCreate } from './constructor'

describe('Simple person creator', () => {
  it('should create a person', () => {
    const person = simplePersonCreate('Jane', 44)
    expect(person).toEqual({
      name: 'Jane',
      age: 44,
    })
  })
})

describe('Person constructor', () => {
  it('should create a person', () => {
    const person = new (PersonConstructor as any)('Joe', 45)
    expect(person).toEqual({
      name: 'Joe',
      age: 45,
    })
  })
})

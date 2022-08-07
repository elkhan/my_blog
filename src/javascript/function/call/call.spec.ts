import { anotherPerson, person } from './call'

describe('Function prototype call', () => {
  it('should call a methods from another object', () => {
    expect(person.getName.call(anotherPerson)).toBe('Jane')
  })
})

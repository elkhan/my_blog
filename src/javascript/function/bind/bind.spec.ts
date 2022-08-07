import { person } from './bind'

describe('Function prototype bind', () => {
  it('should call a function with this keyword set/bound to the provided value', () => {
    const getName = person.getName.bind(person)
    expect(getName()).toBe('Joe')
  })
})

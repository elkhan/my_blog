import { func, person } from './objectLookup'

describe('Func', () => {
  it('should return value when property exists', () => {
    const personName = func('name', person)
    const personAge = func('age', person)
    expect(personName).toBe('Joe')
    expect(personAge).toBe(47)
  })
  it('should return undefined when property does not exist', () => {
    const personName = func('firstName', person)
    expect(personName).toBeUndefined()
  })
})

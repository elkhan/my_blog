// eslint-disable-next-line import/no-extraneous-dependencies

const addEmployee = (name, age, position) => ({
  name,
  age,
  position,
})

const office = {
  developer: {
    ...addEmployee('John', 45, 'developer'),
  },
  manager: {
    ...addEmployee('Jane', 30, 'manager'),
  },
}

expect(office).to.deep.equal({
  developer: { name: 'John', age: 45, position: 'developer' },
  manager: { name: 'Jane', age: 30, position: 'manager' },
})

/*
Function constructor
 */
// eslint-disable-next-line no-new-func,import/prefer-default-export
export const sum = new Function('a', 'b', 'return a + b')

/*
Can be inserted into arrays
 */
export const messages = [
  'They can be inserted into arrays',
  (message) => message,
  'like variables',
  (message) => message,
]
expect(messages[1](messages[0])).to.eq('They can be inserted into arrays')
expect(messages[3](messages[2])).to.eq('like variables')

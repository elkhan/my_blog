const person = {
  firstName: 'Jake',
  lastName: 'Doe',
  age: 32,
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.fullName) // Jake Doe

Object.defineProperty(person, 'fullName', {
  set(value) {
    // https://prettier.io/docs/en/rationale.html#semicolons
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;[this.firstName, this.lastName] = value.split(' ')
  }
})
person.fullName = 'Jane Robinson'
console.log(person.fullName) // Jane Robinson

// Jim Cooper Pluralsight
const cat = {
  name: {
    first: 'Fluffy',
    last: 'LaBeouf'
  },
  color: 'White'
}

Object.defineProperty(cat, 'fullName', {
  get() {
    return `${this.name.first} ${this.name.last}`
  },
  set(value) {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;[this.name.first, this.name.last] = value.split(' ')
  }
})
console.log(cat.fullName) // Fluffy LaBeouf
cat.fullName = 'Muffin Top'
console.log(cat.fullName) // Muffin Top

module.exports = {}

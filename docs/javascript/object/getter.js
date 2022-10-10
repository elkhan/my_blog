const person = {
  firstName: 'Jake',
  lastName: 'Doe',
  age: 32,
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
}

console.log(person.fullName) // Jake Doe

/* eslint-disable no-underscore-dangle */
const person = {
  get name() {
    return this._name
  },
  set name(value) {
    if (value.length < 4) {
      console.log('Name is too short')
      return
    }
    this._name = value
  }
}

person.name = 'Moe' // Name is too short
console.log(person.name) // undefined
person.name = 'Homer'
console.log(person.name) // Homer

module.exports = {}

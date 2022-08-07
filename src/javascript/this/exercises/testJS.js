/* eslint-disable no-console */
const user = {
  name: 'John',
  surname: 'Smith',

  set fullName(value) {
    ;[this.name, this.surname] = value.split(' ')
  },

  get fullName() {
    return `${this.name} ${this.surname}`
  },
}

const admin = {
  __proto__: user,
  isAdmin: true,
}

console.log(admin.fullName) // John Smith

admin.fullName = 'Alice Cooper'
console.log(admin.fullName) // Alice Cooper
console.log(user.fullName) // John Smith
console.log(admin) // { isAdmin: true, name: 'Alice', surname: 'Cooper' }

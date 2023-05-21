const userFunctions = {
  sayName() {
    console.log(`I am ${this.name}`)
  },
  increment() {
    this.score += 1
  },
}

// Factory function
function userCreator(name, score) {
  const newUser = Object.create(userFunctions)
  newUser.name = name
  newUser.score = score
  return newUser
}

const user1 = userCreator('Phil', 5)
user1.sayName() // I am Phil

/**
 * Inheritance
 */

const paidUserFunctions = {
  increaseBalance() {
    this.accountBalance += 1
  },
}

function paidUserCreator(paidName, paidScore, accountBalance) {
  const newPaidUser = userCreator(paidName, paidScore)
  Object.setPrototypeOf(newPaidUser, paidUserFunctions)
  newPaidUser.accountBalance = accountBalance
  return newPaidUser
}

Object.setPrototypeOf(paidUserFunctions, userFunctions)

const paidUser1 = paidUserCreator('Jim', 8, 25)
paidUser1.increaseBalance()
paidUser1.sayName() // I am Jim
console.log(paidUser1.accountBalance) // 26

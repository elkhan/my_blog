const userFunctions = {
  sayName() {
    console.log(`I am ${this.name}`)
  },
  increment() {
    this.score += 1
  },
}

function userCreator(name, score) {
  const newUser = Object.create(userFunctions)
  newUser.name = name
  newUser.score = score
  return newUser
}

// Subclass
const paidUserFunctions = {
  increaseBalance() {
    this.accountBalance += 1
  },
}
function paidUserCreator(paidName, paidScore, accountBalance) {
  const paidUser = userCreator(paidName, paidScore)
  Object.setPrototypeOf(paidUser, paidUserFunctions) // setting __proto__ reference
  paidUser.accountBalance = accountBalance
  return paidUser
}

Object.setPrototypeOf(paidUserFunctions, userFunctions)

const user1 = userCreator('Mike', 10)
user1.sayName() // I am Mike
// user1.increaseBalance(); // TypeError: user1.increaseBalance is not a function
// console.log(user1.accountBalance); // undefined

// paidUser
const paidUser1 = paidUserCreator('Alyssa', 8, 25)
paidUser1.increaseBalance()
paidUser1.increment()
paidUser1.sayName() // I am Alyssa
console.log(paidUser1.score) // 9
console.log(paidUser1.accountBalance) // 26

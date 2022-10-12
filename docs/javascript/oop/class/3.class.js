/* eslint-disable max-classes-per-file */
class UserCreator {
  constructor(name, score) {
    this.name = name
    this.score = score
  }

  sayName() {
    console.log(`I am ${this.name}`)
  }

  increment() {
    this.score += 1
  }
}

const user1 = new UserCreator('Phil', 4)
const user2 = new UserCreator('Tim', 4)

user1.sayName() // I am Phil
user2.sayName() // I am Tim

// Subclass
class PaidUserCreator extends UserCreator {
  constructor(paidName, paidScore, accountBalance) {
    super(paidName, paidScore)
    this.accountBalance = accountBalance
  }

  increaseBalance() {
    this.accountBalance += 1
  }
}

const paidUser1 = new PaidUserCreator('Alyssa', 8, 25)
paidUser1.increaseBalance()
console.log(paidUser1.accountBalance) // 26
paidUser1.sayName() // I am Alyssa

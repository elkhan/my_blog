/* eslint-disable max-classes-per-file */
class userCreator {
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
/* eslint-disable new-cap */
const user1 = new userCreator('Phil', 4)
const user2 = new userCreator('Tim', 4)

user1.sayName() // I am Phil
user2.sayName() // I am Tim

class paidUserCreator extends userCreator {
  constructor(paidName, paidScore, accountBalance) {
    super(paidName, paidScore)
    this.accountBalance = accountBalance
  }

  increaseBalance() {
    this.accountBalance += 1
  }
}

const paidUser1 = new paidUserCreator('Alyssa', 8, 25)
paidUser1.increaseBalance()
console.log(paidUser1.accountBalance) // 26
console.log(paidUser1.score) // 8
paidUser1.sayName() // I am Alyssa

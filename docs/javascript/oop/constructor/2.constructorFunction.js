function UserCreator(name, score) {
  this.name = name
  this.score = score
}

UserCreator.prototype.sayName = function sayName() {
  console.log(`My name is ${this.name}`)
}

UserCreator.prototype.increment = function increment() {
  this.score += 1
}

const user1 = new UserCreator('Phil', 5)
const user2 = new UserCreator('Tim', 4)
user1.sayName() // My name is Phil
user2.sayName() // My name is Tim

// Subclass
function PaidUserCreator(paidName, paidScore, accountBalance) {
  UserCreator.call(this, paidName, paidScore)
  // UserCreator.apply(this, [paidName, paidScore]);
  this.accountBalance = accountBalance
}

PaidUserCreator.prototype = Object.create(UserCreator.prototype)

// Object.setPrototypeOf(PaidUserCreator.prototype, UserCreator.prototype);

PaidUserCreator.prototype.increaseBalance = function increaseBalance() {
  this.accountBalance += 1
}

const paidUser1 = new PaidUserCreator('Alyssa', 8, 25)
paidUser1.increaseBalance()
paidUser1.sayName() // My name is Alyssa
paidUser1.increment()

console.log(paidUser1.name) // Alyssa - comes from UserCreator function
console.log(paidUser1.accountBalance) // 26
console.log(paidUser1.score) // 9
// eslint-disable-next-line no-proto
console.log(PaidUserCreator.prototype.__proto__)

module.exports = {}

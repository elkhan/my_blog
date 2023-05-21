// Constructor function
function userCreator(name, score) {
  this.name = name
  this.score = score
}

userCreator.prototype.sayName = function sayName() {
  console.log(`I am ${this.name}`)
}

userCreator.prototype.increment = function increment() {
  this.score += 1
}

/* eslint-disable new-cap */
const user1 = new userCreator('Phil', 5)
const user2 = new userCreator('Tim', 4)

user1.sayName() // I am Phil
user2.sayName() // I am Tim

function paidUserCreator(paidName, paidScore, accountBalance) {
  userCreator.call(this, paidName, paidScore)
  //   userCreator.apply(this, [paidName, paidScore]);
  this.accountBalance = accountBalance
}

paidUserCreator.prototype = Object.create(userCreator.prototype)
paidUserCreator.prototype.increaseBalance = function increaseBalance() {
  this.accountBalance += 1
}
const paidUser1 = new paidUserCreator('Alyssa', 8, 25)
paidUser1.increaseBalance()
paidUser1.sayName() // I am Alyssa
console.log(paidUser1.constructor) // [Function: userCreator]
console.log(paidUserCreator.prototype.constructor) // [Function: userCreator]
console.log(paidUser1.constructor === paidUserCreator) // false
console.log(paidUser1.constructor === userCreator) // true

// https://dmitripavlutin.com/understanding-constructor-property/
// https://stackoverflow.com/questions/22315909/javascript-inheritance-with-prototypes-constructor-property
// Update the constructor pointer
paidUserCreator.prototype.constructor = paidUserCreator
console.log(paidUser1.constructor === paidUserCreator) // true
console.log(paidUser1.constructor === userCreator) // false
console.log(paidUser1.constructor) // [Function: paidUserCreator]
console.log(paidUserCreator.prototype.constructor) // [Function: paidUserCreator]

function UserCreator(name, score) {
  this.name = name
  this.score = score
  this.greet = function greet() {
    console.log(`Hello ${this.name}`)
  }
}

UserCreator.prototype.increment = function increment() {
  /*
  const that = this;
  function add1() {
    that.score += 1;
  }
  add1();
  */
  const add1 = () => {
    this.score += 1
  }
  add1()
}

UserCreator.prototype.login = function login() {
  console.log("You're logged in!")
}

const user1 = new UserCreator('Eva', 9)
console.log(user1.name)
user1.increment()
user1.greet()
console.log(user1.score)
user1.login()
/*
Eva
Hello Eva
10
You're logged in!
 */

console.log(UserCreator.name) // UserCreator

module.exports = {}

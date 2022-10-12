function UserCreator(name, score) {
  this.name = name
  this.score = score
}

UserCreator.prototype.increment = function increment() {
  this.score += 1
}

UserCreator.prototype.login = function login() {
  console.log("You're logged in!")
}

const user1 = new UserCreator('Eva', 9)
console.log(user1.name)
user1.increment()
console.log(user1.score)
user1.login()
/*
Eva
10
You're logged in!
 */

console.log(UserCreator.name) // UserCreator

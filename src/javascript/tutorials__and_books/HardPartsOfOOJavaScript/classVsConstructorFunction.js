// Solution 3
function UserCreator(name, score) {
  this.name = name
  this.score = score
}

UserCreator.prototype.increment = function increment() {
  this.score += 1
}

UserCreator.prototype.login = function login() {
  console.log('logging in')
}

const user1 = new UserCreator('Eva', 9)
console.log(user1) // UserCreator { name: 'Eva', score: 9 }
user1.increment() // UserCreator { name: 'Eva', score: 10 }
console.log(user1)
user1.login() // logging in

// Solution 4
class UserMaker {
  constructor(name, score) {
    this.name = name
    this.score = score
  }

  increment() {
    this.score += 1
  }

  login() {
    console.log(`${this.name}: login from class`)
  }
}

const user2 = new UserMaker('Joe', 6)
console.log(user2) // UserMaker { name: 'Joe', score: 6 }
user2.increment()
console.log(user2) // UserMaker { name: 'Joe', score: 7 }
user2.login() // Joe: login from class

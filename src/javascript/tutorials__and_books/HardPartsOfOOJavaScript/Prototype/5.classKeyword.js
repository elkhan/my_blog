class UserCreator {
  constructor(name, score) {
    this.name = name
    this.score = score
  }

  increment() {
    this.score += 1
  }

  login() {
    console.log(`${this.name}, you are logged in!`)
  }
}

const user1 = new UserCreator('Eva', 9)
user1.increment()
console.log(user1.score)
user1.login()
/*
10
Eva, you are logged in!
 */

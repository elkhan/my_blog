/* Object literal */

const user1 = {
  name: 'Phil',
  score: 4,
  increment() {
    user1.score += 1
  },
}

user1.increment()
console.log(user1.name) // Phil
console.log(user1.score) // 5

/* Dot notation */

const user2 = {}
user2.name = 'Julia'
user2.score = 5
user2.increment = () => {
  user2.score += 2
}

user2.increment()
console.log(user2.name) // Julia
console.log(user2.score) // 7

/* Object.create() */

const user3 = Object.create(null)
user3.name = 'Eva'
user3.score = 10
user3.increment = () => {
  user3.score += 3
}

user3.increment()
console.log(user3.name) // Eva
console.log(user3.score) // 13

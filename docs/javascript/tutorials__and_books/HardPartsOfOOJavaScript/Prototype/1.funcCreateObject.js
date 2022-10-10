// Creates a new function each time a user is created
function userCreator(name, score) {
  const newUser = {}
  newUser.name = name
  newUser.score = score
  newUser.increment = function increment() {
    newUser.score += 1
  }
  return newUser
}

const user1 = userCreator('Phil', 4)
const user2 = userCreator('Julia', 5)

console.log(user1.name)
user1.increment()
console.log(user1.score)
/*
Phil
5
 */
console.log(user2.name)
user2.increment()
console.log(user2.score)
/*
Julia
6
 */

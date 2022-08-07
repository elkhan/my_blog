const userCreator = (name, score) => {
  const newUser = {}
  newUser.name = name
  newUser.score = score
  newUser.increment = () => {
    newUser.score += 1
  }
  console.log(newUser)
  /* 
  { name: 'Phil', score: 4, increment: [Function] }
  { name: 'Julia', score: 5, increment: [Function] }
   */
  return newUser
}

const user1 = userCreator('Phil', 4)
const user2 = userCreator('Julia', 5)

console.log(user1.name) // Phil
user1.increment()
console.log(user1.score) // 5

console.log(user2.name) // Julia
user2.increment()
console.log(user2.score) // 6

/* Object.create() to link __proto__ */
const userFunctionStore = {
  increment() {
    this.score += 1
  },
  login() {
    console.log('You are logged in')
  }
}

function userCreator2(name, score) {
  const newUser = Object.create(userFunctionStore)
  newUser.name = name
  newUser.score = score
  return newUser
}

const user21 = userCreator2('Mike', 10)
const user22 = userCreator2('Greg', 20)

console.log(user21.name)
user21.increment()
console.log(user21.score)
user21.login()
/*
Mike
11
You are logged in
*/
console.log(user22.name)
user22.increment()
console.log(user22.score)
user22.login()
/*
Greg
21
You are logged in
 */

// eslint-disable-next-line no-proto
console.log(user21.__proto__) // { increment: [Function: increment], login: [Function: login] }
// eslint-disable-next-line no-proto
console.log(user21.__proto__.__proto__) // {}

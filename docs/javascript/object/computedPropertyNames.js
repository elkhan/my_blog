// eslint-disable-next-line @typescript-eslint/no-var-requires
const readlineSync = require('readline-sync')

const userName = readlineSync.question('What is your name? ')

const reception = {
  [`Welcome ${userName}`]: 'checked!',
}
console.log(reception)

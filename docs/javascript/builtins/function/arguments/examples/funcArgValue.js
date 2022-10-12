function double(x) {
  // eslint-disable-next-line no-param-reassign
  x *= 2
  return x
}

const money = 10

console.log(double(money)) // 20
console.log(money) // 10

const pets = 'Tom and Jerry'

function feed(str) {
  // eslint-disable-next-line no-param-reassign
  str[0] = 'Jon'
}

feed(pets)
console.log(pets) // Tom and Jerry

const petsArr = ['Tom', 'Jerry']

function feedArr(str) {
  // eslint-disable-next-line no-param-reassign
  str[0] = 'John'
}

feedArr(petsArr)
console.log(petsArr) // ['John', 'Jerry']

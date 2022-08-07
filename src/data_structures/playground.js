const num = 101
const pet = `${num} Dalmatians`
console.log(pet)

const mutator = (arg) => {
  if (Array.isArray(arg)) {
    // eslint-disable-next-line no-return-assign,no-param-reassign
    return (arg[0] = 'Hello')
  }
  // eslint-disable-next-line no-return-assign
  return arg * 2
}

const arrayOne = [1, 2, 3, 4]
const arrayTwo = arrayOne
console.log(arrayOne) // [ 1, 2, 3, 4 ]
mutator(arrayOne)
console.log(arrayOne) // [ 'Hello', 2, 3, 4 ]
console.log(arrayTwo) // [ 'Hello', 2, 3, 4 ]

//
const money = 10
console.log(money) // 10
mutator(money)
console.log(money) // 10

const sherlock = {
  surname: 'Holmes',
  age: 64,
}
/*
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let propertyName;
rl.question('What would you like to know ? ', (age) => {
    propertyName = age
    console.log(sherlock[propertyName])
    rl.close()
})
*/

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
const myCar = {}
let stringPropertyName = 'make'
myCar[stringPropertyName] = 'Ford'

stringPropertyName = 'model'
myCar[stringPropertyName] = 'Mustang'

myCar.year = 1969

console.log(myCar)

//
function showProps(obj, objName) {
  let result = ``
  for (const i in obj) {
    // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`
    }
  }
  return result
}

console.log(showProps(myCar, 'myCar'))

const singer = {
  surname: 'Turner',
}
const pilot = {
  surname: 'Jamal',
}
const { surname } = singer
console.log(singer.surname)
console.log(pilot.surname)
singer.surname = pilot.surname
pilot.surname = surname
console.log(singer.surname)
console.log(pilot.surname)

const president = {
  name: 'Pooh',
  next: null,
}

president.next = {
  name: 'Paddington',
  next: president,
}
console.log(president)
console.log(president.next.next.next.name)

// https://eggheadio.typeform.com/to/IDJBPQ?email=atlasoid@gmail.com&ck_subscriber_id=705604084
const anotherPresident = {
  name: 'Another Pooh',
  // next: anotherPresident // calling console.log(anotherPresident) causes ReferenceError: anotherPresident is not defined
}
console.log(anotherPresident) // { name: 'Another Pooh' }
anotherPresident.next = anotherPresident
console.log(anotherPresident) // { name: 'Another Pooh', next: [Circular] }

const station = {
  owner: {
    name: 'Fred',
  },
}
const { name } = station.owner
console.log(name === station.owner.name)

// console.log(myCar.color) // undefined
// console.log(myCar.color.green) // TypeError: Cannot read property 'green' of undefined
// console.log(myBike.color) // ReferenceError: myBike is not defined

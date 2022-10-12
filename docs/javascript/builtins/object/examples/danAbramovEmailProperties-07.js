/* eslint-disable no-unused-vars */
const sherlock = {
  surname: 'Holmes',
  address: {
    city: 'London',
  },
}

const john = {
  surname: 'Watson',
  address: sherlock.address,
}
console.log('john', john)
console.log('sherlock', sherlock)

john.surname = 'Lennon'
// john.address.city = 'Malibu'
john.address = { city: 'Malibu' }
console.log('john', john)
console.log('sherlock', sherlock)

let captain = 'Jim'
// eslint-disable-next-line object-shorthand
const ship = { captain: captain }
captain = 'Naomi'
console.log(ship)

let foo = 'Hello'
const bar = foo
foo = 'Bye'
console.log('foo', foo)
console.log('bar', bar)

// https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293
// https://www.javascripttutorial.net/javascript-pass-by-value/
// https://medium.com/nodesimplified/javascript-pass-by-value-and-pass-by-reference-in-javascript-fcf10305aa9c
const one = { bar: 'bar' }
const two = one
// one = { foo: 'foo' }
one.bar = 'bar'
console.log('one', one)
console.log('two', two)

const turner = {
  name: 'Alex',
}
const joe = {
  name: 'Alex',
}

const ice = {
  taste: undefined,
}
const sand = {}
const answer = ice.taste === sand.taste
console.log(answer) // true

const anotherShip = {
  pilot: {
    name: 'Jim',
  },
}

const singer = {
  surname: 'Turner',
}
const anotherPilot = {
  surname: 'Armstrong',
}
singer.surname = anotherPilot.surname
anotherPilot.surname = singer.surname
console.log('singer', singer)
console.log('anotherPilot', anotherPilot)

const singerTwo = {
  surname: 'Turner',
}
const pilotTwo = {
  surname: 'Robinson',
}
const temp = singerTwo.surname
singerTwo.surname = pilotTwo.surname
pilotTwo.surname = temp
console.log('singerTwo', singerTwo)
console.log('pilotTwo', pilotTwo)

let objectPlayer = {
  surname: 'objectPlayer',
}
let objectDancer = {
  surname: 'objectDancer',
}
const objectTemp = objectPlayer
objectPlayer = objectDancer
objectDancer = objectTemp
console.log('objectPlayer', objectPlayer)
console.log('objectDancer', objectDancer)

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

/*
https://eggheadio.typeform.com/to/IDJBPQ?email=elkhan.me@gmail.com&ck_subscriber_id=917170514
let president = { name: 'Pooh'}
president.next = president
 */

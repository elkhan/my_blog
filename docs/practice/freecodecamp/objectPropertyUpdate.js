/* eslint-disable no-console */
const ourDog = {
  name: 'Camper',
  legs: 4,
  tails: 1,
  friends: ['everything!']
}

ourDog.name = 'Happy Camper'
console.assert(ourDog.name === 'Happy Camper')

// eslint-disable-next-line
ourDog['name'] = 'Very Happy Camper'
console.assert(ourDog.name === 'Very Happy Camper')

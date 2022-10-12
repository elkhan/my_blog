import { assert } from 'console'

const sherlock = {
  surname: 'Holmes',
  address: {
    city: 'London',
  },
}

type John = {
  address?: { city?: string }
  city?: string
  surname: string
}
// eslint-disable-next-line prefer-const
let john: John = {
  surname: 'Watson',
  address: sherlock.address,
}

john.surname = 'Lennon'
// john.address.city = 'Malibu'
// john.address = {
//   city: 'Malibu',
// }
john.address = {}
john.address.city = 'Malibu'
/*
john = {
  surname: 'Lennon',
  address: {
    city: 'Stockholm',
  },
}
 */
assert(sherlock.address.city === 'London')
assert(john.address.city === 'Malibu')

/* _______________________ ** // Exercises // ** ________________________________ */

// https://eggheadio.typeform.com/to/Ql4IPM?email=elkhan.me@gmail.com&ck_subscriber_id=917170514
// 1
const spreadsheet = {
  title: 'Sales',
}
const copy = spreadsheet
copy.title += ' (Copy)'

assert(copy.title === 'Sales (Copy)')

// 2
const batman = {
  address: {
    city: 'Gotham',
  },
}
const robin = {
  address: batman.address,
}
batman.address = {
  city: 'Ibiza',
}

// batman.address.city = 'Ibiza' // Now changes robin.address.city

assert(robin.address.city === 'Gotham')

// https://eggheadio.typeform.com/to/Ql4IPM?email=elkhan.me@gmail.com&ck_subscriber_id=917170514
// 3
const chip = {
  address: {
    city: 'Disneyland',
  },
}
const dale = {
  address: {
    city: chip.address.city,
  },
}
chip.address = {
  city: 'Tokyo',
}
// chip.address.city = 'Tokyo'

assert(dale.address.city === 'Disneyland')
assert(chip.address.city === 'Tokyo')

// 4
// const music = {
//   taste: 'classical',
// }
// const onion = music
// console.log('music.taste', music.taste) // music.taste classical
// onion.taste = 'umami'
// console.log('music.taste', music.taste) // music.taste umami

// alternative
const onion = {
  taste: 'classical',
}
const music = onion
assert(music.taste === 'classical')
onion.taste = 'umami'
assert(music.taste === 'umami')

// 5
const ilana = {
  address: {
    city: 'New York',
  },
}
// eslint-disable-next-line prefer-const
let place = ilana.address

place = {
  city: 'Boulder',
}

// place.city = 'Boulder' // ilana.address.city Boulder

const abbi = {
  address: place,
}

assert(ilana.address.city === 'New York')
assert(abbi.address.city === 'Boulder')

// 6
const rick = {
  address: {
    city: 'C-137',
  },
}
const morty = {
  address: rick.address,
}
rick.address = {
  city: '35C',
}

assert(morty.address.city === 'C-137')

// 7
const rapper = {
  beef: 'legit',
}
let burger = {
  beef: 'veggie',
}
assert(burger.beef === 'veggie')
burger = rapper
assert(burger.beef === 'legit')

// 8
const daria = {
  address: {
    city: 'Lawndale',
  },
}
const placeTwo = daria.address
placeTwo.city = 'L.A.'
const jane = {
  address: placeTwo,
}
assert(daria.address.city === 'L.A.')
assert(jane.address.city === 'L.A.')
/*
assert(jane.address).to.eql({ city: 'L.A.' })
assert(placeTwo).to.eql({ city: 'L.A.' })
*/

// 9
let walter = {
  address: {
    city: 'Albuquerque',
  },
}
const gustavo = {
  address: walter.address,
}

walter = {
  address: {
    city: 'Crawford',
  },
}

assert(gustavo.address.city === 'Albuquerque')
assert(walter.address.city === 'Crawford')

// Object mutation vs property assignment

// eslint-disable-next-line prefer-const
let dipper = {
  address: {
    city: {
      name: 'Gravity Falls',
    },
  },
}
const mabel = {
  address: dipper.address,
}

// Assignment to a property
dipper.address.city = {
  name: 'Land of Ooo',
}

// Will fail
/**
dipper.address = {
  city: {
    name: 'Land of Ooo',
  },
}
 */

assert(mabel.address.city.name === 'Land of Ooo')
assert(dipper.address.city.name === 'Land of Ooo')

type Charlotte = {
  mother: { age?: number }
  child?: { age?: number }
}
// 10
const charlotte: Charlotte = {
  mother: {
    age: 20,
  },
}

charlotte.child = charlotte.mother
assert(charlotte.mother.age === 20)
assert(charlotte.child.age === 20)
charlotte.mother.age = 21
assert(charlotte.mother.age === 21)
assert(charlotte.child.age === 21)

const location = {
  country: {
    city: {
      street: {
        name: 'Sandhamnsgatan',
      },
    },
  },
}

// eslint-disable-next-line prefer-const
let anotherLocation = location.country

// anotherLocation = {
//   city: {
//     street: {
//       name: 'Sveavagen',
//     },
//   },
// }
anotherLocation.city = {
  street: {
    name: 'Sveavagen',
  },
}

console.log(anotherLocation) // { city: { street: { name: 'Sveavagen' } } }
console.dir(location, { depth: null }) // { country: { city: { street: { name: 'Sandhamnsgatan' } } } }

// Testing

const sum = (x: number, y: number) => x + y

assert(sum(1, 2) === 3)

assert(sum(3, 5) === 8)

export {}

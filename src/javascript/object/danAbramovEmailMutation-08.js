/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const { expect } = require('chai')

const sherlock = {
  surname: 'Holmes',
  address: {
    city: 'London',
  },
}

// eslint-disable-next-line prefer-const
let john = {
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
expect(sherlock.address.city).to.equal('London')
expect(john.address.city).to.equal('Malibu')

/* _______________________ ** // Exercises // ** ________________________________ */

// https://eggheadio.typeform.com/to/Ql4IPM?email=elkhan.me@gmail.com&ck_subscriber_id=917170514
// 1
const spreadsheet = {
  title: 'Sales',
}
const copy = spreadsheet
copy.title += ' (Copy)'

expect(copy.title).to.equal('Sales (Copy)')

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

expect(robin.address.city).to.equal('Gotham')

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

expect(dale.address.city).to.equal('Disneyland')
expect(chip.address.city).to.equal('Tokyo')

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
expect(music.taste).to.equal('classical')
onion.taste = 'umami'
expect(music.taste).to.equal('umami')

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

expect(ilana.address.city).to.equal('New York')
expect(abbi.address.city).to.equal('Boulder')

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

expect(morty.address.city).to.equal('C-137')

// 7
const rapper = {
  beef: 'legit',
}
let burger = {
  beef: 'veggie',
}
expect(burger.beef).to.equal('veggie')
burger = rapper
expect(burger.beef).to.equal('legit')

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
expect(daria.address.city).to.equal('L.A.')
expect(jane.address.city).to.equal('L.A.')
expect(jane.address).to.eql({ city: 'L.A.' })
expect(placeTwo).to.eql({ city: 'L.A.' })

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

expect(gustavo.address.city).to.equal('Albuquerque')
expect(walter.address.city).to.equal('Crawford')

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

expect(mabel.address.city.name).to.equal('Land of Ooo')
expect(dipper.address.city.name).to.equal('Land of Ooo')

// 10
const charlotte = {
  mother: {
    age: 20,
  },
}

charlotte.child = charlotte.mother
expect(charlotte.mother.age).to.equal(20)
expect(charlotte.child.age).to.equal(20)
charlotte.mother.age = 21
expect(charlotte.mother.age).to.equal(21)
expect(charlotte.child.age).to.equal(21)

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

const sum = (x, y) => x + y

expect(sum(1, 2)).to.equal(3)

expect(sum(3, 5)).to.equal(8)

function phoneticLookup(val) {
  const lookup = {
    alpha: 'Adams',
    bravo: 'Boston',
    charlie: 'Chicago',
    delta: 'Denver',
    echo: 'Easy',
    foxtrot: 'Frank',
  }

  return lookup[val]
}
expect(phoneticLookup('charlie')).to.eq('Chicago')

const testObj = {
  12: 'Namath',
  16: 'Montana',
  19: 'Unitas',
}

const playerNumber = 16
const player = testObj[playerNumber]
expect(player).to.eq('Montana')

const contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0543236543',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0994372684',
    likes: ['Hogwarts', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '0487345643',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['Javascript', 'Gaming', 'Foxes'],
  },
]

/*
1
 */

function lookUpProfile(firstName, prop) {
  for (let i = 0; i < contacts.length; i += 1) {
    if (
      contacts[i].firstName === firstName &&
      // eslint-disable-next-line no-prototype-builtins
      contacts[i].hasOwnProperty(prop)
    ) {
      return contacts[i][prop]
    }
    // eslint-disable-next-line no-prototype-builtins
    if (!contacts[i].hasOwnProperty(prop)) {
      return 'No such property'
    }
  }
  return 'No such contact'
}
expect(lookUpProfile('Kristian', 'lastName')).to.eq('Vos')
expect(lookUpProfile('Akira', 'likes')).to.deep.eq(['Pizza', 'Coding', 'Brownie Points'])
expect(lookUpProfile('Bob', 'number')).to.eq('No such contact')
expect(lookUpProfile('Akira', 'address')).to.eq('No such property')

/*
2
 */

function lookUpProfile2(firstName, prop) {
  const result = contacts.filter((x) => x.firstName === firstName)

  if (result.length === 0) {
    return 'No such contact'
  }
  return result[0][prop] ? result[0][prop] : 'No such property'
}
expect(lookUpProfile2('Kristian', 'lastName')).to.eq('Vos')
expect(lookUpProfile2('Akira', 'likes')).to.deep.eq(['Pizza', 'Coding', 'Brownie Points'])
expect(lookUpProfile2('Bob', 'number')).to.eq('No such contact')
expect(lookUpProfile2('Akira', 'address')).to.eq('No such property')

/*
3
 */

function lookUpProfile3(name, prop) {
  const fnMatch = contacts.filter((cont) => cont.firstName === name)
  // eslint-disable-next-line no-nested-ternary
  return fnMatch.length
    ? fnMatch[0][prop]
      ? fnMatch[0][prop]
      : 'No such property'
    : 'No such contact'
}
expect(lookUpProfile3('Kristian', 'lastName')).to.eq('Vos')
expect(lookUpProfile3('Akira', 'likes')).to.deep.eq(['Pizza', 'Coding', 'Brownie Points'])
expect(lookUpProfile3('Bob', 'number')).to.eq('No such contact')
expect(lookUpProfile3('Akira', 'address')).to.eq('No such property')

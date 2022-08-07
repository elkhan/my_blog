// https://tylermcginnis.com/beginners-guide-to-javascript-prototype/

/*
// Constructor function

function Animal(name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy

    animal.eat = function (amount) {
        console.log(`${this.name} is eating`)
        this.energy += amount
    }

    animal.sleep = function (length) {
        console.log(`${this.name} is sleeping`)
        this.energy += length
    }

    animal.play = function (length) {
        console.log(`${this.name} is playing`)
        this.energy -= length
    }

    return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)
*/

/*
// Functional Instantiation with Shared Methods
const animalMethods = {
    eat(amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    },
    sleep(length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    },
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }
}

function Animal(name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy
    animal.eat = animalMethods.eat
    animal.sleep = animalMethods.sleep
    animal.play = animalMethods.play

    return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

// Object.create
const parent = {
    name: 'Stacey',
    age: 35,
    heritage: 'Irish'
}

const child = Object.create(parent)
child.name = 'Ryan'
child.age = 7

console.log(child.name) // Ryan
console.log(child.age) // 7
console.log(child.heritage) // Irish
*/

/*
// Functional Instantiation with Shared Methods and Object.create

const animalMethods = {
    eat(amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    },
    sleep(length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    },
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }
}

function Animal(name, energy) {
    let animal = Object.create(animalMethods)
    animal.name = name
    animal.energy = energy

    return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

leo.eat(10)
snoop.play(5)
*/

/*
// Pseudoclassical Instantiation

function Animal (name, energy) {
    // const this = Object.create(Animal.prototype)
    this.name = name
    this.energy = energy

    // return this
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating.`)
  this.energy += amount
}

Animal.prototype.sleep = function (length) {
  console.log(`${this.name} is sleeping.`)
  this.energy += length
}

Animal.prototype.play = function (length) {
  console.log(`${this.name} is playing.`)
  this.energy -= length
}

Animal.nextToEat = function (animals) {
    const sortedByLeastEnergy = animals.sort((a, b) => {
        return a.energy - b.energy
    })

    return sortedByLeastEnergy[0].name
}

const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)

console.log(Animal.nextToEat([leo, snoop])) // Leo

*/

// Class

class Animal {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }

  static nextToEat(animals) {
    const sortedByLeastEnergy = animals.sort((a, b) => a.energy - b.energy)
    return sortedByLeastEnergy[0].name
  }

  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }

  sleep(length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }

  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
}

const leopold = new Animal('Leopold', 7)
const snoop = new Animal('Snoop', 10)
leopold.eat(10)
snoop.sleep(5)

console.log(Animal.nextToEat([leopold, snoop])) // Snoop

const leoPrototype = Object.getPrototypeOf(leopold)

console.log(leoPrototype === Animal.prototype) // true
console.log(leopold.constructor)
// eslint-disable-next-line no-proto
console.log(leopold.__proto__)

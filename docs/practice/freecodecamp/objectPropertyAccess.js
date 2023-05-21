const dogs = {
  Fido: 'Mutt',
  Hunter: 'Doberman',
  Snoopie: 'Beagle',
}

const myDog = 'Hunter'
const myBreed = dogs[myDog]
console.assert(myBreed === 'Doberman')

const anotherBreed = dogs.Snoopie
console.assert(anotherBreed === 'Beagle')

const someObj = {
  propName: 'John',
}

const propPrefix = (str) => {
  const s = 'prop'
  return s + str
}

const someProp = propPrefix('Name')
console.assert(someProp === 'propName')
console.assert(someObj[someProp] === 'John')
console.assert(someObj["propName"] === 'John')
console.assert(someObj.propName === 'John')

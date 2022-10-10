type Person = {
  name?: string
  age?: number
}

function simplePersonCreate(name: string, age: number) {
  const person: Person = {}
  person.name = name
  person.age = age
  return person
}

function PersonConstructor(name: string, age: number) {
  this.name = name
  this.age = age
}

export { PersonConstructor, simplePersonCreate }

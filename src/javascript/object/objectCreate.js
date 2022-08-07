const person = {
  name: 'Jake',
  age: 32,
  hello() {
    return `My name is ${this.name}. And I am ${this.age} years old.`
  },
}

const me = Object.create(person)
me.name = 'Joe'
console.log(me.hello())

const car = Object.create({})
car.color = 'british racing green'
console.log(car)

const five = 5.0
console.log(five.toFixed())

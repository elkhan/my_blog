function sayNameAll(value) {
  const newValue = value || ''
  console.log(newValue + this.name)
}

const person1 = {
  name: 'Nicholas',
  sayName: sayNameAll,
}

const person2 = {
  name: 'Greg',
  sayName: sayNameAll,
}

const person3 = {
  name: 'John',
}

person1.sayName() // Nicholas
person2.sayName() // Greg
sayNameAll.call(person3, 'His name is: ') // His name is: John
sayNameAll.call(person2) // Greg
sayNameAll.call(person1, 'My name is: ') // My name is: Nicholas

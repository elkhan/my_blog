// “ECMA-262 defines an object as an “unordered collection of properties each of which contains a primitive value, object, or function.” Strictly speaking, this means that an object is an array of values in no particular order. Each property or method is identified by a name that is mapped to a value. For this reason (and others yet to be discussed), it helps to think of ECMAScript objects as hash tables: nothing more than a grouping of name-value pairs where the value may be data or a function.”

var person = {}
person.name = 'Nicholas'
person.age = 29
person.job = 'Software Engineer'

person.sayName = function() {
  console.log(this.name)
}

// Object literal notation

var person = {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',

  sayName() {
    console.log(this.name)
  },
}

person.sayName()
console.log(person.age)

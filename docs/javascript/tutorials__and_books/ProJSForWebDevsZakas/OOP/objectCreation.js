// Factory pattern
function createPerson(name, age, job) {
  const o = {}
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function () {
    console.log(this.name)
  }
  return o
}

var person1 = createPerson('Nicholas', 29, 'Software Engineer')
var person2 = createPerson('Greg', 27, 'Doctor')

// Constructor pattern
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function () {
    console.log(this.name)
  }
}
var person1 = new Person('Nicholas', 29, 'Software Engineer')
var person2 = new Person('Greg', 27, 'Doctor')

// console.log(person1 instanceof Person);

// Prototype pattern
function Person() {}

Person.prototype.name = 'Nicholas'
Person.prototype.age = 29
Person.prototype.job = 'Software Engineer'
Person.prototype.sayName = function () {
  console.log(this.name)
}

var person1 = new Person()
// person1.sayName(); // Nicholas

var person2 = new Person()
// person1.sayName(); // Nicholas

// console.log(person1.sayName == person2.sayName); // true
// console.log(Person.prototype.isPrototypeOf(person1)); // true
// console.log(Person.prototype.isPrototypeOf(person2)); // true

// console.log(Object.getPrototypeOf(person1) == Person.prototype);  //true
// console.log(Object.getPrototypeOf(person1).name);  //"Nicholas"

// Nicholas C. Zakas. “Professional: JavaScript® for Web Developers.” iBooks. Page 238, figure 6-1

// “Although it’s possible to read values on the prototype from object instances, it is not possible to overwrite them. If you add a property to an instance that has the same name as a property on the prototype, you create the property on the instance, which then masks the property on the prototype.”

person1.name = 'Greg'
console.log(person1.name) // "Greg" - from instance
console.log(person2.name) // "Nicholas" - from prototype
// The name property of person1 is shadowed by a new value. Both person1.name and person2.name still function appropriately, returning "Greg" (from the object instance) and "Nicholas" (from the prototype), respectively. When person1.name was accessed in the console.log(), its value was read, so the search began for a property called name on the instance. Since the property exists, it is used without searching the prototype. When person2.name is accessed the same way, the search doesn’t find the property on the instance, so it continues to search on the prototype where the name property is found.

delete person1.name
console.log(person1.name) // "Nicholas"
// Delete is called on person1.name, which previously had been shadowed with the value "Greg". This restores the link to the prototype’s name property, so the next time person1.name is accessed, it’s the prototype property’s value that is returned.

// hasOwnProperty()
// The hasOwnProperty() method determines if a property exists on the instance or on the prototype. This method, which is inherited from Object, returns true only if a property of the given name exists on the object instance.
console.log(person1.hasOwnProperty('name')) // false - instance property has been deleted
console.log(person2.hasOwnProperty('name')) // false - prototype property only
// Nicholas C. Zakas. “Professional: JavaScript® for Web Developers.” iBooks. Page 241, figure 6-2

// ******************

// The in Operator
// “There are two ways to use the in operator: on its own or as a for-in loop. When used on its own, the in operator returns true when a property of the given name is accessible by the object, which is to say that the property may exist on the instance or on the prototype.”
person1.name = 'Greg'
console.log(person1.name) // "Greg" - from instance
console.log(person1.hasOwnProperty('name')) // true
console.log('name' in person1) // true
console.log(person2.name) // "Nicholas" - from prototype
console.log(person2.hasOwnProperty('name')) // false
console.log('name' in person2) // true

delete person1.name
console.log(person1.name) // "Nicholas" - from the prototype
console.log(person1.hasOwnProperty('name')) // false
console.log('name' in person1) // true

// It’s possible to determine if the property of an object exists on the prototype by combining a call to hasOwnProperty() with the in operator like this:

function hasPrototypeProperty(object, name) {
  return !object.hasOwnProperty(name) && name in object
} // “a prototype property can be determined if the in operator returns true but hasOwnProperty() returns false”

// For-in
// When using a for-in loop, all properties that are accessible by the object and can be enumerated will be returned, which includes properties both on the instance and on the prototype.

for (const n in person1) {
  console.log(n) // name age job sayName
}

// To retrieve a list of all enumerable instance properties on an object, you can use the ECMAScript 5 Object.keys() method, which accepts an object as its argument and returns an array of strings containing the names of all enumerable properties.
var keys = Object.keys(Person.prototype)
console.log(keys) // [ 'name', 'age', 'job', 'sayName' ]

const person3 = new Person()
person3.name = 'Rob'
person3.age = 31
const person3Keys = Object.keys(person3)
console.log(person3Keys)

// If you’d like a list of all instance properties, whether enumerable or not, you can use Object.getOwnPropertyNames() in the same way:
var keys = Object.getOwnPropertyNames(Person.prototype)
console.log(keys) // "constructor,name,age,job,sayName”

// *******************
// Alternate prototype syntax
function Person() {}

Person.prototype = {
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName() {
    console.log(this.name)
  }
}
// The end result is the same, with one exception: the constructor property no longer points to Person.

// If the constructor’s value is important, you can set it specifically back to the appropriate value:
Person.prototype = {
  constructor: Person,
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName() {
    console.log(this.name)
  }
}

// Restoring the constructor in this manner creates a property with [[Enumerable]] set to true. Native constructor properties are not enumerable by default, so if you’re using an ECMAScript 5–compliant JavaScript engine, you may wish to use Object.defineProperty() instead:
Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false,
  value: Person
})

// ******************

// Dynamic nature of prototypes
// Since the process of looking up values on a prototype is a search, changes made to the prototype at any point are immediately reflected on instances, even the instances that existed before the change was made.

var friend = new Person()

Person.prototype.sayHi = function () {
  console.log('hi')
}
friend.sayHi()

// Although properties and methods may be added to the prototype at any time, and they are reflected instantly by all object instances, you cannot overwrite the entire prototype and expect the same behavior.
function Person() {}

var friend = new Person()

Person.prototype = {
  constructor: Person,
  name: 'Nicholas',
  age: 29,
  job: 'Software Engineer',
  sayName() {
    console.log(this.name)
  }
}

friend.sayName() // TypeError: friend.sayName is not a function
// “Overwriting the prototype on the constructor means that new instances will reference the new prototype while any previously existing object instances still reference the old prototype.”
// From: Nicholas C. Zakas. “Professional: JavaScript® for Web Developers.” Page 234, figure 6-3

// *********************
// Native Object Prototypes
// The prototype pattern is important not just for defining custom types but also because it is the pattern used to implement all of the native reference types. Each of these (including Object, Array, String, and so on) has its methods defined on the constructor’s prototype. For instance, the sort() method can be found on Array.prototype, and substring() can be found on String.prototype.
// Through native object prototypes, it’s possible to get references to all of the default methods and to define new methods.
String.prototype.startsWith = function (text) {
  return this.indexOf(text) == 0
}

const msg = 'Hello world!'
console.log(msg.startsWith('Hello')) // true

// *********************
// Combination Constructor/Prototype Pattern
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.friends = ['Shelby', 'Court']
}

Person.prototype = {
  constructor: Person,
  sayName() {
    console.log(this.name)
  }
}
var person1 = new Person('Nicholas', 29, 'Software Engineer')
var person2 = new Person('Greg', 27, 'Doctor')
person1.friends.push('Van')
console.log(person1.friends) // [ 'Shelby', 'Court', 'Van' ]
console.log(person2.friends) // [ 'Shelby', 'Court' ]
console.log(person1.friends === person2.friends) // false
console.log(person1.sayName === person2.sayName) // true
// Note that the instance properties are now defined solely in the constructor, and the shared property constructor and the method sayName() are defined on the prototype. When person1.friends is augmented by adding a new string, person2.friends is not affected, because they each have separate arrays.

// ********************
// Dynamic Prototype Pattern
// function Person(name, age, job) {
//   // properties
//   this.name = name;
//   this.age = age;
//   this.job = job;
//
//   // methods
//   if (typeof this.sayName != "function") {
//     Person.prototype.sayName = function() {
//       console.log(this.name);
//     };
//   }
// }
// var friend = new Person("Nicholas", 29, "Software Engineer");
// friend.sayName();

// *********************
// Parasitic Constructor Pattern
// ...

// *********************
// Durable Constructor Pattern
// ...

module.exports = {}

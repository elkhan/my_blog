// Prototype Chaining
function SuperType() {
  this.property = true
}

SuperType.prototype.getSuperValue = function () {
  return this.property
}

function SubType() {
  this.subproperty = false
}

// inherit from SuperType
SubType.prototype = new SuperType()

SubType.prototype.getSubValue = function () {
  return this.subproperty
}

let instance = new SubType()
// console.log(instance.getSuperValue()); // true

// Nicholas C. Zakas. “Professional: JavaScript® for Web Developers.” iBooks. page 244, figure 6-4

// console.log(instance instanceof Object); // true
// console.log(instance instanceof SuperType); // true
// console.log(instance instanceof SubType); // true

// console.log(Object.prototype.isPrototypeOf(instance)); // true
// console.log(SuperType.prototype.isPrototypeOf(instance)); // true
// console.log(SubType.prototype.isPrototypeOf(instance)); // true

// ********************
// Working with Methods
// Often a subtype will need to either override a supertype method or introduce new methods that don’t exist on the supertype. To accomplish this, the methods must be added to the prototype after the prototype has been assigned.

const instance1 = new SubType()
console.log(instance1.getSuperValue()) // true

// override existing method
SubType.prototype.getSuperValue = function () {
  return false
}
const instance2 = new SubType()
console.log(instance2.getSuperValue()) // false

const instance3 = new SuperType()
console.log(instance3.getSuperValue()) // true

// **********************
// Problems with Prototype Chaining
// When implementing inheritance using prototypes, the prototype actually becomes an instance of another type, meaning that what once were instance properties are now prototype properties.

function SuperType() {
  this.property = true
  this.colors = ['red', 'blue', 'green']
}

function SubType() {}

// inherit from SuperType
SubType.prototype = new SuperType()

const newInstance = new SubType()
newInstance.colors.push('black')
console.log(newInstance.colors) // [ 'red', 'blue', 'green', 'black' ]

const anotherInstance = new SubType()
console.log(anotherInstance.colors) // [ 'red', 'blue', 'green', 'black' ]
// In this example, the SuperType constructor defines a property colors that contains an array (a reference value). Each instance of SuperType has its own colors property containing its own array. When SubType inherits from SuperType via prototype chaining, SubType.prototype becomes an instance of SuperType and so it gets its own colors property, which is akin to specifically creating SubType.prototype.colors. The end result: all instances of SubType share a colors property. This is indicated as the changes made to instance1.colors are reflected on instance2.colors.

// A second issue with prototype chaining is that you cannot pass arguments into the supertype constructor when the subtype instance is being created. In fact, there is no way to pass arguments into the supertype constructor without affecting all of the object instances.

// *****************
// Constructor Stealing
function AnotherSubType() {
  // inherit from SuperType
  SuperType.call(this)
}

const instanceOne = new AnotherSubType()
instanceOne.colors.push('black')
console.log(instanceOne.colors) // [ 'red', 'blue', 'green', 'black' ]

const instanceTwo = new AnotherSubType()
console.log(instanceTwo.colors) // [ 'red', 'blue', 'green' ]

// ******************
// Passing Arguments
function AnotherSuperType(name) {
  this.name = name
}

function SubType() {
  // inherit from SuperType passing in an argument
  AnotherSuperType.call(this, 'Nicholas')

  // instance property
  this.age = 29
}
var instance = new SubType()
console.log(instance.name) // "Nicholas"
console.log(instance.age) // 29

// *******************
// Problems with Constructor Stealing
// The downside to using constructor stealing exclusively is that it introduces the same problems as the constructor pattern for custom types: methods must be defined inside the constructor, so there’s no function reuse. Furthermore, methods defined on the supertype’s prototype are not accessible on the subtype, so all types can use only the constructor pattern. Because of these issues, constructor stealing is rarely used on its own.

// *******************
// Combination Inheritance
// Combination inheritance (sometimes also called pseudoclassical inheritance) combines prototype chaining and constructor stealing to get the best of each approach. The basic idea is to use prototype chaining to inherit properties and methods on the prototype and to use constructor stealing to inherit instance properties. This allows function reuse by defining methods on the prototype and allows each instance to have its own properties.

function YetAnotherSuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

YetAnotherSuperType.prototype.sayName = function () {
  console.log(this.name)
}

function YetAnotherSubType(name, age) {
  // inherit properties
  YetAnotherSuperType.call(this, name)
  this.age = age
}

// inherit methods
YetAnotherSubType.prototype = new YetAnotherSuperType()

YetAnotherSubType.prototype.sayAge = function () {
  console.log(this.age)
}

const yetAnotherInstance = new YetAnotherSubType('Nicholas', 29)
yetAnotherInstance.colors.push('black')
console.log(yetAnotherInstance.colors) // [ 'red', 'blue', 'green', 'black' ]
yetAnotherInstance.sayName() // 'Nicholas'
yetAnotherInstance.sayAge() // 29

const yetAnotherInstance1 = new YetAnotherSubType('Greg', 27)
console.log(yetAnotherInstance1.colors) // [ 'red', 'blue', 'green' ]
yetAnotherInstance1.sayName() // 'Greg'
yetAnotherInstance1.sayAge() // 27
// The SuperType constructor defines two properties, name and colors, and the SuperType prototype has a single method called sayName(). The SubType constructor calls the SuperType constructor, passing in the name argument, and defines its own property called age. Additionally, the SubType prototype is assigned to be an instance of SuperType, and then a new method called sayAge() is defined. With this code, it’s then possible to create two separate instances of SubType that have their own properties, including the colors property, but all use the same methods.
// Addressing the downsides of both prototype chaining and constructor stealing, combination inheritance is the most frequently used inheritance pattern in JavaScript. It also preserves the behavior of instanceof and isPrototypeOf() for identifying the composition of objects.

// ********************
// Prototypal Inheritance
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
} // The object() function creates a temporary constructor, assigns a given object as the constructor’s prototype, and returns a new instance of the temporary type. Essentially, object() performs a shadow copy of any object that is passed into it.

const person = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}

const anotherPerson = object(person)
anotherPerson.name = 'Greg'
anotherPerson.friends.push('Rob')

const yetAnotherPerson = object(person)
yetAnotherPerson.name = 'Linda'
yetAnotherPerson.friends.push('Barbie')

console.log(person.friends) // [ 'Shelby', 'Court', 'Van', 'Rob', 'Barbie' ]
// You have an object that you want to use as the base of another object. That object should be passed into object(), and the resulting object should be modified accordingly. In this example, the person object contains information that should be available on another object, so it is passed into the object() function, which returns a new object. The new object has person as its prototype, meaning that it has both a primitive value property and a reference value property on its prototype. This also means that person.friends is shared not only by person but also with anotherPerson and yetAnotherPerson. Effectively, this code has created two clones of person.

// ECMAScript 5 formalized the concept of prototypal inheritance by adding the Object.create() method. This method accepts two arguments, an object to use as the prototype for a new object and an optional object defining additional properties to apply to the new object. When used with one argument, Object.create() behaves the same as the object() method:

const person1 = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}

const anotherPerson1 = Object.create(person1)
anotherPerson1.name = 'Greg'
anotherPerson1.friends.push('Rob')

const yetAnotherPerson1 = Object.create(person1)
yetAnotherPerson1.name = 'Linda'
yetAnotherPerson1.friends.push('Barbie')

console.log(person1.friends)

// The second argument for Object.create() is in the same format as the second argument for Object.defineProperties(): each additional property to define is specified along with its descriptor. Any properties specified in this manner will shadow properties of the same name on the prototype object.

const person2 = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}

const anotherPerson2 = Object.create(person2, {
  name: {
    value: 'Greg'
  }
})

console.log(anotherPerson2.name) // "Greg"
console.log(person2.name) // "Nicholas"
// *******************
// Parasitic Inheritance
// The idea behind parasitic inheritance is similar to that of the parasitic constructor and factory patterns: create a function that does the inheritance, augments the object in some way, and then returns the object as if it did all the work.

function createAnother(original) {
  const clone = object(original) // create a new object by calling a function
  clone.sayHi = function () {
    // augment the object in some way
    console.log('hi')
  }
  return clone // return the object
} // The createAnother() function accepts a single argument, which is the object to base a new object on. This object, original, is passed into the object() function, and the result is assigned to clone. Next, the clone object is changed to have a new method called sayHi(). The last step is to return the object.

const person3 = {
  name: 'Nicholas',
  friends: ['Shelby', 'Court', 'Van']
}

const anotherPerson3 = createAnother(person3)
anotherPerson3.sayHi() // hi
// person3.sayHi(); // Error - person3.sayHi is not a function

// *******************
// Parasitic Combination Inheritance
// Combination inheritance is the most often-used pattern for inheritance in JavaScript, though it is not without its inefficiencies. The most inefficient part of the pattern is that the supertype constructor is always called twice: once to create the subtype’s prototype, and once inside the subtype constructor. Essentially, the subtype prototype ends up with all of the instance properties of a supertype object, only to have it overwritten when the subtype constructor executes:
function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function () {
  console.log(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name) // second call to SuperType()

  this.age = age
}

SubType.prototype = new SuperType() // first call to SuperType()
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function () {
  console.log(this.age)
} // Nicholas C. Zakas. “Professional: JavaScript® for Web Developers.” page 256, figure 6-6

// Parasitic combination inheritance uses constructor stealing to inherit properties but uses a hybrid form of prototype chaining to inherit methods. The basic idea is this: instead of calling the supertype constructor to assign the subtype’s prototype, all you need is a copy of the supertype’s prototype. Essentially, use parasitic inheritance to inherit from the supertype’s prototype and then assign the result to the subtype’s prototype.
function inheritPrototype(subtype, supertype) {
  const prototype = object(supertype.prototype) // create object
  prototype.constructor = subtype // augment object
  subtype.prototype = prototype // assign object
}
// The inheritPrototype() function implements very basic parasitic combination inheritance. This function accepts two arguments: the subtype constructor and the supertype constructor. Inside the function, the first step is to create a clone of the supertype’s prototype. Next, the constructor property is assigned onto prototype to account for losing the default constructor property when the prototype is overwritten. Finally, the subtype’s prototype is assigned to the newly created object.

function SuperType(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.sayName = function () {
  alert(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name)

  this.age = age
}

inheritPrototype(SubType, SuperType)

SubType.prototype.sayAge = function () {
  alert(this.age)
}
// This example is more efficient in that the SuperType constructor is being called only one time, avoiding having unnecessary and unused properties on SubType.prototype. Furthermore, the prototype chain is kept intact, so both instanceof and isPrototypeOf() behave as they would normally. Parasitic combination inheritance is considered the most optimal inheritance paradigm for reference types.

// *******************
// SUMMARY
// ECMAScript supports object-oriented (OO) programming without the use of classes or interfaces.
// Objects are created and augmented at any point during code execution, making objects into dynamic rather than strictly defined entities.
// In place of classes, the following patterns are used for the creation of objects:

// The factory pattern uses a simple function that creates an object, assigns properties and methods, and then returns the object.
// This pattern fell out of favor when the constructor pattern emerged.

// Using the constructor pattern, it’s possible to define custom reference types that can be created using the new operator in the same way as built-in object instances are created.
// The constructor pattern does have a downside, however, in that none of its members are reused, including functions.
// Since functions can be written in a loosely typed manner, there’s no reason they cannot be shared by multiple object instances.

// The prototype pattern takes this into account, using the constructor’s prototype property to assign properties and methods that should be shared.
// The combination constructor/prototype pattern uses the constructor to define instance properties and the prototype pattern to define shared properties and methods.

// Inheritance in JavaScript is implemented primarily using the concept of prototype chaining.
// Prototype chaining involves assigning a constructor’s prototype to be an instance of another type.
// In doing so, the subtype assumes all of the properties and methods of the supertype in a manner similar to class-based inheritance. The problem with prototype chaining is that all of the inherited properties and methods are shared among object instances, making it ill-suited for use on its own. The constructor stealing pattern avoids these issues, calling the supertype’s constructor from inside of the subtype’s constructor. This allows each instance to have its own properties but forces the types to be defined using only the constructor pattern. The most popular pattern of inheritance is combination inheritance, which uses prototype chaining to inherit shared properties and methods and uses constructor stealing to inherit instance properties.

// There are also the following alternate inheritance patterns:

// Prototypal inheritance implements inheritance without the need for predefined constructors, essentially performing a shallow clone operation on a given object.
// The result of the operation then may be augmented further.

// Closely related is parasitic inheritance, which is a pattern for creating an object based on another object or some information, augmenting it, and returning it.
// This pattern has also been repurposed for use with combination inheritance to remove the inefficiencies related to the number of times the supertype constructor is called.

// Parasitic combination inheritance is considered the most efficient way to implement type-based inheritance.

module.exports = {}

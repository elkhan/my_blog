// “There are two types of properties: data properties and accessor properties.”

// Data properties
// “[[Configurable]] — Indicates if the property may be redefined by removing the property via delete, changing the property’s attributes,
// or changing the property into an accessor property. By default, this is true for all properties defined directly on an object.
// [[Enumerable]] — Indicates if the property will be returned in a for-in loop. By default, this is true for all properties defined directly on an object.
// [[Writable]] — Indicates if the property’s value can be changed. By default, this is true for all properties defined directly on an object.
// [[Value]] — Contains the actual data value for the property. This is the location from which the property’s value is read and the
// location to which new values are saved. The default value for this attribute is undefined.”

const personNicholas = {
  name: 'Nicholas' // [[Value]] is set to "Nicholas" and any changes to that value are stored in this location.
} // “[[Configurable]], [[Enumerable]], and [[Writable]] are all set to true while the [[Value]] attribute is set to the assigned value.”

// “To change any of the default property attributes, you must use the ECMAScript 5 Object.defineProperty() method.”
// “When you are using Object.defineProperty(), the values for configurable, enumerable, and writable default to false unless otherwise specified.”

const personElkhan = {}
Object.defineProperty(personElkhan, 'name', {
  writable: false, // read-only property
  value: 'Elkhan'
})

// console.log(person.name); // Elkhan
// person.name = "Greg"; // Cannot assign to read only property 'name'
// console.log(person.name); // Elkhan

// Nonconfigurable
const person = {}
Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'Nicholas'
})

// console.log(person.name);    //"Nicholas"
// delete person.name; // Cannot delete property 'name'
// console.log(person.name);    //"Nicholas

// Object.defineProperty(person, "name", {
//   configurable: true, // cannot redefine property: name
//   value: "Nicholas"
// });

// *****************

// Accessor properties do not contain a data value. Instead, they contain a combination of a getter function and a setter function (though both are not necessary).
// When an accessor property is read from, the getter function is called, and it’s the function’s responsibility to return a valid value;
// when an accessor property is written to, a function is called with the new value, and that function must decide how to react to the data.

// Accessor properties have four attributes:

// [[Configurable]] — Indicates if the property may be redefined by removing the property via delete, changing the property’s attributes,
// or changing the property into a data property. By default, this is true for all properties defined directly on an object.
// [[Enumerable]] — Indicates if the property will be returned in a for-in loop. By default, this is true for all properties defined directly on an object.
// [[Get]] — The function to call when the property is read from. The default value is undefined.
// [[Set]] — The function to call when the property is written to. The default value is undefined.

// It is not possible to define an accessor property explicitly; you must use Object.defineProperty().
const book = {
  _year: 2004,
  edition: 1
}

Object.defineProperty(book, 'year', {
  get() {
    return this._year
  },
  set(newValue) {
    if (newValue > 2004) {
      this._year = newValue
      this.edition += newValue - 2004
    }
  }
})

book.year = 2005
console.log('Book year: '.concat(book.year))
console.log('Book edition: '.concat(book.edition)) // 2
// The underscore on _year is a common notation to indicate that a property is not intended to be accessed from outside the object’s methods.
// The year property is defined to be an accessor property where the getter function simply returns the value of _year and the setter does some
// calculation to determine the correct edition. So changing the year property to 2005 results in both _year and edition changing to 2.
// This is a typical use case for accessor properties, when setting a property value results in some other changes to occur.

// It’s not necessary to assign both a getter and a setter. Assigning just a getter means that the property cannot be written to and attempts to do so will be ignored.
// In strict mode, trying to write to a property with only a getter throws an error. Likewise, a property with only a setter cannot be read and
// will return the value undefined in nonstrict mode, while doing so throws an error in strict mode.

// ******************

// Defining multiple properties
const anotherBook = {}

Object.defineProperties(anotherBook, {
  _year: {
    value: 2004,
    writable: true
  },

  edition: {
    value: 1,
    writable: true
  },

  year: {
    get() {
      return this._year
    },
    set(newValue) {
      if (newValue > 2004) {
        this._year = newValue
        this.edition += newValue - 2004
      }
    }
  }
})

anotherBook.year = 2005
console.log(`Another book year ${anotherBook.year}`)
console.log(`Another book edition: ${anotherBook.edition}`)

// *****************

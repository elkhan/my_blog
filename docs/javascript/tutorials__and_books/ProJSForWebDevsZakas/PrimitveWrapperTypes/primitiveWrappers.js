let s1 = 'some text'
const s2 = s1.substring(2) // "me text"

// “The major difference between reference types and primitive wrapper types is the lifetime of the object.
// When you instantiate a reference type using the new operator, it stays in memory until it goes out of scope, whereas automatically created primitive wrapper objects exist for only one line of code before they are destroyed. This means that properties and methods cannot be added at runtime.”

s1 = 'some text'
s1.color = 'red'
console.log(s1.color) // undefined
// “the String object that was created in the second line is destroyed by the time the third line is executed.
// The third line creates its own String object, which doesn’t have the color property.”

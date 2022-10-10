const cat = {
  name: {
    first: 'Skoda',
    last: 'Scratch',
  },
  color: 'Red',
}

Object.defineProperty(cat, 'name', { configurable: false })
// console.log(Object.defineProperty(cat, "name", { enumerable: false })); // TypeError: Cannot redefine property: name

console.log(delete cat.name) // false

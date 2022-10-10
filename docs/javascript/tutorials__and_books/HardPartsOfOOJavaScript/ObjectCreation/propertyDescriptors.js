const cat = {
  name: 'Joe',
  color: 'Some color',
}
console.log(cat) // { name: 'Joe', color: 'Some color' }
console.log(Object.getOwnPropertyDescriptor(cat, 'name'))
/**
 * { value: 'Joe',
  writable: true,
  enumerable: true,
  configurable: true }
 */

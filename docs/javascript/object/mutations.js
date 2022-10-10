// https://daveceddia.com/javascript-references/
const book = {
  title: 'Tiny Habits',
  author: 'BJ Fogg',
  isCheckedOut: false,
}

const backup = book

book.isCheckedOut = true

console.log(backup === book) // true

// Primitive values as function arguments
function doesNotLeak(word) {
  // eslint-disable-next-line no-param-reassign,@typescript-eslint/no-unused-vars
  word = 'word'
}
const test = 'hello'
doesNotLeak(test)
console.log(test) // hello

// Objects as function arguments
function checkoutBook(anotherBook) {
  // eslint-disable-next-line no-param-reassign
  anotherBook.isCheckedOut = true
}
const anotherBook = {
  title: 'Tiny Habits',
  author: 'BJ Fogg',
  isCheckedOut: false,
}
checkoutBook(anotherBook)
console.log(anotherBook) // { title: 'Tiny Habits', author: 'BJ Fogg', isCheckedOut: true }

// Unmodified object
function pureCheckoutBook(yetAnotherBook) {
  const copy = { ...yetAnotherBook }
  copy.isCheckedOut = true
  return copy
}
const yetAnotherBook = {
  title: 'Tiny Habits',
  author: 'BJ Fogg',
  isCheckedOut: false,
}
const moreBooks = pureCheckoutBook(yetAnotherBook)
console.log(moreBooks) // { title: 'Tiny Habits', author: 'BJ Fogg', isCheckedOut: true }
console.log(yetAnotherBook) // { title: 'Tiny Habits', author: 'BJ Fogg', isCheckedOut: false }

// DOM examples - to try in a browser
// document.addEventListener('click', () => console.log('clicked'))
// document.removeEventListener('click', () => console.log('clicked'))

// eslint-disable-next-line @typescript-eslint/no-empty-function
const a = () => {}
// eslint-disable-next-line @typescript-eslint/no-empty-function
const b = () => {}
console.log(a === b) // false

// Unintended mutation
function minimum(array) {
  array.sort()
  return array[0]
}

const items = [7, 1, 9, 4]
const min = minimum(items)
console.log(min) // 1
console.log(items) // [ 1, 4, 7, 9 ]

// https://github.com/learn-co-students/for-each-lab-js-intro-000
const evens = [0, 2, 4, 6, 8, 10]

evens.forEach(even => {
  console.log(`${even} is not odd!`)
})

evens.forEach((even, index, array) => {
  console.log(`${even} is not odd!`)
})

//
function doToEvens(callback) {
  evens.forEach(callback)
}

// If array is not known beforehand
function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

// Example
function changeCompletely(element, index, array) {
  // eslint-disable-next-line no-param-reassign
  array[index] = `${(Math.random() * 100).toString()}!!!`
}

const animals = ['dog', 'fish', 'cat']
doToElementsInArray(animals, changeCompletely)
// log out animals
console.log(animals)

// Tasks
// Define a function, iterativeLog(), that accepts an array.
// Call .forEach() on this array, and inside the callback, log each element with
// the format ${index}: ${element}.
function iterativeLog(arr) {
  arr.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

// Define a function, iterate, that accepts a callback.
// Within the iterate() function, you should initialize an array — it can contain
// anything you want. Call .forEach() on this array, passing the callback to .forEach().
// Then return the array that you initialized.
function iterate(callback) {
  const arr = [1, 2, 3]
  arr.forEach(callback)
  return arr
}

// Define a function, doToArray that accepts an array and a callback.
// Call .forEach() on the array, passing the callback as the forEach callback.
function doToArray(array, callback) {
  array.forEach(callback)
}

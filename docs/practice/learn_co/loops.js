function forLoop(array) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 25; i += 1) {
    if (i === 1) {
      array.push('I am 1 strange loop.')
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }

  return array
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    // eslint-disable-next-line no-param-reassign
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())

  return array
}

// Break, continue, return

// Break
function doSomethingToString(str) {
  return str.toUpperCase()
}

const array = ['dog', 1, 'cat']

// eslint-disable-next-line no-plusplus
for (let i = 0, l = array.length; i < l; i += 1) {
  if (typeof array[i] !== 'string') {
    break
  }
  doSomethingToString(array[i])
} // we'd only call doSomethingToString() on "dog" before exiting out of the loop entirely.

const mostlyOne = [1, 1, 1, 1, 2, 1, 1, 3]

let notOne = null
// eslint-disable-next-line no-plusplus
for (let i = 0, l = mostlyOne.length; i < l; i += 1) {
  if (mostlyOne[i] !== 1) {
    notOne = mostlyOne[i]
    break
  }
} // Without that break statement, notOne would end up being equal to 3;
// but with the break, notOne is assigned 2, since 2 is the first element of the array that isn't 1

// Return
// eslint-disable-next-line consistent-return
function firstNotOne(arr) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0, l = arr.length; i < l; i += 1) {
    if (arr[i] !== 1) {
      return arr[i]
    }
  }
}

notOne = firstNotOne([1, 1, 1, 1, 1, 2, 1, 1, 1, 3])

// eslint-disable-next-line consistent-return
function firstNotEqual(arr1, value) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0, l = arr1.length; i < l; i += 1) {
    if (arr1[i] !== value) {
      return arr1[i]
    }
  }
  return 'All equal'
}

console.log(
  'firstNotEqual: 1',
  firstNotEqual(['dog', 'dog', 'dog', 'cat', 'mouse'], 'dog')
) // cat
console.log('firstNotEqual: 2', firstNotEqual([1, 1, 1, 1, 1, 1], 1)) // All equal

// Continue
// What if we want to perform a certain operation on all of the elements of an array,
// but we want to skip elements that don't need to change or
// that would otherwise mess up our applications if they underwent the given operation?
const scores = [3, 4, 10, 5, 11, 6]
// increment all scores < 10
// eslint-disable-next-line no-plusplus
for (let i = 0, l = scores.length; i < l; i += 1) {
  if (scores[i] >= 10) {
    // eslint-disable-next-line no-continue
    continue
  }

  // eslint-disable-next-line no-plusplus
  scores[i] += 1
}
console.log(scores) // [4, 5, 10, 6, 11, 7]

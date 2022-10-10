// https://nick.scialli.me/an-introduction-to-memoization-in-javascript/

/* eslint-disable no-plusplus */
const inefficientSquare = (num) => {
  let total = 0
  for (let i = 0; i < num; i += 1) {
    for (let j = 0; j < num; j++) {
      total++
    }
  }
  return total
}

/*
const start = new Date();
console.log(inefficientSquare(40000)); // 1414 ms
console.log(new Date() - start);

const start2 = new Date();
console.log(inefficientSquare(40000)); // 1403 ms
console.log(new Date() - start2);
*/

// Takes a reference to a function
const memoize = (func) => {
  // Creates a cache of results
  const results = {}
  // Returns a function
  return (...args) => {
    // Create a key for results cache
    const argsKey = JSON.stringify(args)
    // Only execute func if no cached value
    if (!results[argsKey]) {
      // Store function call result in cache
      results[argsKey] = func(...args)
    }
    // Return cached value
    return results[argsKey]
  }
}

const inefficientSquareMemo = memoize((num) => {
  let total = 0
  for (let i = 0; i < num; i += 1) {
    for (let j = 0; j < num; j++) {
      total++
    }
  }
  return total
})

const start = new Date()
console.log(inefficientSquareMemo(40000)) // 1433 ms
console.log(new Date() - start)

const start2 = new Date()
console.log(inefficientSquareMemo(40000)) // 0 ms
console.log(new Date() - start2)

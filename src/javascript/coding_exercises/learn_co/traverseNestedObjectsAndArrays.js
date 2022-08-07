// https://learn.co/lessons/traversing-nested-objects

// Objects in objects
const person = {
  name: 'Awesome Name',
  occupation: {
    title: 'Senior Manager of Awesome',
    yearsHeld: 2,
  },
  pets: [
    {
      kind: 'dog',
      name: 'Fiona',
    },
    {
      kind: 'cat',
      name: 'Ralph',
    },
  ],
}
console.log(person.occupation) // { title: "Senior Manager of Awesome", yearsHeld: 2 }
console.log(person.occupation.yearsHeld) // 2
// second pet's name - person.pets[1].name - "Ralph"

// Arrays in arrays
const collections = [1, [2, [4, [5, [6]], 3]]]

console.log(collections[1]) // [ 2, [ 4, [ 5, [Array] ], 3 ] ]
console.log(collections[1][1]) // [ 4, [ 5, [ 6 ] ], 3 ]
console.log(collections[1][1][1]) // [ 5, [ 6 ] ]
console.log(collections[1][1][1][1]) // [6]
console.log(collections[1][1][1][1][0]) // 6

// What if we have criteria for finding an element that we know is in a nested data structure?
// Let's implement a simple find function that takes two arguments:
// an array (which can contain sub-arrays) and a function that returns true for the thing
// that we're looking for.
function find(array, criteriaFn) {
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (criteriaFn(array[i])) {
      return array[i]
    }
  }
}

// The above will work for a flat array — but what if array is like collections
// and we want to find the first element that's > 5? We'll need some way to move down the
// levels of the array (like we described above).
function find2(array, criteriaFn) {
  // initialize two variables, `current`, and `next`
  // `current` keeps track of the element that we're
  // currently on, just like we did when unpacking the
  // array above; `next` is itself an array that keeps
  // track of the elements (which might be arrays!) that
  // we haven't looked at yet
  let current = array
  const next = []

  // hey, a `while` loop! this loop will only
  // trigger if `current` is truthy — so when
  // we exhaust `next` and, below, attempt to
  // `shift()` `undefined` (when `next` is empty)
  // onto `current`, we'll exit the loop
  while (current) {
    // if `current` satisfies the `criteriaFn`, then
    // return it — recall that `return` will exit the
    // entire function!
    if (criteriaFn(current)) {
      return current
    }

    // if `current` is an array, we want to push all of
    // its elements (which might be arrays) onto `next`
    if (Array.isArray(current)) {
      for (let i = 0, l = current.length; i < l; i += 1) {
        next.push(current[i])
      }
    }

    // after pushing any children (if there
    // are any) of `current` onto `next`, we want to take
    // the first element of `next` and make it the
    // new `current` for the next pass of the `while`
    // loop
    current = next.shift()
  }

  // if we haven't
  return null
}

// Try it with collections and the function n => n > 5 — does it return the result you'd expect?
// What about if we try the function n => (typeof n === 'number' && n > 5)

// Can you implement breadth-first search in such a way that it will work for both
// nested objects and nested arrays (or even — gasp! — a mix of both)?

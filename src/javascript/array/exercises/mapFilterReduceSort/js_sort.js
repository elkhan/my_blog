// https://medium.com/@winwardo/the-principle-of-least-astonishment-and-javascripts-sort-e98a734a30c9

const A = [3, 2, 18, 1]

const B = A.sort()
console.log('A sorted: ', A) // A sorted:  [ 1, 18, 2, 3 ]
console.log('B sorted A: ', B) // B sorted A:  [ 1, 18, 2, 3 ]

const C = B.push(9) // returns length

console.log(C) // 5
console.log(B.length) // 5

A[0] += 1

console.log('A: ', A) // A:  [ 2, 18, 2, 3, 9 ]
console.log('B: ', B) // B:  [ 2, 18, 2, 3, 9 ]
console.log('C: ', C) // C:  5

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
const list = ['Delta', 'alpha', 'CHARLIE', 'bravo']

// temporary array holds objects with position and sort-value
const mapped = list.map((el, i) => ({ index: i, value: el.toLowerCase() }))

console.log(mapped)
/*
[ { index: 0, value: 'delta' },
  { index: 1, value: 'alpha' },
  { index: 2, value: 'charlie' },
  { index: 3, value: 'bravo' } ]
 */

// sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1
  }
  if (a.value < b.value) {
    return -1
  }
  return 0
})

// container for the resulting order
const result = mapped.map(el => list[el.index])

console.log(result) // [ 'alpha', 'bravo', 'CHARLIE', 'Delta' ]

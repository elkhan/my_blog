/*
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-arrays
One key difference between the spread operator and array destructuring is that the spread operator
unpacks all contents of an array into a comma-separated list.
Consequently, you cannot pick or choose which elements you want to assign to variables.
Destructuring an array lets us do exactly that:
 */
const [a, b] = [1, 2, 3, 4, 5, 6]
console.assert(a === 1, 'a === 1')
console.assert(b === 2, 'b === 2')
const [c, d, , , e, f] = [1, 2, 3, 4, 5, 6]
console.assert(c === 1, 'c === 1')
console.assert(d === 2, 'd === 2')
console.assert(e === 5, 'e === 5')
console.assert(f === 6, 'f === 6')

// Swap array values
const aSwap = 8
const bSwap = 6

console.assert(aSwap === 8, 'aSwap === 8')

console.assert(bSwap === 6, 'bSwap === 6') // [(bSwap, aSwap)] = [aSwap, bSwap]
console.assert(aSwap === 8, 'aSwap === 8')
console.assert(bSwap === 6, 'bSwap === 6')

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const [k, l, ...arrSpread] = [1, 2, 3, 4, 5, 7]
console.assert(k === 1, 'k === 1')
console.assert(l === 2, 'l === 2')
const temp = [3, 4, 5, 7]
console.assert(
  arrSpread.every((v, i) => v === temp[i]),
  'arrSpread === [3, 4, 5, 7]'
)

// Example
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function removeFirstTwo(list) {
  const [, , ...arr] = list
  return arr
}
const arr = removeFirstTwo(source)
const tempSource = [3, 4, 5, 6, 7, 8, 9, 10]
console.assert(
  arr.every((v, i) => v === tempSource[i]),
  'arr == [3, 4, 5, 6, 7, 8, 9, 10]'
)

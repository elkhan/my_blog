/* eslint-disable no-bitwise */
/*

Given the array of IDs, which contains many duplicate integers
and one unique integer, find the unique integer.

*/

// O(n^2): loop in loop
function findUniqueBrute(array) {
  let result
  const n = array.length

  for (let i = 0; i < n; i += 1) {
    for (let j = i; j < n; j++) {
      if (array[i] !== array[j]) {
        result = array[i]
      }
    }
  }

  return result
}

// O(2n): loop + loop => O(n) + O(n) space
function findUniqueHash(array) {
  const n = array.length
  const hash = {}
  let result

  for (let i = 0; i < n; i += 1) {
    if (array[i] in hash) {
      hash[array[i]] += 1
    } else {
      hash[array[i]] = 1
    }
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const j in hash) {
    if (hash[j] === 1) {
      result = j
    }
  }

  return result
}

// O(n) with no space: deep into Bits for solution
function findUniqueXor(array) {
  let result = 0
  const n = array.length

  for (let i = 0; i < n; i += 1) {
    result ^= array[i]
  }

  return result
}

const uni1 = findUniqueBrute([1, 1, 5, 5, 3, 6, 6])
const uni2 = findUniqueHash([1, 1, 5, 5, 3, 6, 6])
const uni3 = findUniqueXor([1, 1, 5, 5, 3, 6, 6])

console.assert(uni1 === 3, `${uni1} should eql 3 findUniqueBrute`)
console.assert(uni2 === '3', `${uni2} should eql 3 findUniqueHash`)
console.assert(uni3 === 3, `${uni3} should eql 3 - findUniqueXor`)

console.log('all passed')

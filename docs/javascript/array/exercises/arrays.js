const nums = []
for (let i = 0; i < 10; i += 1) {
  nums[i] = i + 1
}
console.log(nums)

let sum = 0
const sumNums = [1, 2, 3, 5, 8, 13, 21]
for (let i = 0; i < sumNums.length; i += 1) {
  sum += sumNums[i]
}
console.log(sum) // 53

// Arrays from strings
const sentence = 'the quick brown fox jumped over the lazy dog'
const words = sentence.split(' ')
for (let i = 0; i < words.length; i += 1) {
  console.log(`word ${i} : ${words[i]}`)
}
/*
word 0 : the
word 1 : quick
word 2 : brown
word 3 : fox
word 4 : jumped
word 5 : over
word 6 : the
word 7 : lazy
word 8 : dog
 */

// Aggregate array operations
const sameNums = nums // creates a reference or in other words a shallow copy
nums[0] = 400
console.log(sameNums[0]) // 40

// deep copy
function copy(arr1, arr2) {
  for (let i = 0; i < arr1.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    arr2[i] = arr1[i]
  }
}
const notSameNums = []
copy(nums, notSameNums)
nums[0] = 100
console.log(notSameNums[0]) // 400

// https://nick.scialli.me/exploring-the-two-sum-interview-question-in-javascript/
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
const twoSum = (nums, total) => {
  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === total) {
        return [nums[i], nums[j]]
      }
    }
  }
}

console.log(twoSum([1, 2, 3], 4)) // [1, 3]
console.log(twoSum([3, 9, 12, 20], 21)) // [9, 12]
console.log(twoSum([5, 19, 54, 2, 35, 1, 34, 90, 11, 5, 7, 8, 9, 10], 43)) // [35, 8]

/**/
// eslint-disable-next-line no-unused-vars
const twoSumCalc = (nums, total) => {
  let iterations = 0
  const startTime = new Date()
  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = i + 1; j < nums.length; j++) {
      iterations++
      if (nums[i] + nums[j] === total) {
        console.log(`Iterations: ${iterations}`, `Time: ${new Date() - startTime}ms`)
        return [nums[i], nums[j]]
      }
    }
  }
}

const len = 100000
const bigArr = new Array(len).fill(1)
bigArr[len - 2] = 9
bigArr[len - 1] = 10
// eslint-disable-next-line no-unused-vars
const total = 19
// twoSumCalc(bigArr, total); // Iterations: 4999950000 Time: 18021ms

/**/
const twoSumHashTable = (nums, totalVal) => {
  let iterations = 0
  const startTime = new Date()
  // Keep track of previous array values
  const previousValues = {}

  for (let i = 0; i < nums.length; i += 1) {
    // What previous value needs to exist for
    // us to have found our solution?
    iterations++
    const complement = totalVal - nums[i]

    if (previousValues[complement]) {
      console.log(`Iterations: ${iterations}`, `Time: ${new Date() - startTime}ms`)
      return [complement, nums[i]]
    }

    // This current array item now becomes
    // a previous value
    previousValues[nums[i]] = true
  }
}

twoSumHashTable(bigArr, total) // Iterations: 100000 Time: 5ms

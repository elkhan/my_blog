// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

export const moveZeros = (nums: number[]) => {
  const n = nums.length
  for (let i = n; i >= 0; i -= 1) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
    }
  }
  return nums
}

export const moveZeroes1 = (nums: number[]) => {
  let { length } = nums
  for (let i = 0; i < length; i += 1) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      length -= 1
      i -= 1
    }
  }
  return nums
}

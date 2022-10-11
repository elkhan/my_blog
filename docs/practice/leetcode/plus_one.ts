// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

// https://www.youtube.com/watch?v=uQdy914JRKQ&list=PLBZBJbE_rGRVnpitdvpdY9952IsKMDuev&index=6

// TODO add perf comparison

export const plusOne = (nums: number[]) => {
  let carry = 1
  const result = Array(nums.length).fill(0)
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    const total = nums[i] + carry
    if (total === 10) {
      carry = 1
    } else {
      carry = 0
    }
    result[i] = total % 10
  }
  if (carry === 1) {
    result.unshift(1)
  }
  return result
}

export const plusOne1 = (nums: number[]) => {
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    if (nums[i] === 9) {
      // eslint-disable-next-line no-param-reassign
      nums[i] = 0
      if (i === 0) {
        nums.unshift(1)
      }
    } else {
      // eslint-disable-next-line no-param-reassign
      nums[i] += 1
      break
    }
  }
  return nums
}

export const plusOne2 = (nums: number[]) => {
  let carry = 1
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    // eslint-disable-next-line no-param-reassign
    nums[i] += carry
    if (carry > 0) carry = 0
    if (nums[i] > 9) {
      carry = 1
      // eslint-disable-next-line no-param-reassign
      nums[i] = 0
    }
  }
  if (carry > 0) nums.unshift(carry)
  return nums
}

export const plusOne3 = (nums: number[]) => {
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    if (nums[i] === 9) {
      // eslint-disable-next-line no-param-reassign
      nums[i] = 0
    } else {
      // eslint-disable-next-line no-param-reassign
      nums[i] += 1
      return nums
    }
  }
  if (nums[0] === 0) {
    nums.unshift(1)
  }
  return nums
}

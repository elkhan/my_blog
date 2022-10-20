// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

export const containsDuplicate = (nums: number[]): boolean => {
  const hash: { [index: number]: number } = {}
  let result = false
  const n = nums.length
  for (let i = 0; i < n; i += 1) {
    if (nums[i] in hash) {
      hash[nums[i]] += 1
    } else {
      hash[nums[i]] = 1
    }
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const j in hash) {
    if (hash[j] > 1) {
      result = true
    }
  }
  return result
}

export const containsDuplicateSet = (nums: number[]) =>
  new Set(nums).size !== nums.length

export const containsDuplicateSorted = (nums: number[]) => {
  nums.sort((a, b) => a - b)
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] === nums[i - 1]) return true
  }
  return false
}

export const containsDuplicateMap = (nums: number[]) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i += 1) {
    if (map.has(nums[i])) return true
    map.set(nums[i], i)
  }
  return false
}

export const containsDuplicateHash = (nums: number[]): boolean => {
  const hash: { [index: number]: number } = {}
  for (const num of nums) {
    if (hash[num]) return true
    hash[num] = Number(true)
  }
  return false
}

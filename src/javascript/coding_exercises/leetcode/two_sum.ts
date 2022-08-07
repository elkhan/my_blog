// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

// Brute force O(n2)
export const twoSum = (nums: number[], target: number) => {
  const result = []
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length; j += 1) {
      if (i === j) {
        // eslint-disable-next-line no-continue
        continue
      }
      if (nums[i] + nums[j] === target) {
        result.push(i)
      }
    }
  }
  return result
}

/*
Map
 */
export const twoSumMap = (nums: number[], target: number) => {
  const map = new Map()
  const n = nums.length
  const result = []
  for (let i = 0; i < n; i += 1) {
    const sum = target - nums[i]
    if (map.has(nums[i])) {
      result.push(map.get(nums[i]), i)
    }
    map.set(sum, i)
  }
  return result
}

/*
Hash
 */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line consistent-return
export const twoSumHash = (nums: number[], target: number) => {
  const hash = {} as Record<number, number>
  const n = nums.length
  for (let i = 0; i < n; i += 1) {
    const sum = target - nums[i]
    if (sum in hash) {
      return [hash[sum], i]
    }
    // TODO: fix TS7030: Not all code paths return a value.
    hash[nums[i]] = i
  }
}

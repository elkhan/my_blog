// eslint-disable-next-line max-len
// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// eslint-disable-next-line import/no-unresolved
import './object.extension'

export const sockMerchant = (n: number, nums: number[]) => {
  const map = new Map()
  let pairs = 0
  for (let i = 0; i < n; i += 1) {
    if (map.has(nums[i])) {
      const count = map.get(nums[i]) + 1
      map.set(nums[i], count)
      if (map.get(nums[i]) % 2 === 0) {
        pairs += 1
      }
    } else {
      map.set(nums[i], 1)
    }
  }
  return pairs
}

export const sockMerchantSet = (nums: number[]) => {
  let pairs = 0
  const socksSet = new Set(nums)
  socksSet.forEach((item) => {
    if (item) {
      pairs += Math.floor(nums.count(item) / 2)
    }
  })
  return pairs
}

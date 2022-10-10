// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
// https://leetcode.com/problems/intersection-of-two-arrays-ii/discuss/1100793/JavaScript-2-Solutions-Using-Sorting-and-HashMap

export const intersect = (nums1: number[], nums2: number[]) => {
  const nums1Map = new Map()
  const answer = []

  // eslint-disable-next-line no-restricted-syntax
  for (const n of nums1) {
    nums1Map.set(n, (nums1Map.get(n) || 0) + 1)
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const n of nums2) {
    if (nums1Map.has(n)) {
      answer.push(n)
      nums1Map.set(n, nums1Map.get(n) - 1)
      if (!nums1Map.get(n)) {
        nums1Map.delete(n)
      }
    }
  }
  return answer
}

/*
Sorting
 */
export const intersectSort = (nums1: number[], nums2: number[]) => {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  const answer = []

  let n1 = 0
  let n2 = 0

  while (n1 < nums1.length && n2 < nums2.length) {
    if (nums1[n1] === nums2[n2]) {
      answer.push(nums1[n1])
      n1 += 1
      n2 += 1
    } else if (nums1[n1] < nums2[n2]) {
      n1 += 1
    } else {
      n2 += 1
    }
  }
  return answer
}

/*
Hash
 */
export const intersectHash = (nums1: number[], nums2: number[]) => {
  const hash: { [index: number]: number } = {}
  const result = []
  // eslint-disable-next-line no-restricted-syntax
  for (const num1 of nums1) {
    // eslint-disable-next-line no-unused-expressions
    hash[num1] ? (hash[num1] += 1) : (hash[num1] = 1)
  }
  // eslint-disable-next-line no-restricted-syntax
  for (const num2 of nums2) {
    if (hash[num2]) {
      result.push(num2)
      hash[num2] -= 1
      if (!hash[num2]) {
        delete hash[num2]
      }
    }
  }
  return result
}

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

export const removeDuplicates = (nums: number[]) => {
  let curr = 0
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === nums[curr]) {
      // eslint-disable-next-line no-continue
      continue
    }
    // eslint-disable-next-line no-param-reassign
    nums[(curr += 1)] = nums[i]
  }
  return curr + 1
}

/*
splice() and hashTable
 */
export const removeDuplicatesSplice = (nums: number[]) => {
  const seen: { [index: number]: boolean } = {}
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    const curr = nums[i]
    if (seen[curr]) {
      nums.splice(i, 1)
    }
    seen[curr] = true
  }
}

/*
filter()
 */
export const filterDuplicatesFilter = (arr: number[]) =>
  arr.filter((item, index, array) => !index || item !== array[index - 1])

/*
Hash table
 */
export const removeDuplicatesHashTable = (nums: number[]) => {
  const seen: { [index: number]: boolean } = {}
  // eslint-disable-next-line no-return-assign
  return nums.filter((item) =>
    Object.prototype.hasOwnProperty.call(seen, item) ? false : (seen[item] = true)
  )
}

/*
indexOf() and filter()
 */
export const removeDuplicatesIndexOf = (n: number[]) =>
  n.filter((item, index) => n.indexOf(item) === index)

/*
Set
 */
export const removeDuplicatesSet = (nums: number[]) => [...new Set(nums)]

/*
indexOf()
 */
export const printIndexOfDuplicate = (nums: number[]) => {
  nums.forEach((item, index) => {
    console.log(`Item: ${item}, index: ${index}, indexOf: ${nums.indexOf(item)}`)
  })
}

export const binarySearch = (nums: number[], target: number): number | null => {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (target === nums[mid]) return mid
    if (target > nums[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return null
}

export const createArray = (num: number): number[] => {
  const arr = []
  for (let i = 1; i <= num; i += 1) {
    arr.push(i)
  }
  return arr
}

/*
 Binary Search recursive
 */

export const binarySearchRecursive = (
  nums: number[],
  target: number,
  start = 0,
  end: number = nums.length - 1
): number | null => {
  if (start > end) return null

  const middle = Math.floor((start + end) / 2)

  if (target === nums[middle]) return middle

  if (target > nums[middle]) {
    return binarySearchRecursive(nums, target, middle + 1, end)
  }
  return binarySearchRecursive(nums, target, start, middle - 1)
}

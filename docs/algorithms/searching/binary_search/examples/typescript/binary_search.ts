export const binarySearch = (nums: number[], target: number): number | null => {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    const mid = Math.floor((start + end) / 2)
    if (nums[mid] === target) return mid
    if (target > nums[mid]!) {
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
 BINARY SEARCH ARRAY
 Write a function that takes a sorted array and a value and returns the index of the value in the array. Return null if the value is not found in the array. What is the time complexity?
 Extra credit: Implement the function both iteratively and recursively.
 */

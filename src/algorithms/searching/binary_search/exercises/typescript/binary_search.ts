export const binarySearch = (nums: number[], target: number): number | null => {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid
    }

    if (target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return null
}

/*
 BINARY SEARCH ARRAY
 *** Description
 Given a sorted array and a value, determine if the value is in the array using the binary search (divide and conquer) method.
 *** Exercises
 Write a function that takes a sorted array and a value and returns the index of the value in the array. Return null if the value is not found in the array. What is the time complexity?
 Extra credit: Implement the function both iteratively and recursively.
 */

// https://algodaily.com/lessons/using-the-two-pointer-technique

export const findSum = (nums: number[], target: number) => {
  // Pointers
  let low = 0
  let high = nums.length - 1

  while (low < high) {
    const result = nums[low] + nums[high]
    if (result === target) {
      return [target, nums[low], nums[high]]
    }
    if (result < target) {
      low += 1
    } else {
      high -= 1
    }
  }
  return false
}

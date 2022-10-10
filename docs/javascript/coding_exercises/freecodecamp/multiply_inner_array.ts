export const multiplyAll = (nums: number[][]) => {
  let product = 1
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums[i].length; j += 1) {
      product *= nums[i][j]
    }
  }
  return product
}

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops

export const filteredArray = (nums: (number | string)[][], elem: number) => {
  const newArr = []
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i].indexOf(elem) === -1) {
      newArr.push(nums[i])
    }
  }
  return newArr
}

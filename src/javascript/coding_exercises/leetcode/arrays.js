const arr = [2, 2, 1]
/*
function singleNumber(nums) {
  // Array.from(new Set(items))
  return new Set(nums)
}
console.log(singleNumber(arr))
 */
/*
function singleNumber(nums) {
  return [...new Set(nums)]
}
console.log(singleNumber(arr))
 */
/*
function singleNumber(nums) {
  return nums.filter((elem, index, array) => array.indexOf(elem) === index)
}
console.log(singleNumber(arr))
 */
function findUniqueXor(array) {
  let result = 0
  const n = array.length

  for (let i = 0; i < n; i += 1) {
    // eslint-disable-next-line no-bitwise
    result ^= array[i]
  }

  return result
}

console.log(findUniqueXor(arr))

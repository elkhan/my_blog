const arr = [4, 1, 2, 1, 2]

function singleNumber(nums) {
  return nums.find(x => nums.indexOf(x) === nums.lastIndexOf(x))
}

console.log(singleNumber(arr))

function singleNumberXOR(nums) {
  // eslint-disable-next-line no-bitwise
  return nums.reduce((prev, curr) => prev ^ curr, 0)
}

console.log(singleNumberXOR(arr))

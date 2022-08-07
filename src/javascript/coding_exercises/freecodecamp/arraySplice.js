/*
Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.

https://forum.freecodecamp.org/t/guide-slasher-flick/16047
*/

function slasher(arr, num) {
  arr.splice(0, num)
  return arr
}
expect(slasher([1, 2, 3, 4], 2)).to.deep.equal([3, 4]) // [3, 4]
expect(slasher([1, 2, 3, 4], 3)).to.deep.equal([4]) // [4]

/*
slice()
 */
function slasher2(arr, num) {
  return arr.slice(num)
}

expect(slasher2([1, 2, 3, 4], 2)).to.deep.equal([3, 4]) // [3, 4]
expect(slasher2([1, 2, 3, 4], 1)).to.deep.equal([2, 3, 4]) // [2, 3, 4]

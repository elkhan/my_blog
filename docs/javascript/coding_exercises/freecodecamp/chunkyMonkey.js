// eslint-disable-next-line import/no-extraneous-dependencies

/*
Write a function that splits an array (first argument) into groups the length of size (second argument)
and returns them as a two-dimensional array.
https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-chunky-monkey/16005
*/
function chunkArrayInGroups(arr, size) {
  const resultArray = []
  for (let i = 0; i < arr.length; i += size) {
    resultArray.push(arr.slice(i, i + size))
  }
  return resultArray
}
const array = [0, 1, 2, 3, 4, 5, 6]
expect(chunkArrayInGroups(array, 3)).to.deep.equal([[0, 1, 2], [3, 4, 5], [6]])

/*
while loop
 */
function whileChunkArrayInGroups(arr, size) {
  const resultArray = []
  let i = 0
  while (i < arr.length) {
    resultArray.push(arr.slice(i, i + size))
    i += size
  }
  return resultArray
}
expect(whileChunkArrayInGroups(array, 3)).to.deep.equal([[0, 1, 2], [3, 4, 5], [6]])

/*
Using splice()
 */
function sliceChunkArrayInGroups(arr, size) {
  const resultArray = []
  while (arr.length) {
    resultArray.push(arr.splice(0, size))
  }
  return resultArray
}
expect(sliceChunkArrayInGroups(array, 3)).to.deep.equal([[0, 1, 2], [3, 4, 5], [6]])

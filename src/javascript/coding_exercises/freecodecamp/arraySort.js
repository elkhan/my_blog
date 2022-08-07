/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20]
and 19 is less than 20 (index 2) and greater than 5 (index 1).

https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-where-do-i-belong/16094
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/

function whereItBelongs(arr, num) {
  const sortedArray = arr.sort((a, b) => a - b)
  for (let i = 0; i < sortedArray.length; i += 1) {
    if (sortedArray[i] >= num) {
      return i
    }
  }
  return sortedArray.length
}
expect(whereItBelongs([10, 20, 30, 40, 50], 35)).to.eq(3) // 3
expect(whereItBelongs([10, 20, 30, 40, 50], 27)).to.eq(2) // 2
expect(whereItBelongs([10, 20, 30, 40, 50], 55)).to.eq(5) // 5

/*
while loop
 */
function whereItBelongs2(arr, num) {
  arr.sort((a, b) => a - b)
  let i = 0
  while (num > arr[i]) {
    i += 1
  }
  return i
}
expect(whereItBelongs2([1, 2, 3, 4], 1.5)).to.eq(1) // 1
expect(whereItBelongs2([20, 3, 5], 19)).to.eq(2) // 2

/*
indexOf()
First sort the array in ascending order, this is currently done using array functions for minimal footprint.
Once the array it is sorted, we directly apply the .findIndex() where we are going to compare every element in the array
until we find where num <= currNum meaning where the number we want to insert is less or equal to the current number number in the iteration.
Then we use ternary operations to check whether we got an index returned or -1.
We only get -1 when the index was not found meaning when we get a false for all elements in the array,
and for such case, it would mean that num should be inserted at the end of the list hence why we use arr.length.
 */

function whereItBelongs3(arr, num) {
  const index = arr.sort((curr, next) => curr - next).findIndex((currNum) => num <= currNum)
  return index === -1 ? arr.length : index
}
expect(whereItBelongs3([1, 2, 3, 4], 2.5)).to.eq(2) // 2
expect(whereItBelongs3([20, 3, 5, 10], 19)).to.eq(3) // 3
/*
concat()
 */

function whereItBelongs4(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num)
}
expect(whereItBelongs4([1, 2, 3, 4], 2.5)).to.eq(2) // 2
expect(whereItBelongs4([20, 3, 5, 10], 19)).to.eq(3) // 3

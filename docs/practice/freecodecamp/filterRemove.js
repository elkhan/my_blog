/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.

https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-seek-and-destroy/16046
*/

/*
1
 */

function destroyer() {
  // eslint-disable-next-line prefer-rest-params
  const args = Array.from(arguments)
  const firstArgsArray = args.shift()
  return firstArgsArray.filter((el) => !args.includes(el))
}
expect(destroyer([1, 2, 3, 1, 2, 3], 2, 3)).to.deep.equal([1, 1]) // [1, 1]
expect(destroyer([1, 2, 3, 1, 2, 3], 2)).to.deep.equal([1, 3, 1, 3]) // [1, 3, 1, 3]
expect(destroyer([1, 2, 3, 1, 2, 3], 3)).to.deep.equal([1, 2, 1, 2]) // [1, 2, 1, 2]

/*
2
 */

function destroyer2(arr) {
  // eslint-disable-next-line prefer-rest-params
  const args = Array.prototype.slice.call(arguments)

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < args.length; j += 1) {
      if (arr[i] === args[j]) {
        // eslint-disable-next-line no-param-reassign
        delete arr[i]
      }
    }
  }
  return arr.filter(Boolean) // to filter out empty slots
}
expect(destroyer2([1, 2, 3, 1, 2, 3], 2, 3)).to.deep.equal([1, 1]) // [1, 1]
expect(destroyer2([1, 2, 3, 1, 2, 3], 2)).to.deep.equal([1, 3, 1, 3]) // [1, 3, 1, 3]
expect(destroyer2([1, 2, 3, 1, 2, 3], 3)).to.deep.equal([1, 2, 1, 2]) // [1, 2, 1, 2]

/*
3
Declare a variable named args and set it equal to a new Array object from() the arguments passed into the function.
On the same or next line, use the slice() method on args starting from the second index, 1.
This separates the arguments used for filtering into their own array of args.
Return the filtered array, using includes() in the callback function to check if val is not in args;
returning true to keep the value in the original array or false to remove it.
 */

function destroyer3(args) {
  // eslint-disable-next-line prefer-rest-params
  const arr = Array.from(arguments).slice(1)
  /*
        args [ 1, 2, 3, 1, 2, 3 ]
        arr [ 2, 3 ]
    */
  return args.filter((val) => !arr.includes(val)) // return only those that are not included in arr - [1, 1]
}
expect(destroyer3([1, 2, 3, 1, 2, 3], 2, 3)).to.deep.equal([1, 1]) // [1, 1]
expect(destroyer3([1, 2, 3, 1, 2, 3], 2)).to.deep.equal([1, 3, 1, 3]) // [1, 3, 1, 3]
expect(destroyer3([1, 2, 3, 1, 2, 3], 3)).to.deep.equal([1, 2, 1, 2]) // [1, 2, 1, 2]

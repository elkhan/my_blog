/*
Return true if the string in the first element of the array contains all the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
Lastly, ["Alien", "line"], should return true because all the letters in "line" are present in "Alien".

https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-mutations/16025
https://forum.freecodecamp.org/t/javascript-array-prototype-every/14287
*/

/*
Procedural
 */
function mutationProcedural(arr) {
  const firstString = arr[0].toLowerCase()
  const secondString = arr[1].toLowerCase()

  for (let i = 0; i < secondString.length; i += 1) {
    if (!firstString.includes(secondString[i])) {
      return false
    }
  }
  return true
}
expect(mutationProcedural(['Hello', 'hello'])).to.eq(true)
expect(mutationProcedural(['Hello', 'hey'])).to.eq(false)
expect(mutationProcedural(['Alien', 'line'])).to.eq(true)
expect(mutationProcedural(['Alien', 'lines'])).to.eq(false)

/*
Declarative
 */
function mutationDeclarative(arr) {
  return arr[1]
    .toLowerCase()
    .split('')
    .every((letter) => arr[0].toLowerCase().includes(letter))
}
expect(mutationDeclarative(['Hello', 'hello'])).to.eq(true)
expect(mutationDeclarative(['Hello', 'hey'])).to.eq(false)
expect(mutationDeclarative(['Alien', 'line'])).to.eq(true)
expect(mutationDeclarative(['Alien', 'lines'])).to.eq(false)

/*
Recursive
 */
function mutationRecursive([target, test], i = 0) {
  // eslint-disable-next-line no-param-reassign
  target = target.toLowerCase()
  // eslint-disable-next-line no-param-reassign
  test = test.toLowerCase()
  // eslint-disable-next-line no-nested-ternary
  return i >= test.length
    ? true
    : !target.includes(test[i])
    ? false
    : mutationRecursive([target, test], i + 1)
}
expect(mutationRecursive(['Hello', 'hello'])).to.eq(true)
expect(mutationRecursive(['Hello', 'hey'])).to.eq(false)
expect(mutationRecursive(['Alien', 'line'])).to.eq(true)
expect(mutationRecursive(['Alien', 'lines'])).to.eq(false)

/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

https://stackoverflow.com/questions/3745515/what-is-the-difference-between-substr-and-substring
*/

function confirmEnding(str, target) {
  const targetLength = target.length
  const endingString = str.substr(-targetLength)
  // if (endingString === target) {
  //     return true
  // }
  // return false
  return endingString === target
}
expect(confirmEnding('Open sesame', 'same')).to.eq(true) // true
expect(confirmEnding('Open sesame', 'me')).to.eq(true) // true
expect(confirmEnding('Open sesame', 'lame')).to.eq(false) // false

/*
2
 */

function confirmEnding2(str, target) {
  return str.substr(-target.length) === target
}
expect(confirmEnding2('Open sesame', 'same')).to.eq(true) // true
expect(confirmEnding2('Open sesame', 'men')).to.eq(false) // false
expect(confirmEnding2('Open sesame', 'dame')).to.eq(false) // false

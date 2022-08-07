/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.
Note that inserting the three dots to the end will add to the string length.
However, if the given maximum string length num is less than or equal to 3,
then the addition of the three dots does not add to the string length in determining the truncated string.

https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-truncate-a-string/16089
*/

function truncateString(str, num) {
  let truncatedStr = ''
  if (num <= 3) {
    truncatedStr = str.slice(0, num)
    return `${truncatedStr}...`
  }
  if (str.length > num) {
    truncatedStr = str.slice(0, num - 3)
    return `${truncatedStr}...`
  }
  return str
}
expect(truncateString('A-', 1)).to.eq('A...') // A...
expect(truncateString('Lorem', 4)).to.eq('L...') // L...

/*
2
 */

function truncateString2(str, num) {
  if (str.length > num && num > 3) {
    return `${str.slice(0, num - 3)}...`
  }
  if (str.length > num && num <= 3) {
    return `${str.slice(0, num)}...`
  }
  return str
}
expect(truncateString2('A-', 1)).to.eq('A...') // A...
expect(truncateString2('Lorem', 4)).to.eq('L...') // L...

/*
3
 */

function truncateString3(str, num) {
  if (str.length <= num) {
    return str
  }
  return `${str.slice(0, num > 3 ? num - 3 : num)}...`
}
expect(truncateString3('A-', 1)).to.eq('A...') // A...
expect(truncateString3('Lorem', 4)).to.eq('L...') // L...

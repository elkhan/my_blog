/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-title-case-a-sentence/16088
 */

function titleCase(str) {
  const newStr = str
    .toLowerCase()
    .split(' ')
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
  return newStr.join(' ')
}
expect(titleCase("I'm a little tea pot")).to.eq("I'm A Little Tea Pot") // I'm A Little Tea Pot

/*
map()
 */

function titleCaseMap(str) {
  const convertToArray = str.toLowerCase().split(' ')
  const result = convertToArray.map((val) =>
    val.replace(val.charAt(0), val.charAt(0).toUpperCase())
  )
  return result.join(' ')
}
expect(titleCaseMap("I'm a little tea pot")).to.eq("I'm A Little Tea Pot") // I'm A Little Tea Pot

/*
Regexp
 */

function titleCaseRegexp(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase())
}
expect(titleCaseRegexp("I'm a little tea pot")).to.eq("I'm A Little Tea Pot")

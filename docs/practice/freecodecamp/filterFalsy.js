/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-falsy-bouncer/16014
*/

function bouncer(arr) {
  return arr.filter(Boolean)
}
expect(bouncer(['a', 'b', 'c', 1, 0, '', null])).to.deep.equal(['a', 'b', 'c', 1])

/*
2
 */

function bouncer2(arr) {
  // eslint-disable-next-line array-callback-return,consistent-return
  return arr.filter((value) => !!value)
}
expect(bouncer2(['a', 'b', 'c', 1, 0, '', null])).to.deep.equal(['a', 'b', 'c', 1])

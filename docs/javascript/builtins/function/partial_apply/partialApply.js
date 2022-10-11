// https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339
// https://www.youtube.com/watch?v=XcS-LdEBUkE
/*
Partial application transforms a function into another function with smaller arity.
 */

function volume(l) {
  return (w, h) => l * w * h
}
const hCy = volume(70)
hCy(203, 142)
hCy(220, 122)
hCy(120, 123)

expect(volume(70)(90, 30)).to.eq(189000) // 189000

// vs a curried function
function volumeCurr(x) {
  return (y) => (z) => x * y * z
}
expect(volumeCurr(70)(90)(30)).to.eq(189000) // 189000

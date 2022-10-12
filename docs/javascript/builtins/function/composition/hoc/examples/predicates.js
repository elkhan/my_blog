// https://codepen.io/Universalist/post/predicates-in-javascript

function or(p1, p2) {
  return function (x) {
    return p1(x) || p2(x)
  }
}

function negative(x) {
  return x < 0
}
function positive(x) {
  return x > 0
}
const nonzero = or(negative, positive)
expect(nonzero(-5)).to.eq(true)
expect(nonzero(0)).to.eq(false)
expect(nonzero(5)).to.eq(true)

function and(p1, p2) {
  return function (x) {
    return p1(x) && p2(x)
  }
}
// eslint-disable-next-line no-unused-vars
function not(p) {
  return function (x) {
    return !p(x)
  }
}

/*
These functions return predicates. For example less(10) is a predicate that returns true for all numbers less than 10, so less(10)(4) would be true
 */

function less(x) {
  return function (y) {
    return y < x
  }
}
function greater(x) {
  return function (y) {
    return y > x
  }
}

const inSomeRange = or(less(-20), and(greater(5), less(10)))

expect(inSomeRange(-40)).to.eq(true)
expect(inSomeRange(-6)).to.eq(false)
expect(inSomeRange(7)).to.eq(true)
expect(inSomeRange(11)).to.eq(false)

const data = [1, 2, 3, 4, 5, 6, 7]
const result = data.filter(or(less(3), greater(6)))
expect(result).to.deep.eq([1, 2, 7])

module.exports = {}

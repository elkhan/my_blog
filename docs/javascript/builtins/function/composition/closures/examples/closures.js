// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const { expect } = require('chai')

function sayHello(name) {
  const text = `Hello ${name}`
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const say = (() => {
    console.log(text)
    // say();
  })()
}

sayHello('Joe')

function anotherSayHello(name) {
  const text = `Hello ${name}`
  return () => text
}

const anotherSay = anotherSayHello('Bob')
expect(anotherSay()).to.eq('Hello Bob')

function sayCount() {
  // Local variable that ends up within closure
  let num = 42
  const say = () => {
    console.log(num)
  }
  // eslint-disable-next-line no-plusplus
  num += 1
  return say
}

const sayNumber = sayCount()
sayNumber()

const closure = (() => {
  let counter = 0
  // eslint-disable-next-line no-return-assign
  return () =>
    // eslint-disable-next-line no-return-assign
    (counter += 1)
})()
console.log(closure())
console.log(closure())

/*
More example
 */

function favoriteMovie(name) {
  function myFavoriteMovie(movie) {
    return `Hi ${name}, your favorite movie is ${movie}`
  }

  return myFavoriteMovie
}

const user = favoriteMovie('Joe')

expect(user('Mad Max')).to.eq('Hi Joe, your favorite movie is Mad Max')
expect(user('Some other movie')).to.eq(
  'Hi Joe, your favorite movie is Some other movie'
)

/*
More examples
 */

const point =
  (x, y) =>
  // eslint-disable-next-line no-return-assign
  (dx, dy) => ({
    // eslint-disable-next-line no-param-reassign
    x: (x += dx),
    // eslint-disable-next-line no-param-reassign
    y: (y += dy)
  })

const pt = point(15, 5)

expect(pt(-5, 5)).to.eql({ x: 10, y: 10 })
expect(pt(-5, 5)).to.eql({ x: 5, y: 15 })
expect(pt(32, 90)).to.eql({ x: 37, y: 105 })

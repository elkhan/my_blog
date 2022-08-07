const { expect } = require('chai')

// https://medium.com/javascript-in-plain-english/referential-transparency-in-javascript-and-typescript-or-why-to-prefer-const-over-let-9fe241b0a7f3

const once = func => {
  let isCalled = false
  return (...args) => {
    if (!isCalled) {
      isCalled = true
      return func(...args)
    }
    return undefined
  }
}

const sendUsersLike = once(liked => liked)

expect(sendUsersLike('okay')).to.eq('okay')
expect(sendUsersLike('okay')).to.eq(undefined)

/*
https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-check-for-palindromes/16004
 */

function palindrome(str) {
  const originalStr = str
    .replace(/[\W_]+/g, '')
    .toLowerCase()
    .trim()
  const newStr = originalStr.split('').reverse().join('')
  return newStr === originalStr
}
expect(palindrome('_eye')).to.eq(true) // true
expect(palindrome('_eyes')).to.eq(false) // false

/*
2
 */

function palindrome2(str) {
  return (
    str.replace(/[\W_]/g, '').toLowerCase() ===
    str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('')
  )
}
expect(palindrome2('_eye')).to.eq(true) // true
expect(palindrome2('_eyes')).to.eq(false) // false

/*
3
 */

function palindrome3(str) {
  // eslint-disable-next-line no-param-reassign
  str = str.toLowerCase().replace(/[\W_]/g, '')

  for (let i = 0, len = str.length - 1; i < len / 2; i += 1) {
    if (str[i] !== str[len - i]) {
      return false
    }
  }
  return true
}
expect(palindrome3('_eye')).to.eq(true) // true
expect(palindrome3('_eyes')).to.eq(false) // false

/*
4
the fastest solution
 */

function palindrome4(str) {
  // assign a front and a back pointer
  let front = 0
  let back = str.length - 1

  // back and front pointers won't always meet in the middle, so use (back > front)
  while (back > front) {
    // increments front pointer if current character doesn't meet criteria
    while (str[front].match(/[\W_]/)) {
      front += 1
    }
    // decrements back pointer if current character doesn't meet criteria
    while (str[back].match(/[\W_]/)) {
      back -= 1
    }
    // finally does the comparison on the current character
    if (str[front].toLowerCase() !== str[back].toLowerCase()) {
      return false
    }

    front += 1

    back -= 1
  }

  // if the whole string has been compared without returning false, it's a palindrome!
  return true
}
expect(palindrome4('_eye')).to.eq(true) // true
expect(palindrome4('_eyes')).to.eq(false) // false
expect(palindrome4('Mr. Owl Ate My Metal Worm')).to.eq(true) // true
expect(palindrome4('Never Odd Or Even')).to.eq(true) // true
expect(palindrome4('Never Odd Or Even?')).to.eq(true) // true
expect(palindrome4('Never Odd Nor Even')).to.eq(false) // false

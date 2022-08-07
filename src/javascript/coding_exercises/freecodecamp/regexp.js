/*
https://www.freecodecamp.org/news/learn-regular-expressions-with-this-free-course-37511963d278/
 */

const testString =
  'Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.'

const expressionToGetSoftware = /software/gi
const softwareCount = testString.match(expressionToGetSoftware).length
expect(softwareCount).to.eq(1) // 1

const expressionAnd = /and/gi
const andCount = testString.match(expressionAnd).length
expect(andCount).to.eq(2) // 2

/*
https://medium.freecodecamp.org/regular-expressions-demystified-regex-isnt-as-hard-as-it-looks-617b55cf787
 */

const e = /^[0-9]+$/
const s = '42 digits 10'
const b = '4210'
expect(e.test(b)).to.eq(true) // true
expect(e.test(s)).to.eq(false) // false

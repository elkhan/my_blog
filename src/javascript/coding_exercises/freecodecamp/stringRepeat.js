function strRepeat(str, num) {
  if (num > 0) {
    // eslint-disable-next-line no-param-reassign
    str = str.repeat(num)
    return str
  }
  return `${str} no repeat`
}
expect(strRepeat('abc', 3)).to.eq('abcabcabc') // abcabcabc
expect(strRepeat('abc', 0)).to.eq('abc no repeat') // abc no repeat

/*
ternary
 */

function strRepeat2(str, num) {
  return num > 0 ? str.repeat(num) : ''
}
expect(strRepeat2('bcd', 2)).to.eq('bcdbcd') // bcdbcd

/*
recursion
 */

function strRepeat3(str, num) {
  if (num < 0) {
    return ''
  }
  if (num === 1) {
    return str
  }
  return str + strRepeat3(str, num - 1)
}
expect(strRepeat3('cde', 5)).to.eq('cdecdecdecdecde') // cdecdecdecdecde

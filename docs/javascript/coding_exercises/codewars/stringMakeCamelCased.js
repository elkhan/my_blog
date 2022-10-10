// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
// https://www.codewars.com/kata/517abf86da9663f1d2000003/solutions/javascript

function toCamelCase(str) {
  if (str.includes('-')) {
    return str
      .split('-')
      .map((word) => {
        if (str.split('-').indexOf(word) > 0) {
          return word.charAt(0).toUpperCase() + word.slice(1)
        }
        return word
      })
      .join('')
  }
  return str
    .split('_')
    .map((word) => {
      if (str.split('_').indexOf(word) > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
      return word
    })
    .join('')
}

console.log(toCamelCase('the_stealth_warrior'))
function toCamelCaseRegexp(str) {
  const regex = /[-_]\w/gi
  return str.replace(regex, (x) => x.charAt(1).toUpperCase())
}

console.log(toCamelCaseRegexp('A-B-C'))

/**
 * Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
 * Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
 * Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
 * Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
 */

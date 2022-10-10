/**
 * https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
 *
 * Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item.
 * It must return the display text as shown in the examples:
 * likes [] // must be "no one likes this"
 * likes ["Peter"] // must be "Peter likes this"
 * likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
 * likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
 * likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
 */

module.exports = function likes(names) {
  if (!names.length) {
    return 'no one likes this'
  }
  switch (names.length) {
    case 1:
      return `${names[0]} likes this`
    case 2:
      return `${names[0]} and ${names[1]} like this`
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

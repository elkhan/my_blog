/*
https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-find-the-longest-word-in-a-string/16015
 */

function findLongestWord(str) {
  const words = str.split(' ')
  let wordsLength = 0

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > wordsLength) {
      wordsLength = words[i].length
    }
  }
  return wordsLength
}
expect(findLongestWord('The quick brown fox jumped over the lazy dog')).to.eq(6) // 6

/*
2
 */

function findLongestWord2(str) {
  const words = str.split(' ')
  const longestWord = words.sort((a, b) => b.length - a.length)[0]
  return longestWord.length
}
expect(findLongestWord2('The quick brown fox was jumping over the lazy dog')).to.eq(7) // 7

/*
3
 */

function findLongestWord3(str) {
  return str.split(' ').reduce((x, y) => Math.max(x, y.length), 0)
}
expect(findLongestWord3('The quick brown fox was jumping over the lazy dog')).to.eq(7)

/*
4
 */

function findLongestWord4(str) {
  return Math.max(...str.split(' ').map((word) => word.length))
}
expect(findLongestWord4('The quick brown fox was jumping over the lazy dog')).to.eq(7)
/*
str.split(" ") splits the string into an array, taking spaces as separators.
It returns this array: [“The”,"quick,“brown”,“fox”,“jumped”,“over”,“the”,“lazy”,“dog”].

Then, we will make another array, made from the lengths of each element of the str.split(" ") array with map().

str.split(" ").map(word => word.length) returns [3, 5, 5, 3, 6, 4, 3, 4, 3]

Finally, we pass the array as argument for the Math.max function with the spread operator ...
 */

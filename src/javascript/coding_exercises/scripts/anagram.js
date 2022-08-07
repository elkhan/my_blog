// https://blog.anthonycomito.com/answer-the-anagram-interview-question-with-es6-c7621e43596d
/* eslint-disable no-restricted-syntax */
function isAnagram(stringA, stringB) {
  const sortStr = str => {
    const newStr = str
      .split('')
      .sort()
      .join('')
    return newStr
  }

  let anagram = false

  const sortedStringA = sortStr(stringA)
  const sortedStringB = sortStr(stringB)

  if (sortedStringA === sortedStringB) {
    anagram = true
  }
  return anagram
}

// console.log(isAnagram("Scotchy is Scotch!", "Scotch is Scotchy!"));

function isAnagram2(stringA, stringB) {
  function createCharMap(text) {
    const charMap = {}
    for (const char of text) {
      // eslint-disable-next-line no-prototype-builtins
      if (charMap.hasOwnProperty(char)) {
        charMap[char]++
      } else {
        charMap[char] = 1
      }
    }
    return charMap
  }

  console.log(createCharMap('Hello World'))

  if (stringA.length === stringB.length) {
    const stringAMap = createCharMap(stringA)
    const stringBMap = createCharMap(stringB)

    for (const char in stringAMap) {
      if (stringAMap[char] !== stringBMap[char]) {
        return false
      }
    }

    return true
  }
  return false
}

console.log(isAnagram2('I do not work weekends.', 'I do not work weekdays!'))

const [b] = [1, 2, 3]

console.log(b)

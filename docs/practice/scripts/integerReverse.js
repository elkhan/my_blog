function reverseString(text) {
  return [...text].reduce((acc, char) => char + acc, '')
}

function reverseInteger(num) {
  const reversedNumber = parseInt(reverseString(num.toString()), 10)
  return reversedNumber * Math.sign(num)
}

console.log(reverseInteger(-123)) // -321

console.log(reverseString('helloWorld')) // dlroWolleh

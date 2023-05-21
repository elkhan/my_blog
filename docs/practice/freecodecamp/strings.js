let someString = "abc"
const result = someString+undefined
console.assert(result === "abcundefined")

//https://stackoverflow.com/questions/1966476/how-can-i-process-each-letter-of-text-using-javascript
for (const i in someString) {
  console.log(someString[i])
}

console.log('***')

for (const c of someString) {
  console.log(c)
}

console.log('***')

;[...someString].forEach(c => console.log(c))

console.log('***')


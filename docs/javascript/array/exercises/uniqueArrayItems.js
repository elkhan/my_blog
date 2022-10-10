// https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
// https://codehandbook.org/how-to-remove-duplicates-from-javascript-array/
const array = ['🐰', 1, 2, '🐰', '🦐', '🦐', 3, 3]

// Set
const uniqueArrayFromSet = [...new Set(array)] // Set keeps only unique elements
console.log(uniqueArrayFromSet) // [ '🐰', 1, 2, '🦐', 3 ]

// Filter
const uniqueArrayFromFilter = array.filter(
  (item, index) => array.indexOf(item) === index // indexOf returns first index it finds
)
console.log(uniqueArrayFromFilter) // [ '🐰', 1, 2, '🦐', 3 ]

const duplicateItemsFromFilter = array.filter(
  (item, index) => array.indexOf(item) !== index
)
console.log(duplicateItemsFromFilter) // [ '🐰', '🦐', 3 ]

// Reduce
const uniqueArrayFromReduce = array.reduce((acc, item) => acc.includes(item) ? acc : [...acc, item], [])
console.log(uniqueArrayFromReduce) // [ '🐰', 1, 2, '🦐', 3 ]
// Check the article's images

// We can define a very generic find that accepts an array and a function.
// It calls the function on each element of the array, and the first element
// for which criteriaFunc() returns true (or a truthy value) will be returned by find()
// eslint-disable-next-line consistent-return
function find(array, criteriaFunc) {
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (criteriaFunc(array[i])) {
      return array[i]
    }
  }
}

// Find the first even number in an array
find([1, 1, 3, 1, 5, 6, 8, 10], (n) => n % 2 === 0) // 6
// Find the first string whose length is > 3
find(['dog', 'cat', 'horse', 'mouse', 'ant', 'cow', 'antelope'], (s) => s.length > 3) // "horse"

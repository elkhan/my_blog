// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// https://stackoverflow.com/questions/41443029/difference-between-indexof-and-findindex-function-of-array

const findLastIndex = (arr, predicate) => {
  let l = arr.length
  while (l) {
    if (predicate(arr[l])) {
      return l
    }
    l -= 1
  }
  return -1
}
const array1 = [20, 5, 12, 8, 20, 130, 44, 20]
const isLargeNumber = (element) => element > 13
const found = array1.findIndex(isLargeNumber)
const foundLastIndex = findLastIndex(array1, isLargeNumber)
const fromLast = array1.lastIndexOf(8)

console.log('array1.length', array1.length)
console.log('found', found)
console.log('foundLastIndex', foundLastIndex)
console.log('fromLast', fromLast)

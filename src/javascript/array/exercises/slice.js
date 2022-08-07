// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array

const arr = [1, 2, 3, 4, 5, 6]
const index = 3
const newArr = arr.slice(0, index).concat(arr.slice(index + 1, arr.length))

console.log(newArr)

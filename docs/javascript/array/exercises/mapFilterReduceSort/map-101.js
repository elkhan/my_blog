// https://dev.to/dhilipkmr/implementing-our-own-array-map-method-in-javascript-553m
const map = (arr, callback) => {
  const result = []
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i += 1) {
    result.push(callback(arr[i], i))
  }
  return result
}
map([1, 2, 3, 4, 5], (n) => n * 2)
// [2, 4, 6, 8, 10]

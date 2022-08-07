function findEvenIndex(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i]
  }
  console.log(sum)
}
const array = [20, 10, -80, 10, 10, 15, 35, 40]

console.log(findEvenIndex(array))

// TODO: Find this and other katas to get their descriptions

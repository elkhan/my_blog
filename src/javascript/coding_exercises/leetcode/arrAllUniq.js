const arr = [4, 1, 2, 1, 2]

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}
const unique = arr.filter(onlyUnique)

console.log(unique)

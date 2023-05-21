const monkey = {
  name: 'Champ',
  color: 'Redish',
}

for (const prop in monkey) {
  if (monkey.hasOwnProperty(prop)) {
    console.log(`${prop} : ${monkey[prop]}`)
  }
}
// name: Champ
// color: Redish
console.log(Object.keys(monkey)) // [ 'name', 'color' ]
console.log(JSON.stringify(monkey)) // {"name":"Champ","color":"Redish"}

Object.defineProperty(monkey, 'name', { enumerable: false })

for (const prop in monkey) {
  if (monkey.hasOwnProperty(prop)) {
    console.log(`${prop} : ${monkey[prop]}`)
  }
}
// color : Redish

console.log(Object.keys(monkey)) // [ 'color' ]
console.log(JSON.stringify(monkey)) // {"color":"Redish"}

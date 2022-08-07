const cat = {
  name: {
    first: 'Poo',
    last: 'Fluffiest',
  },
  color: 'Greyish',
}

Object.defineProperty(cat, 'fullName', {
  get() {
    return `${this.name.first} ${this.name.last}`
  },
  set(value) {
    const nameParts = value.split(' ')
    this.name.first = nameParts[0]
    this.name.last = nameParts[1]
  },
})

console.log(cat.fullName) // Poo Fluffiest
cat.fullName = 'Muffin Top'
console.log(cat.fullName) // Muffin Top
console.log(cat.name.first) // Muffin
console.log(cat.name.last) // Top

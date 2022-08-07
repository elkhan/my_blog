const s = 'hello'
console.log(s.length)

const x = {
  num: 2,
  valueOf() {
    return this.num * 2
  },
}
const y = {
  num: 3,
  valueOf() {
    return this.num * 2
  },
}
console.log(x + y)

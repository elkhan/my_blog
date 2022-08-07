const obj = {
  num: 3,
  increment() {
    this.num += 1
  },
}

const otherObj = {
  num: 10,
}
obj.increment()
console.log(obj.num) // 4

obj.increment.call(otherObj)
obj.increment.call(otherObj)

console.log(otherObj.num) // 12

console.log(obj.num) // 4

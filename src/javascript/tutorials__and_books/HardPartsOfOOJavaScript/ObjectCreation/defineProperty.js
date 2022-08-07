const arr = ['red', 'blue', 'green', 'yellow', 'cyan']

Object.defineProperty(arr, 'lastEl', {
  get() {
    return this[this.length - 1]
  },
})
console.log(arr.lastEl) // cyan

const arr2 = ['one', 'two', 'three']
console.log(arr2.lastEl) // undefined

Object.defineProperty(Array.prototype, 'lastElement', {
  get() {
    return this[this.length - 1]
  },
})
console.log(arr.lastElement) // cyan
console.log(arr2.lastElement) // three

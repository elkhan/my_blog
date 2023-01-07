export {}

declare global {
  interface Array<T> {
    count: (value: number) => T
  }
}

Array.prototype.count = function count(value: number) {
  let n = 0
  this.forEach((item: number) => {
    if (item === value) {
      n += 1
    }
  })

  return n
}

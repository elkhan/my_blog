const printSomething = () => {
  console.log('Hello World!')
}

const timerId = setTimeout(() => {
  printSomething()
}, 2000)

setTimeout(() => {
  clearTimeout(timerId)
  console.log('Bye')
}, 1500)

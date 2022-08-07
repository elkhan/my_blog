// https://stackoverflow.com/questions/38752620/promise-vs-settimeout
console.log('one')
setTimeout(() => {
  console.log('two')
}, 0)
Promise.resolve().then(() => {
  console.log('three')
})
console.log('four')

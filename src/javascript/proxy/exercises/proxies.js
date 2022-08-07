// https: //medium.com/dailyjs/how-to-use-javascript-proxies-for-fun-and-profit-365579d4a9f8
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming
const getProp = obj =>
  new Proxy(obj, {
    get(target, propKey) {
      return propKey in target ? target[propKey] : {}
    },
  })

const object = { message: 'hello world' }
const wrapped = getProp(object)
console.log(wrapped.message)
/*
Reading property message
hello world
*/
console.log(wrapped.age) // {}

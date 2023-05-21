// https://javascript.info/call-apply-decorators

/* eslint-disable func-names */
function slow(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`Called with ${x}`)
  return x
}

function cachingDecorator(func) {
  const cache = new Map()

  return function(x) {
    if (cache.has(x)) {
      // if the result is in the map
      return cache.get(x) // return it
    }

    const result = func(x) // otherwise call func

    cache.set(x, result) // and cache (remember) the result
    return result
  }
}

// eslint-disable-next-line no-func-assign
const cachedSlow = cachingDecorator(slow)

console.log(cachedSlow(1)) // Called with 1 - cachedSlow(1) is cached
console.log(`Again: ${cachedSlow(1)}`) // Again: 1 - the same

console.log(cachedSlow(2)) // Called with 2 - cachedSlow(2) is cached
console.log(`Again: ${cachedSlow(2)}`) // Again: 2 - the same as the previous line
/*
Called with 1
1
Again: 1
Called with 2
2
Again: 2
*/

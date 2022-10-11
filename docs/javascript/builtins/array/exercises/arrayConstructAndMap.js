/* eslint-disable no-console */
// https://itnext.io/heres-why-mapping-a-constructed-array-doesn-t-work-in-javascript-f1195138615a

const arr = [...Array(11)].map((_, i) => i)
console.assert(arr.length === 11, 'arr.length === 11')
console.assert(arr[0] === 0, 'arr[0] === 0')
console.assert(arr[arr.length - 1] === 10, 'arr[arr.length - 1] === 10')

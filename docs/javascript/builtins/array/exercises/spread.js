const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
let arr2 = []

arr2 = [...arr1]

console.assert(arr2).to.deep.equal(arr1)
console.assert(arr2).to.eql(arr1)

const numArray = [6, 89, 3, 45]
const maxNum = Math.max.apply(null, numArray)
const maxSpreadNum = Math.max(...numArray)
console.assert(maxNum).to.equal(89)
console.assert(maxNum).to.equal(maxSpreadNum)

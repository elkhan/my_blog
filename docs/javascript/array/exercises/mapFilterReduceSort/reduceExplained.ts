// https://blog.khanacademy.org/lets-reduce-a-gentle-introduction-to-javascripts-reduce-method/

import isEqual from 'lodash/isEqual'

/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
const inputFromServer = [
  { id: 'a', name: 'Amy' },
  { id: 'b', name: 'Blanche' },
  { id: 'c', name: 'Claude' },
]

const getMapFromArray = (data: any[]) =>
  data.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {})

console.log(getMapFromArray(inputFromServer))

/*
{ 
  a: { id: 'a', name: 'Amy' },
  b: { id: 'b', name: 'Blanche' },
  c: { id: 'c', name: 'Claude' } 
}
 */

function map(fn: { (item: any): number; (arg0: any): any }, arr: any[]) {
  return arr.reduce((result, item) => [...result, fn(item)], [])
}

function runTestMap() {
  const array = [1, 2, 3]

  const doubledArray = map((item) => item * 2, array)

  if (isEqual(doubledArray, [2, 4, 6])) {
    console.log('✓ Test passed!')
  } else {
    console.error('Test failed :(')
    console.error('Actual result:')
    console.error(doubledArray)
    console.error('Expected result:')
    console.error([2, 4, 6])
  }
}

runTestMap()

function filter(fn: { (item: any): boolean; (arg0: any): any }, arr: any[]) {
  return arr.reduce((result, item) => (fn(item) ? [...result, item] : result), [])
}

function runTestFilter() {
  const array = [true, false, 0, 1, 'hi', '']

  const truthyItems = filter((item) => !!item, array)

  if (isEqual(truthyItems, [true, 1, 'hi'])) {
    console.log('✓ Test passed!')
  } else {
    console.error('Test failed :(')
    console.error('Actual result:')
    console.error(truthyItems)
    console.error('Expected result:')
    console.error([2, 4, 6])
  }
}

runTestFilter()

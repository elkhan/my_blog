/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/

/* nums.flat(Infinity) */

type ArrType = (number | number[] | (number | number[][])[])[]

const nums = [1, [2], [3, [[4]]]]
const result: number[] = []

export const flatten = (arr: ArrType) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i] as number[])
    } else {
      result.push(arr[i] as number)
    }
  }
  return result
}

flatten(nums)
console.log(result)

/*  */

export const flattenConcat = (arr: ArrType) => {
  let resultArr: number[] = []
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      resultArr = resultArr.concat(flattenConcat(arr[i] as number[]))
    } else {
      resultArr.push(arr[i] as number)
    }
  }
  return resultArr
}

console.log(flattenConcat(nums))

/*  */
const mutNums = [1, [2], [3, [[4]]]]

export const flattenMut = (arr: ArrType, results: number[] = []) => {
  if (arr.length === 0) return results

  const first = arr.shift()

  if (Array.isArray(first)) {
    flattenMut(first as number[], results)
  } else {
    results.push(first as number)
  }

  flattenMut(arr, results)

  return results
}

console.log(flattenMut(mutNums))

/*  */

export const flattenSlice = (arr: ArrType, results: number[] = []): ArrType => {
  if (arr.length === 0) return results

  const head = arr[0]
  const rest = arr.slice(1)

  if (Array.isArray(head)) {
    return flattenSlice(head.concat(rest as number[]) as ArrType, results)
  }
  results.push(head)

  return flattenSlice(rest, results)
}

console.log(flattenSlice(nums))

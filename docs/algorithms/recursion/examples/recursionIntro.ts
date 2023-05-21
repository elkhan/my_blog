// 1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

// 2. Next, try looping just like above except using recursion

// 3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponent value of the base.

// 4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

// 5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

// 6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

const nums = [1, 2, 3, 4]
// @ts-ignore
export const recursiveReverse = (arr: number[], result: number[] = []) => {
  if (!arr.length) return result

  result.push(arr.pop() as number)

  recursiveReverse(arr, result)

  return result
}

console.log(recursiveReverse(nums))

export const reverse = (arr: number[]) => {
  const result = []
  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr.length - i)
  }
  return result
}

// console.log(reverse(nums))

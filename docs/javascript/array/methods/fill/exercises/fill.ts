export const matrix = (arrLength = 2, subArrLength = 4, elemToFill = 1) => {
  const arr = new Array(arrLength)
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = new Array(subArrLength).fill(elemToFill)
  }

  return arr
}

export const fillForLoop = (elems: number) => {
  const nums = []
  for (let i = 0; i < elems; i += 1) {
    nums[i] = i + 1
  }
  return nums
}

export const fillArrayFill = (elems: number) => new Array(elems).fill(elems)

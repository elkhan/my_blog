export const nums = [1, 2, 3, 4, 5, 6]

export const deepCopy = (arrArg: number[], arrCopyArg: number[]) => {
  const arrCopy = arrCopyArg
  const arr = arrArg
  for (let i = 0; i < arr.length; i += 1) {
    arrCopy[i] = arr[i]
  }
}

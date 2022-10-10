// All function parameters in JavaScript are passed by value, and there are no reference parameters.
// However, there are reference objects, such as arrays, which are passed to functions by reference,
// as was demonstrated below:

export const curve = (arr: number[], amount?: number): number[] => {
  const result = []
  for (let i = 0; i < arr.length; i += 1) {
    // eslint-disable-next-line no-param-reassign
    result.push((arr[i] += amount || 0))
  }
  return result
}

export const customFind = <T>(
  elems: T[],
  fn: (arg: T) => boolean
  // eslint-disable-next-line consistent-return
): T | void => {
  for (let i = 0, l = elems.length; i < l; i += 1) {
    if (fn(elems[i])) {
      return elems[i]
    }
  }
}

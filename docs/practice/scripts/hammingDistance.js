function hammingDistance(stringA, stringB) {
  let result = 0

  if (stringA.length === stringB.length) {
    for (let i = 0; i < stringA.length; i += 1) {
      if (stringA[i].toLowerCase() !== stringB[i].toLowerCase()) {
        result += 1
      }
    }
    return result
  }
  throw new Error('Strings do not have equal length')
}

console.log(hammingDistance('river', 'rover'))

// https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

export const countingValleys = (path: string) => {
  const pathArr = path.split('')
  let ds = []
  let ups = []
  let result = 0
  for (let i = 0; i < pathArr.length; i += 1) {
    if (pathArr[i] === 'D') {
      ds.push(pathArr[i])
    } else {
      ups.push(pathArr[i])
      if (ds.length === ups.length) {
        result += 1
        ds = []
        ups = []
      }
    }
  }
  return result
}

export const countingValleysAlternative = (path: string) => {
  let seaLevel = 0
  let valley = 0
  // eslint-disable-next-line no-restricted-syntax
  for (const step of path) {
    if (step === 'U') {
      seaLevel += 1
    } else {
      seaLevel -= 1
    }
    if (step === 'U' && seaLevel === 0) {
      valley += 1
    }
  }
  return valley
}

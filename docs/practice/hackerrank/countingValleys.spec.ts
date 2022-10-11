import { countingValleys, countingValleysAlternative } from './countingValleys'

const hike = 'UDDDUDUU'
const moreHikes = 'DUDDDUUDUU'

describe('countingValleys', () => {
  it('should given the sequence of up and down steps during a hike, find and print the number of valleys walked through.', () => {
    expect(countingValleys(hike)).toEqual(1)
    expect(countingValleys(moreHikes)).toEqual(2)
  })
})

describe('countingValleysAlternative', () => {
  it('should given the sequence of up and down steps during a hike, find and print the number of valleys walked through.', () => {
    expect(countingValleysAlternative(hike)).toEqual(1)
    expect(countingValleysAlternative(moreHikes)).toEqual(2)
  })
})

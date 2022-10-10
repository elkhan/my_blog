import {
  containsDuplicate,
  containsDuplicateMap,
  containsDuplicateSet,
  containsDuplicateSorted,
} from './contains_duplicate'

const dupes = [1, 2, 3, 1]
const uniques = [1, 2, 3, 4]

describe('containsDuplicate', () => {
  it('should return true if passed in array contains duplicate or false otherwise', () => {
    expect(containsDuplicate(dupes)).toEqual(true)
    expect(containsDuplicate(uniques)).toEqual(false)
  })
})
describe('containsDuplicateSet', () => {
  it('should return true if passed in array contains duplicate or false otherwise', () => {
    expect(containsDuplicateSet(dupes)).toEqual(true)
    expect(containsDuplicateSet(uniques)).toEqual(false)
  })
})
describe('containsDuplicateSorted', () => {
  it('should return true if passed in array contains duplicate or false otherwise', () => {
    expect(containsDuplicateSorted(dupes)).toEqual(true)
    expect(containsDuplicateSorted(uniques)).toEqual(false)
  })
})
describe('containsDuplicateMap', () => {
  it('should return true if passed in array contains duplicate or false otherwise', () => {
    expect(containsDuplicateMap(dupes)).toEqual(true)
    expect(containsDuplicateMap(uniques)).toEqual(false)
  })
})

import {
  filterDuplicatesFilter,
  printIndexOfDuplicate,
  removeDuplicates,
  removeDuplicatesHashTable,
  removeDuplicatesIndexOf,
  removeDuplicatesSet,
  removeDuplicatesSplice,
} from './remove_duplicates_from_sorted_array'

describe('removeDuplicates', () => {
  it('should return number of unique elements and result be placed in the first part of the array', () => {
    const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4]
    const arr2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7]
    expect(removeDuplicates(arr)).toEqual(5)
    expect(removeDuplicates(arr2)).toEqual(7)
    expect(arr).toEqual([0, 1, 2, 3, 4, 2, 2, 3, 3, 4, 4, 4])
    expect(arr2).toEqual([1, 2, 3, 4, 5, 6, 7, 4, 5, 6, 6, 7])
  })
})

describe('removeDuplicatesSplice', () => {
  it('should remove duplicates in-place using splice()', () => {
    const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4]
    const arr2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7]
    removeDuplicatesSplice(arr)
    removeDuplicatesSplice(arr2)
    expect(arr).toEqual([0, 1, 2, 3, 4])
    expect(arr2).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})

describe('filterDuplicatesFilter', () => {
  it('should remove duplicates using filter()', () => {
    const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4]
    const arr2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7]
    expect(filterDuplicatesFilter(arr)).toEqual([0, 1, 2, 3, 4])
    expect(filterDuplicatesFilter(arr2)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})

describe('removeDuplicatesIndexOf', () => {
  it('should remove duplicates using filter() and indexOf()', () => {
    const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4]
    const arr2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7]
    expect(removeDuplicatesIndexOf(arr)).toEqual([0, 1, 2, 3, 4])
    expect(removeDuplicatesIndexOf(arr2)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})

describe('removeDuplicatesHashTable', () => {
  it('should remove duplicates using HashTable', () => {
    const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4]
    const arr2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7]
    expect(removeDuplicatesHashTable(arr)).toEqual([0, 1, 2, 3, 4])
    expect(removeDuplicatesHashTable(arr2)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})

describe('removeDuplicatesSet', () => {
  it('should remove duplicates using Set()', () => {
    const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4]
    const arr2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7]
    expect(removeDuplicatesSet(arr)).toEqual([0, 1, 2, 3, 4])
    expect(removeDuplicatesSet(arr2)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})

describe('printIndexOfDuplicate', () => {
  it.each([
    [1, 'Item: 1, index: 0, indexOf: 0'],
    [2, 'Item: 1, index: 1, indexOf: 0'],
    [3, 'Item: 2, index: 2, indexOf: 2'], // Duplicate
    [4, 'Item: 2, index: 3, indexOf: 2'], // Duplicate
    [5, 'Item: 3, index: 4, indexOf: 4'],
    [6, 'Item: 4, index: 5, indexOf: 5'],
    [7, 'Item: 5, index: 6, indexOf: 6'],
  ])('should print indexOf elements (%s, %d)', (a: number, expected: string) => {
    const consoleSpy = jest.spyOn(console, 'log')
    const numbers = [1, 1, 2, 2, 3, 4, 5]
    printIndexOfDuplicate(numbers)
    expect(consoleSpy).toHaveBeenNthCalledWith(a, expected)
  })
})

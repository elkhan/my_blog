describe('concat', () => {
  const array_1 = new Array(5).fill(1)
  const array_2 = new Array(5).fill(2)

  it('should return an array', () => {
    expect(array_1.concat(array_2)).toEqual([1, 1, 1, 1, 1, 2, 2, 2, 2, 2])
  })
})

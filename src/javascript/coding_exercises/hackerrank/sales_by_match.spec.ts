import { sockMerchant, sockMerchantSet } from './sales_by_match'

describe('sockMerchant', () => {
  const socks = [1, 2, 1, 2, 1, 3, 2]
  const moreSocks = [10, 20, 20, 10, 10, 30, 50, 10, 20]
  it('should ', () => {
    expect(sockMerchant(7, socks)).toEqual(2)
    expect(sockMerchant(moreSocks.length, socks)).toEqual(3)
  })
})
describe('sockMerchantSet', () => {
  const socks = [1, 2, 1, 2, 1, 3, 2]
  const moreSocks = [10, 20, 20, 10, 10, 30, 50, 10, 20]
  it('should ', () => {
    expect(sockMerchantSet(socks)).toEqual(2)
    expect(sockMerchantSet(moreSocks)).toEqual(3)
  })
})

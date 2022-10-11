/*
https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa
 */

import assert from "assert"

const shoppingCart = [
    { productTitle: 'Product 1', amount: 10 },
    { productTitle: 'Product 2', amount: 30 },
    { productTitle: 'Product 3', amount: 20 },
    { productTitle: 'Product 4', amount: 60 },
  ]
  const sumAmount = (currentTotalAmount: number, order: { amount: number }) => currentTotalAmount + order.amount
  
  const getTotalAmount = (shoppingCartArr: any[]) => shoppingCartArr.reduce(sumAmount, 0)
  assert.equal(getTotalAmount(shoppingCart), 120)
  
  // map() and reduce() - composition
  
  const getAmount = (order: { amount: number }) => order.amount
  const getSumAmount = (acc: number, amount: number) => acc + amount
  
  function getTotalCartAmount(shoppingCartArg: any[]) {
    return shoppingCartArg.map(getAmount).reduce(getSumAmount, 0)
  }
  assert.equal(getTotalCartAmount(shoppingCart), 120)
  
  // All three together
  const shoppingCartBooks = [
    { productTitle: 'Functional Programming', type: 'books', amount: 10 },
    { productTitle: 'Kindle', type: 'electronics', amount: 30 },
    { productTitle: 'Shoes', type: 'fashion', amount: 20 },
    { productTitle: 'Clean Code', type: 'books', amount: 60 },
  ]
  
  const byBooks = (order: { type: string }) => order.type === 'books'
  
  function getTotalBooksAmount(shoppingCartArg: any[]) {
    return shoppingCartArg.filter(byBooks).map(getAmount).reduce(getSumAmount, 0)
  }
  
  assert.equal(getTotalBooksAmount(shoppingCartBooks), 70)
  
  function testFilterFn(shoppingCartArg: any[]) {
    return shoppingCartArg.filter(byBooks)
  }
  function testMapFn(shoppingCartArg: any[]) {
    return shoppingCartArg.filter(byBooks).map(getAmount)
  }
  assert.deepEqual(testFilterFn(shoppingCartBooks), [
    {
      productTitle: 'Functional Programming',
      type: 'books',
      amount: 10,
    },
    { productTitle: 'Clean Code', type: 'books', amount: 60 },
  ])
  assert.deepEqual(testMapFn(shoppingCartBooks), [10, 60])
  
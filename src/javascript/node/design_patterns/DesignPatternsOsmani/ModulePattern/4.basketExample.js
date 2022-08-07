const basketModule = (function() {
  // privates

  const basket = []

  function doSomethingPrivate() {
    // ...
  }

  // eslint-disable-next-line no-unused-vars
  function doSomethingElsePrivate() {
    // ...
  }

  // Return an object exposed to the public
  return {
    // Add items to our basket
    addItem(values) {
      basket.push(values)
    },

    // Get the count of items in the basket
    getItemCount() {
      return basket.length
    },

    // Public alias to a private function
    doSomething: doSomethingPrivate,

    // Get the total value of items in the basket
    getTotal() {
      let q = this.getItemCount()
      let p = 0

      // eslint-disable-next-line no-plusplus
      while (q--) {
        p += basket[q].price
      }

      return p
    },
  }
})()

basketModule.addItem({ item: 'bread', price: 0.5 })
basketModule.addItem({ item: 'butter', price: 0.3 })
console.log(basketModule.getItemCount()) // 2
console.log(basketModule.getTotal()) // 0.8
console.log(basketModule.basket) // undefined

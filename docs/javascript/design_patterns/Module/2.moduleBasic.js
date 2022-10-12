const testModule = (function () {
  let counter = 0

  return {
    incrementCounter() {
      // eslint-disable-next-line no-plusplus,no-return-assign
      return (counter += 1)
    },
    resetCounter() {
      console.log(`counter value prior to reset: ${counter}`)
      counter = 0
    },
    getCounterValue() {
      console.log(counter)
    }
  }
})()

testModule.getCounterValue() // 0
testModule.incrementCounter()
testModule.incrementCounter()
testModule.getCounterValue() // 2
testModule.resetCounter() // counter value prior to reset: 2
testModule.getCounterValue() // 0

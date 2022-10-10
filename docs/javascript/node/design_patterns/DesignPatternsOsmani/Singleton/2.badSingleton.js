const myBadSingleton = (function() {
  // Instance stores a reference to the Singleton
  let instance

  function init() {
    // Singleton

    const privateRandomNumber = Math.random()

    return {
      getRandomNumber() {
        return privateRandomNumber
      },
    }
  }

  return {
    // Always create a new Singleton instance
    getInstance() {
      instance = init()

      return instance
    },
  }
})()

const badSingleA = myBadSingleton.getInstance()
const badSingleB = myBadSingleton.getInstance()
console.log(badSingleA === badSingleB) // false
console.log(badSingleA.getRandomNumber() === badSingleB.getRandomNumber()) // false

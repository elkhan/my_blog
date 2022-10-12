/* eslint-disable max-classes-per-file */
let singletonInstance = null
class SingletonExample {
  constructor() {
    if (!singletonInstance) {
      singletonInstance = this
    }

    return singletonInstance
  }
}

const singletonInstanceA = new SingletonExample()
const singletonInstanceB = new SingletonExample()
console.log(singletonInstanceA === singletonInstanceB) // true

/* Export Object freeze */

class Singleton {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    // Properties & Methods
  }
}

const instance = new Singleton()
Object.freeze(instance)
// Import in a different file
module.exports = instance

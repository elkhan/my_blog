/* eslint-disable consistent-return,max-classes-per-file */
/* eslint-disable class-methods-use-this */
class Car {
  constructor(doors, engine, color) {
    this.doors = doors
    this.engine = engine
    this.color = color
  }
}
class CarFactory {
  createCar(type) {
    switch (type) {
      case 'civic':
        return new Car(4, 'V6', 'grey')
      case 'honda':
        return new Car(2, 'V4', 'red')
      default:
        break
    }
  }
}

const carMixin = {
  revEngine() {
    console.log(`The ${this.engine} is doing Vroom Vroom!`)
  }
}

const carFactory = new CarFactory()

const autoManufacturer = (type, model) => {
  switch (type) {
    case 'car':
      return carFactory.createCar(model)
    default:
      break
  }
}

Object.assign(Car.prototype, carMixin)

const honda = autoManufacturer('car', 'honda')

honda.revEngine() // The V4 is doing Vroom Vroom!

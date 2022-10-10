/* eslint-disable consistent-return */
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

class SUV {
  constructor(doors, engine, color) {
    this.doors = doors
    this.engine = engine
    this.color = color
  }
}
class SUVFactory {
  createSUV(type) {
    switch (type) {
      case 'cx5':
        return new SUV(4, 'V6', 'grey')
      case 'rav4':
        return new SUV(2, 'V4', 'red')
      default:
        break
    }
  }
}

const carFactory = new CarFactory()
const suvFactory = new SUVFactory()

const autoManufacturer = (type, model) => {
  switch (type) {
    case 'car':
      return carFactory.createCar(model)
    case 'suv':
      return suvFactory.createSUV(model)
    default:
      break
  }
}

const cx5 = autoManufacturer('suv', 'cx5')

console.log(cx5) // SUV {doors: 4, engine: "V6", color: "grey"}

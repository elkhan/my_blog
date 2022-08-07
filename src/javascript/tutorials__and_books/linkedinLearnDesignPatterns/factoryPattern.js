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

const factory = new CarFactory()
const honda = factory.createCar('honda')
console.log(honda) // Car {doors: 2, engine: "V4", color: "red"}

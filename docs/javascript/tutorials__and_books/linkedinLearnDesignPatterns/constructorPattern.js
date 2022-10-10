let instance = null

class Car {
  constructor(doors, engine, color) {
    if (!instance) {
      this.doors = doors
      this.engine = engine
      this.color = color
      instance = this
    } else {
      return instance
    }
  }
}

class SUV extends Car {
  constructor(doors, engine, color, wheels) {
    super(doors, engine, color)
    this.wheels = wheels
  }
}

const civic = new Car(4, 'V6', 'grey')
const honda = new Car(2, 'V4', 'red')
const cx5 = new SUV(4, 'V8', 'red', 5)

console.log(civic) // Car {doors: 4, engine: "V6", color: "grey", wheels: 5} - why I get wheels?!
console.log(honda) // Car {doors: 4, engine: "V6", color: "grey", wheels: 5}
console.log(cx5) // Car {doors: 4, engine: "V6", color: "grey", wheels: 5}

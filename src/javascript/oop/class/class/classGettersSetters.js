/* eslint-disable no-underscore-dangle */

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-getters-and-setters-to-control-access-to-an-object
class Thermostat {
  constructor(temperature) {
    this._temperature = temperature
  }

  get temperature() {
    return (5 / 9) * (this._temperature - 32)
  }

  set temperature(temperature) {
    this._temperature = (temperature * 9.0) / 5 + 32
  }
}

const thermos = new Thermostat(76) // Setting in Fahrenheit scale
let temp = thermos.temperature // 24.44 in Celsius
console.log(temp)

thermos.temperature = 26
temp = thermos.temperature // 26 in Celsius

console.log(temp)

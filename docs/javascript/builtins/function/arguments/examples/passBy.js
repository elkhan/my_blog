const x = 1
const y = 2

function swap(a, b) {
  let tmp = null
  tmp = a
  // eslint-disable-next-line no-param-reassign
  a = b
  // eslint-disable-next-line no-param-reassign
  b = tmp
  return {
    a,
    b
  }
}

console.log(x, y) // 1 2
console.log(swap(x, y)) // { x: 2, y: 1 }

/*
 Pass by value of references

 https://www.javascripttutorial.net/javascript-pass-by-value/
 */
function turnOn(machine) {
  machine.isOn = true
}

const computer = {
  isOn: false
}

turnOn(computer)
console.log(computer.isOn) // true
/*

 */
function turnOn2(machine) {
  // eslint-disable-next-line no-param-reassign,@typescript-eslint/no-unused-vars
  machine = {
    isOn: true
  }
}

const computer2 = {
  isOn: false
}
turnOn2(computer2)
console.log(computer2.isOn) // false

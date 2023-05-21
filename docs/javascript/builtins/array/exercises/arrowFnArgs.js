/* eslint-disable no-console */
// https://stackoverflow.com/questions/39431937/good-way-to-validate-the-number-of-arguments-to-an-arrow-function
const add = (num1, num2) => {
  if (!num2) {
    return num3 => num1 + num3
  }
  return num1 + num2
}
console.log(add(2)(5))
console.log(add(2, 5))

function anotherAdd(num1, num2) {
  if (arguments.length < 2) {
    return num3 => num1 + num3
  }
  return num1 + num2
}

console.log(anotherAdd(2)(7))
console.log(anotherAdd(2, 7))

const oneMoreAdd = (...args) => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#No_binding_of_arguments
  if (args.length < 2) {
    return num1 => args[0] + num1
  }
  return args[0] + args[1]
}

console.log(oneMoreAdd(5, 5))
console.log(oneMoreAdd(5)(5))

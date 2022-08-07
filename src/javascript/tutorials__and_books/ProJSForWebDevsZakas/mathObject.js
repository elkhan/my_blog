// “ECMAScript provides the Math object as a common location for mathematical formulas and information. The computations available on the Math object execute faster than if you were to write the computations in JavaScript directly. There are a number of properties and methods to help these computations.”

const p = Math.PI
// console.log(p); // 3.141592653589793

// ****************

// min() and max() methods
// “The Math object also contains many methods aimed at performing both simple and complex mathematical calculations.”

var max = Math.max(3, 54, 32, 16)
// console.log(max); // 54

const min = Math.min(3, 54, 32, 16)
// console.log(min); // 3

// “To find the maximum or the minimum value in an array, you can use the apply() method as follows:”
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var max = Math.max.apply(Math, values)
// console.log(max); // 9

// ****************

// “The Math.ceil() method represents the ceiling function, which always rounds numbers up to the nearest integer value.
// The Math.floor() method represents the floor function, which always rounds numbers down to the nearest integer value.
// The Math.round() method represents a standard round function, which rounds up if the number is at least halfway to the next integer value (0.5 or higher) and rounds down if not.”

// console.log(Math.ceil(25.9));     //26
// console.log(Math.ceil(25.5));     //26
// console.log(Math.ceil(25.1));     //26

// console.log(Math.round(25.9));    //26
// console.log(Math.round(25.5));    //26
// console.log(Math.round(25.1));    //25

// console.log(Math.floor(25.9));    //25
// console.log(Math.floor(25.5));    //25
// console.log(Math.floor(25.1));    //25

// ****************

// random() method

// “The Math.random() method returns a random number between the 0 and the 1, not including either 0 or 1.”
// “number = Math.floor(Math.random() * total_number_of_choices + first_possible_value)”

var num = Math.floor(Math.random() * 10 + 1) // random number between 1 through 10
// console.log(num);

var num = Math.floor(Math.random() * 9 + 2) // random number between 2 and 10
// console.log(num);

function selectFrom(lowerValue, upperValue) {
  const choices = upperValue - lowerValue + 1
  return Math.floor(Math.random() * choices + lowerValue)
}

var num = selectFrom(2, 10)
console.log(num) // number between 2 and 10, inclusive

const colors = ['red', 'green', 'blue', 'yellow', 'black', 'purple', 'brown']
const color = colors[selectFrom(0, colors.length - 1)]
console.log(color)

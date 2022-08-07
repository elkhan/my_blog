// https://levelup.gitconnected.com/9-tricks-for-kickass-javascript-developers-in-2019-eb01dd3def2a

/**
 * Async/await
 */
const axios = require('axios')

async function getData() {
  const result = await axios.get('https://dube.io/service/ping')
  const { data } = result
  console.log('data', data)

  return data
}

// getData(); // data { success: true }

/**
 * Async control flow
 */
let myData = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]

function updateData(newData) {
  myData = myData.map(el => {
    if (el.id === newData.id) {
      return newData
    }
    return el
  })
}

// https://eslint.org/docs/rules/no-await-in-loop. See Promise.all below
async function fetchData(dataSet) {
  // eslint-disable-next-line no-restricted-syntax
  for (const entry of dataSet) {
    // eslint-disable-next-line no-await-in-loop
    const result = await axios.get(
      `https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}`
    )
    const newData = result.data
    updateData(newData)

    console.log(myData)
  }
}

// fetchData(myData);

// Promise.all
async function fetchDataInParallel(dataSet) {
  const pokemonPromises = dataSet.map(entry => axios.get(
      `https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}`
    ))
  const results = await Promise.all(pokemonPromises)

  results.forEach(result => {
    updateData(result.data)
  })

  console.log(myData)
}

// fetchDataInParallel(myData);

/**
 * Destructuring & default values
 */
// https://wesbos.com/destructuring-default-values/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Assigning_to_new_variables_names_and_providing_default_values

// const { data } = await axios.get(...)
// const { data: newData } = await axios.get(...)

const { id = 5 } = {} // default value
// console.log("id", id); // id 5

function calculate({ operands = [1, 2], type = 'addition' } = {}) {
  return operands.reduce(
    /* eslint-disable array-callback-return */
    // eslint-disable-next-line consistent-return
    (acc, val) => {
      /* eslint-enable array-callback-return */
      switch (type) {
        case 'addition':
          return acc + val
        case 'subtraction':
          return acc - val
        case 'multiplication':
          return acc * val
        case 'division':
          return acc / val
        default:
          break
      }
    },
    ['addition', 'subtraction'].includes(type) ? 0 : 1
  )
}

// console.log(calculate()); // 3
// console.log(calculate({ type: "division" })); // 0.5
// console.log(calculate({ operands: [2, 3, 4], type: "multiplication" })); // 24

/**
 * Truthy & falsy values
 */
// https://www.sitepoint.com/javascript-truthy-falsy/
/*
Falsy
strings with the length of 0
the number 0
false
undefined
null
NaN
https://developer.mozilla.org/en-US/docs/Glossary/Falsy

Truthy
empty arrays
empty objects
Everything else
https://developer.mozilla.org/en-US/docs/Glossary/Truthy
*/

/**
 * Logical & ternary operators
 */
/*
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(0 && { a: 1 }); // 0
console.log(false && "a"); // false
console.log("2" && 5); // 5
console.log([] || false); // []
console.log(NaN || null); // null
console.log(true || "a"); // true
*/
/*
const lang = "German";
console.log(lang === "German" ? "Hallo" : "Hello"); // Hallo
console.log(lang ? "Ja" : "Yes"); // Ja
console.log(lang === "French" ? "Bon soir" : "Good evening"); // Good evening
*/

/**
 * Optional chaining
 */
// https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining

// const myObj = {};
// let data;
// if (
//   myObj &&
//   myObj.firstProp &&
//   myObj.firstProp.secondProp &&
//   myObj.firstProp.secondProp.actualData
// ) {
//   data = myObj.firstProp.secondProp.actualData;
// }

// vs

// const dataOpt = myObj?.firstProp?.secondProp?.actualData;

/**
 * Class properties & binding
 */
// https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html

/**
 * https://parceljs.org/
 */

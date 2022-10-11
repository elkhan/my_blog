// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const { expect } = require('chai')

let meals = { breakfast: 'oatmeal' }
// or, equivalently
// eslint-disable-next-line no-new-object
meals = new Object({ breakfast: 'oatmeal' })

// if you have a variable
const firstMeal = 'breakfast'
// and tried to create an object
meals = { firstMeal: 'oatmeal' }
// the meals object's key would be 'firstMeal', not 'breakfast'.
// ES 6 — wrap the key in square brackets ([]). Using the above example:
meals = { [firstMeal]: 'oatmeal' }
// and then meals would be
// {
//   breakfast: "oatmeal";
// }

// access the values in an object
expect(meals.breakfast).to.eq('oatmeal')
expect(meals[firstMeal]).to.eq('oatmeal')
expect(firstMeal).to.eq('breakfast')

// Adding values to an object
meals = {
  breakfast: 'oatmeal',
  lunch: 'burrito',
  dinner: 'steak',
}
meals.snack = 'yogurt'
// Accessing
expect(meals.snack).to.eq('yogurt')
expect(meals.lunch).to.eq('burrito')

// key-value pairs using bracket notation
meals['second breakfast'] = 'bagel'

// using variables
const sweetMeal = 'dessert'
meals[sweetMeal] = 'cake'
expect(meals.dessert).to.eq('cake')
expect(meals[sweetMeal]).to.eq('cake')

// Updating existing key-value pairs
meals.breakfast = 'cereal'

// All of the changes above are destructive
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  // eslint-disable-next-line no-param-reassign
  obj[key] = value
  return obj
}

let recipe = { eggs: 3 }

expect(destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')).to.deep.eq({
  eggs: 3,
  flour: '3 cups',
})
// but also:
expect(recipe).to.deep.eq({ eggs: 3, flour: '3 cups' })(
  // mutates original object

  // Non destructive object creation from existing object
  // Object.assign() creates a new object and pass it properties from existing objects.
  { foo: 'bar' }
)(
  // { foo: 'bar' }
  { eggs: 3, flour: '1 cup' }
)(
  // { eggs: 3, flour: '1 cup' }
  {
    eggs: 3,
    chocolate: '1 cup',
    flour: '2 cups',
    flour: '1/2 cup',
  }
) // { eggs: 3, chocolate: '1 cup', flour: '1/2 cup' }
// Example
function updateObjectWithKeyAndValue(obj, key, value) {
  // it's important that we merge everything into
  // a new object
  return { ...obj, [key]: value }
}

recipe = { eggs: 3 }
updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')
// returns `{ eggs: 3, chocolate: '1 cup' }`
recipe // { eggs: 3 }

function updateObjectWithObject(targetObject, updatesObject) {
  return { ...targetObject, ...updatesObject }
}

// Deleting a key-value pair
meals = {
  breakfast: 'oatmeal',
  lunch: 'turkey sandwich',
  dinner: 'steak and potatoes',
}
// the `delete` operator returns `true` if it has successfully
// deleted, `false` otherwise
delete meals.dinner // true
meals // returns { breakfast: "oatmeal", lunch: "turkey sandwich" }

// Changing a value
meals = {
  breakfast: 'oatmeal',
  lunch: 'turkey sandwich',
  dinner: 'steak and potatoes',
}
meals.breakfast = ['oatmeal', 'banana']

meals
// {
//   breakfast: ["oatmeal", "banana"],
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
//  }

// Changing a value non-destructively
meals = {
  breakfast: 'oatmeal',
  lunch: 'turkey sandwich',
  dinner: 'steak and potatoes',
}({ ...meals, breakfast: ['oatmeal', 'banana'] })
// returns {
//   breakfast: ["oatmeal", "banana"],
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
//  }
expect(meals).to.deep.eq({
  breakfast: 'oatmeal',
  lunch: 'turkey sandwich',
  dinner: 'steak and potatoes',
})
// still {
//   breakfast: "oatmeal",
//   lunch: "turkey sandwich",
//   dinner: "steak and potatoes"
// };

// Iterating over an object
meals = {
  breakfast: 'oatmeal',
  lunch: 'tuna',
  dinner: 'spaghetti',
}
const mealNames = Object.keys(meals)

for (let i = 0, l = mealNames.length; i < l; i += 1) {
  console.log(`I ate ${meals[mealNames[i]]} for ${mealNames[i]}!`)
}
// I ate oatmeal for breakfast!
// I ate tuna for lunch!
// I ate spaghetti for dinner!

// Better iterating over object with for...in
meals = {
  breakfast: 'oatmeal',
  lunch: 'tuna',
  dinner: 'spaghetti',
}

// eslint-disable-next-line guard-for-in,no-restricted-syntax
for (const mealName in meals) {
  console.log(`I ate ${meals[mealName]} for ${mealName}!`)
}

// Examples
const playlist = { artistName: 'songTitle' }

// eslint-disable-next-line no-shadow
function updatePlaylist(playlist, artistName, songTitle) {
  // eslint-disable-next-line no-param-reassign
  playlist[artistName] = songTitle
  return playlist
}

// eslint-disable-next-line no-shadow
function removeFromPlaylist(playlist, artistName) {
  // eslint-disable-next-line no-param-reassign
  delete playlist[artistName]
  return playlist
}

//
const recipes = {}

function updateObjectWithKeyAndValue2(object, key, value) {
  return { ...object, [key]: value }
}

function destructivelyUpdateObjectWithKeyAndValue2(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  return { ...object[key] }
}

function destructivelyDeleteFromObjectByKey(object, key) {
  // eslint-disable-next-line no-param-reassign
  delete object[key]
  return object
}

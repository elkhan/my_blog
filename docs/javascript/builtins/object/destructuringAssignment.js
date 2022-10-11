/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { expect } = require('chai')

const user = { name: 'John Doe', age: 34 }
const { name, age } = user

expect(name).to.equal('John Doe')
expect(age).to.equal(34)

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
}

const { today } = HIGH_TEMPERATURES
const { tomorrow } = HIGH_TEMPERATURES

expect(today).to.equal(77)
expect(tomorrow).to.equal(80)

// Assigning values
const { name: userName, age: userAge } = user
expect(userName).to.equal('John Doe')
expect(userAge).to.equal(34)
expect(userName).to.equal(name)
expect(userAge).to.equal(age)

// Assigning values from nested objects
const userDoe = {
  johnDoe: {
    age: 34,
    email: 'johnDoe@freeCodeCamp.com',
  },
}

const {
  johnDoe: { age: userDoeAge, email: userDoeEmail },
} = userDoe // { johnDoe: { age: 34, email: 'johnDoe@freeCodeCamp.com' } }

expect(userDoeAge).to.equal(34)
expect(userDoeEmail).to.equal('johnDoe@freeCodeCamp.com')

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
}

const {
  today: { low: lowToday },
} = LOCAL_FORECAST
const {
  today: { high: highToday },
} = LOCAL_FORECAST

expect(lowToday).to.equal(64)
expect(highToday).to.equal(77)

// Use Destructuring Assignment to Pass an Object as a Function's Parameters
const data = {
  profileName: 'Jake',
  profileAge: 45,
  profileNationality: 'Cosmopolitan',
  profileLocation: 'World',
}
const profileUpdate = profileData => {
  const { profileNationality, profileLocation } = profileData
  expect(profileNationality).to.equal('Cosmopolitan')
  expect(profileLocation).to.equal('World')
}
const profileDataDestructured = ({ profileName, profileAge }) => {
  expect(profileName).to.equal('Jake')
  expect(profileAge).to.equal(45)
}

profileUpdate(data)
profileDataDestructured(data)

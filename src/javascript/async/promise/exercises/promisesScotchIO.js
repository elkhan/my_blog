// https://scotch.io/courses/10-need-to-know-javascript-concepts/callbacks-promises-and-async
const weather = true
const date = new Promise((resolve, reject) => {
  if (weather) {
    const dateDetails = {
      name: 'Cubana Restaurant',
      location: '55th Street',
      table: 5,
    }
    resolve(dateDetails)
  } else {
    reject(new Error('Bad weather, so no Date'))
  }
})

const myDate = () => {
  date
    .then(done => {
      // content from resolve()
      console.log('We are going on a date')
      console.log(done)
    })
    .catch(error => {
      // info from reject() is here
      console.log(error.message) // Bad weather, so no Date
    })
}
myDate()
// We are going on a date
// { name: 'Cubana Restaurant', location: '55th Street', table: 5 }

// Promise chaining

const orderUber = dateObj => 
  // eslint-disable-next-line no-unused-vars
   new Promise((resolve, reject) => {
    const message = `Get me an Uber ASAP to ${dateObj.location}, we are going on a date!`
    resolve(message)
  })

const myDateUber = () => {
  date
    .then(orderUber)
    .then(done => {
      // content from resolve()
      console.log('We are taken on a date with Uber')
      console.log(done)
    })
    .catch(error => {
      // info from reject() is here
      console.log(error.message) // Bad weather, so no Date
    })
}
myDateUber()
// We are going on a date
// Get me an Uber ASAP to 55th Street, we are going on a date!

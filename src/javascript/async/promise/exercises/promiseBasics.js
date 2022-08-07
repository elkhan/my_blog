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

// TODO: Continue with the example
// eslint-disable-next-line import/prefer-default-export
export const myDate = () => date
        .then(done => 
            // the content of the resolve() is here
             done
        )
        .catch(error => 
            // the info from the reject() is here
             error.message
        )

// TODO: More examples https://web.dev/promises/
// And https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

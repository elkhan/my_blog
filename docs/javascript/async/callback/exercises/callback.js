export const greeting = name => `Hello ${name}!`

export const introduction = (firstName, lastName, callback) => {
    const fullName = `${firstName} ${lastName}`
    return callback(fullName)
}

// https://stackoverflow.com/a/3458816
// callback function
function tryMe(param1, param2, param3) {
    // eslint-disable-next-line no-console
    console.log(`${param1} and ${param2} ${param3}`)
}

// callback executor
function callbackTester(callback) {
    // this is the more obvious scenario as we use callback function
    // only when we have some missing value
    // get this data from ajax or compute
    const extraParam = 'this data was missing'

    // call the callback when we have the data
    callback(extraParam)
}

// test function
callbackTester((k) => {
    tryMe('hello', 'goodbye', k)
})

// TODO: Add more examples from https://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/
// And https://glebbahmutov.com/blog/sync-callbacks/

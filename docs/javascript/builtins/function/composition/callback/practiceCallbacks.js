// Example 1
// http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

/* eslint-disable guard-for-in, no-restricted-syntax */
/*
const allUserData = [];

function logStuff(userData) {
  if (typeof userData === 'string') {
    console.log(userData);
  } else if (typeof userData === 'object') {
    for (const item in userData) {
      console.log(`${item}:${userData[item]}`);
    }
  }
}

function getInput(options, callback) {
  allUserData.push(options);
  if (typeof callback === 'function') {
    callback(options);
  }
}

// When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will called back (or executed) inside the getInput function
getInput({ name: 'Rich', speciality: 'JavaScript' }, logStuff);

const generalLastName = 'Clinton';

function getAnotherInput(options, callback) {
  allUserData.push(options);
  callback(generalLastName, options);
}

getAnotherInput({ name: 'John', speciality: 'Politics' }, logStuff);
*/

// Example 2
const clientData = {
  id: 94545,
  fullName: 'Not set',
  setUserName(firstName, lastName) {
    // this refers to the fullName property in this object
    this.fullName = `${firstName} ${lastName}`
  },
}

function getUserInput(firstName, lastName, callback) {
  callback(firstName, lastName)
}

getUserInput('Barak', 'Obama', clientData.setUserName)

console.log(clientData.fullName) // Not set
// In the following code example, when clientData.setUserName is executed,
// this.fullName will not set the fullName property
//  on the clientData object. Instead, it will set fullName on the window object,
// since getUserInput is a global function.
// This happens because the this object in the global function points to the window object.

// Call & Apply
function getAnotherUserInput(firstName, lastName, callback, callbackObj) {
  callback.apply(callbackObj, [firstName, lastName])
}

getAnotherUserInput('Barak', 'Obama', clientData.setUserName, clientData)
console.log(clientData.fullName) // Barak Obama

/* eslint-disable no-console */
const myObj = {
  top: 'hat',
  bottom: 'pants'
}

// eslint-disable-next-line no-prototype-builtins
console.assert(myObj.hasOwnProperty('top') === true)
// eslint-disable-next-line no-prototype-builtins
console.assert(myObj.hasOwnProperty('middle') === false)

// hasOwnProperty on an object may be overridden or an object may be created with null prototype (Object.create(null), so it's safe to delegate to Object.prototype.hasOwnProperty()
// https://stackoverflow.com/questions/12017693/why-use-object-prototype-hasownproperty-callmyobj-prop-instead-of-myobj-hasow
console.assert(Object.prototype.hasOwnProperty.call(myObj, 'top') === true)

// https://stackoverflow.com/questions/15518328/is-creating-js-object-with-object-createnull-the-same-as
const obj1 = Object.create(null) // Has no inherited properties
const obj2 = {}

obj1.name = 'John'

function ownProp(o, prop) {
  if ('hasOwnProperty' in o) {
    // eslint-disable-next-line no-prototype-builtins
    return o.hasOwnProperty(prop)
  }
  return Object.prototype.hasOwnProperty.call(o, prop)
}

console.assert(ownProp(obj1, 'name') === true)
console.assert(ownProp(obj1, 'age') === false)

console.assert(ownProp(obj2, 'name') === false)

//
function checkObj(obj, checkProp) {
  return Object.prototype.hasOwnProperty.call(checkProp)
    ? obj[checkProp]
    : 'Not Found'
}

console.log(`checkObj ${checkObj(myObj, 'top')}`) // hat
console.log(`checkObj ${checkObj(myObj, 'middle')}`) // Not Found
console.log(`checkObj ${checkObj(obj1, 'middle')}`) // Not Found. Checking on an object without a prototype obj1.hasOwnProperty(checkProp) would error out otherwise

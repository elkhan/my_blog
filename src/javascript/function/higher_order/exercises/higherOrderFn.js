/*
Higher-Order function is a function that receives a function as an argument or returns the function as output.
 */

const sum = (a, b) => a + b

const getResultOperation = (func) => (a, b) => func(a, b)

function getResultOperationExplicit(func) {
  return function (a, b) {
    return func(a, b)
  }
}

function getResultOperationAlternative(func, a, b) {
  return func(a, b)
}

const getSumResult = getResultOperation(sum)
expect(getSumResult(5, 5)).to.eq(10)

const getSumResultExplicit = getResultOperationExplicit(sum)
expect(getSumResultExplicit(10, 10)).to.eq(20)

const getSumResultAlternative = getResultOperationAlternative(sum, 20, 15)
expect(getSumResultAlternative).to.eq(35)

/*
Another example of a higher order function
 */

const greetHello = (name) => `Hello ${name}`
export const greetWorld = (func) => func('world')

expect(greetWorld(greetHello)).to.eq('Hello world')

/*
https://eloquentjavascript.net/05_higher_order.html#h_8AV6kA9jcD/
*/
export function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i)
  }
}

const labels = []
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`)
})
expect(labels).to.deep.equal(['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5'])

const hellos = []
const actionCallback = (arg) =>
  function () {
    hellos.push(arg)
  }
repeat(3, actionCallback('hello'))
expect(hellos).to.deep.eq(['hello', 'hello', 'hello'])

// TODO: More examples https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad

const square = function (x) {
  return x * x
}
// noinspection UnnecessaryLocalVariableJS
const foo = square
expect(foo(5)).to.eq(25)

const formalGreeting = () => 'How are you?'
const casualGreeting = () => "What's up?"

const greet = (type, greetFormal, greetCasual) => {
  if (type === 'casual') {
    return greetCasual()
  }
  if (type === 'formal') {
    return greetFormal()
  }
  return 'Hello world!'
}
expect(greet('casual', formalGreeting, casualGreeting)).to.eq("What's up?")
expect(greet('formal', formalGreeting, casualGreeting)).to.eq('How are you?')
expect(greet('', formalGreeting, casualGreeting)).to.eq('Hello world!')

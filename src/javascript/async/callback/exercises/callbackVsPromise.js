const person = {
  name: 'Jane',
  display() {
    return this.name
  },
}

function boundPerson() {
  return this.display()
}

function outerFn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(boundPerson.call(person))
    }, 0)
  })
}

async function asyncResult() {
  const result = await outerFn()
  return result
}

// TODO: Add a test
asyncResult().then((r) => expect(r).to.eq('Jane')) // Jane

// Using callbacks
function outerFnWithCallback(fn) {
  setTimeout(() => {
    fn(boundPerson.call(person))
  }, 0)
}

function callback(result) {
  expect(result).to.eq('Jane')
}

outerFnWithCallback(callback) // Jane

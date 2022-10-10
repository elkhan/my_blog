// https://stackoverflow.com/questions/20279484/how-to-access-the-correct-this-inside-a-callback

const arr = [1, 2, 3]
const obj = { multiplier: 5 }

const newArr = arr.map(function (v) {
  return v * this.multiplier
}, obj) // this points to obj

expect(newArr).to.deep.eq([5, 10, 15])

/*
Another example
https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/
 */
const person = {
  name: 'Jane',
  display() {
    return this.name
  },
}

expect(person.display()).to.eq('Jane')

function boundPerson() {
  return this.display()
}

const reBoundPerson = boundPerson.bind(person)

expect(boundPerson.call(person)).to.eq('Jane')
expect(reBoundPerson()).to.eq('Jane')

// When we call setTimeout, JavaScript internally assigns obj.display to its argument callback - this context is lost

function outerFn(fn) {
  setTimeout(() => {
    fn(boundPerson.bind(person))
  }, 0)
}

outerFn((fn) => {
  expect(fn()).to.eq('Jane')
})

// https://www.freecodecamp.org/news/the-complete-guide-to-this-in-javascript/

const Cat = function (name, sound) {
  this.name = name
  this.sound = sound
  this.makeSound = function () {
    return `${this.name} says: ${this.sound}`
  }
  this.annoy = function () {
    let count = 0
    const max = 2
    const t = setInterval(
      () => {
        expect(this.makeSound()).to.eq('Fluffy says: Purr')
        count += 1
        if (count === max) {
          clearTimeout(t)
        }
      }, // or an arrow function to bind this context
      500
    )
  }
}

const kitty = new Cat('Fluffy', 'Purr')
kitty.annoy()

// TODO: Continue
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

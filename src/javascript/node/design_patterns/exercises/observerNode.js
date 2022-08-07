// https://blog.risingstack.com/fundamental-node-js-design-patterns/

const { EventEmitter } = require('events')

class MyObservable extends EventEmitter {
  hello(name) {
    this.emit('hello', name)
  }
}

const observable = new MyObservable()

observable.on('hello', name => {
  console.log(name)
})

observable.hello('John') // John

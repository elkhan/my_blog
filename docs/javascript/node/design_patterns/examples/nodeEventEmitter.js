/* eslint-disable max-classes-per-file */
// https://www.freecodecamp.org/news/understanding-node-js-event-driven-architecture-223292fcbc2d/

import EventEmitter from 'events'

import { readFile } from 'fs'

class WithLog extends EventEmitter {
  execute(taskFunc) {
    console.log('Before executing')
    this.emit('begin')
    taskFunc()
    this.emit('end')
    console.log('After executing')
  }
}

const withLog = new WithLog()

withLog.on('begin', () => console.log('About to execute'))
withLog.on('end', () => console.log('Done with execute'))

withLog.execute(() => console.log('*** Executing task ***'))

/*
Before executing
About to execute
*** Executing task ***
Done with execute
After executing
*/

console.log('*****Async*****')

// Async
class WithLogAsync extends EventEmitter {
  execute(asyncTaskFunc, ...args) {
    this.emit('begin')
    console.time('execute')
    // eslint-disable-next-line consistent-return
    asyncTaskFunc(...args, (err, data) => {
      if (err) {
        return this.emit('error', err)
      }

      this.emit('data', data)
      console.timeEnd('execute')
      this.emit('end')
    })
  }
}

const withLogAsync = new WithLogAsync()

withLogAsync.on('begin', () => console.log('About to execute'))
withLogAsync.on('end', () => console.log('Done with executing'))
withLogAsync.on('data', (data) => console.log(`Length: ${data.length}`))
withLogAsync.on('data', (data) =>
  console.log(`Characters: ${data.toString().length}`)
)
withLogAsync.on('error', (err) => console.log(err))

withLogAsync.execute(readFile, __filename)
/*
About to execute
Length: 1700
Characters: 1700
execute: 4.652ms
Done with executing
*/

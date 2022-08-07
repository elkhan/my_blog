console.log('script start')

const tickInterval = setInterval(() => {
  console.log('setInterval')
}, 0)

setTimeout(() => {
  console.log('setTimeout 1')
  process.nextTick(() => {
    console.log('nextTick 3')
    process.nextTick(() => {
      console.log('nextTick 4')
      setTimeout(() => {
        console.log('setTimeout 2')
        process.nextTick(() => {
          console.log('nextTick 5')
          process.nextTick(() => {
            console.log('nextTick 6')
            clearInterval(tickInterval)
          })
        })
      }, 0)
    })
  })
})

process.nextTick(() => {
  console.log('nextTick 1')
  process.nextTick(() => {
    console.log('nextTick 2')
  })
})

/*
script start
nextTick 1
nextTick 2
setInterval
setTimeout 1
nextTick 3
nextTick 4
setInterval
setTimeout 2
setInterval
nextTick 5
nextTick 6
*/

// http://www.future-processing.pl/blog/on-problems-with-threads-in-node-js/

const fs = require('fs')
const util = require('util')

const start = process.hrtime()

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 6; ++i) {
  ;(id => {
    fs.readdir('.', () => {
      const end = process.hrtime(start)
      console.log(
        util.format('readdir %d finished in %ds', id, end[0] + end[1] / 1e9)
      )
    })
  })(i)
}

/*
readdir 0 finished in 0.000982422s
readdir 3 finished in 0.00370478s
readdir 2 finished in 0.004157863s
readdir 4 finished in 0.004280951s
readdir 5 finished in 0.004331237s
readdir 1 finished in 0.004371846s
*/

/* UV_THREADPOOL_SIZE=5 node nodeThreads.js */
/*
readdir 0 finished in 0.001758242s
readdir 1 finished in 0.005085581s
readdir 2 finished in 0.005517628s
readdir 3 finished in 0.005862578s
readdir 4 finished in 0.005910563s
readdir 5 finished in 0.005948002s
*/

/* https://github.com/boudikian/cdnjs/blob/master/ajax/libs/async/0.1.0/async.js */

/* eslint-disable consistent-return */
/* eslint-disable func-names */
const events = require('events')

exports.forEach = function forEach(arr, iterator, callback) {
  if (!arr.length) {
    return callback()
  }
  let completed = 0
  arr.forEach((x) => {
    iterator(x, (err) => {
      if (err) {
        callback(err)
        // eslint-disable-next-line @typescript-eslint/no-empty-function, no-param-reassign
        callback = function () {}
      } else {
        completed += 1
        if (completed === arr.length) {
          callback()
        }
      }
    })
  })
}

exports.forEachSeries = function forEachSeries(arr, iterator, callback) {
  if (!arr.length) {
    return callback()
  }
  let completed = 0
  const iterate = function iterate() {
    iterator(arr[completed], (err) => {
      if (err) {
        callback(err)
        // eslint-disable-next-line @typescript-eslint/no-empty-function, no-param-reassign
        callback = function () {}
      } else {
        completed += 1
        if (completed === arr.length) {
          callback()
        } else {
          iterate()
        }
      }
    })
  }
  iterate()
}

const doParallel = function (fn) {
  return function () {
    const args = Array.prototype.slice.call(arguments)
    return fn.apply(null, [exports.forEach].concat(args))
  }
}
const doSeries = function (fn) {
  return function () {
    const args = Array.prototype.slice.call(arguments)
    return fn.apply(null, [exports.forEachSeries].concat(args))
  }
}

// eslint-disable-next-line no-underscore-dangle
const _map = function (eachfn, arr, iterator, callback) {
  const results = []
  // eslint-disable-next-line no-param-reassign
  arr = arr.map((x, i) => ({ index: i, value: x }))
  eachfn(
    arr,
    (x, callback) => {
      iterator(x.value, (err, v) => {
        results[x.index] = v
        callback(err)
      })
    },
    (err) => {
      callback(err, results)
    }
  )
}
exports.map = doParallel(_map)
exports.mapSeries = doSeries(_map)

// reduce only has a series version, as doing reduce in parallel won't
// work in many situations.
exports.reduce = function reduce(arr, memo, iterator, callback) {
  exports.forEachSeries(
    arr,
    (x, callback) => {
      iterator(memo, x, (err, v) => {
        // eslint-disable-next-line no-param-reassign
        memo = v
        callback(err)
      })
    },
    (err) => {
      callback(err, memo)
    }
  )
}
// inject alias
exports.inject = exports.reduce
// foldl alias
exports.foldl = exports.reduce

exports.reduceRight = function (arr, memo, iterator, callback) {
  const reversed = arr.map((x) => x).reverse()
  exports.reduce(reversed, memo, iterator, callback)
}
// foldr alias
exports.foldr = exports.reduceRight

// eslint-disable-next-line no-underscore-dangle
const _filter = function (eachfn, arr, iterator, callback) {
  const results = []
  // eslint-disable-next-line no-param-reassign
  arr = arr.map((x, i) => ({ index: i, value: x }))
  eachfn(
    arr,
    (x, callback) => {
      iterator(x.value, (v) => {
        if (v) {
          results.push(x)
        }
        callback()
      })
    },
    (err) => {
      callback(results.sort((a, b) => a.index - b.index).map((x) => x.value))
    }
  )
}
exports.filter = doParallel(_filter)
exports.filterSeries = doSeries(_filter)
// select alias
exports.select = exports.filter
exports.selectSeries = exports.filterSeries

// eslint-disable-next-line no-underscore-dangle
const _reject = function (eachfn, arr, iterator, callback) {
  const results = []
  // eslint-disable-next-line no-param-reassign
  arr = arr.map((x, i) => ({ index: i, value: x }))
  eachfn(
    arr,
    (x, callback) => {
      iterator(x.value, (v) => {
        if (!v) {
          results.push(x)
        }
        callback()
      })
    },
    (err) => {
      callback(results.sort((a, b) => a.index - b.index).map((x) => x.value))
    }
  )
}
exports.reject = doParallel(_reject)
exports.rejectSeries = doSeries(_reject)

// eslint-disable-next-line no-underscore-dangle
const _detect = function (eachfn, arr, iterator, main_callback) {
  eachfn(
    arr,
    (x, callback) => {
      iterator(x, (result) => {
        result ? main_callback(x) : callback()
      })
    },
    (err) => {
      main_callback()
    }
  )
}
exports.detect = doParallel(_detect)
exports.detectSeries = doSeries(_detect)

exports.some = function (arr, iterator, main_callback) {
  exports.forEach(
    arr,
    (x, callback) => {
      iterator(x, (v) => {
        if (v) {
          main_callback(true)
          // eslint-disable-next-line @typescript-eslint/no-empty-function, no-param-reassign
          main_callback = function () {}
        }
        callback()
      })
    },
    (err) => {
      main_callback(false)
    }
  )
}
// any alias
exports.any = exports.some

exports.every = function (arr, iterator, main_callback) {
  exports.forEach(
    arr,
    (x, callback) => {
      iterator(x, (v) => {
        if (!v) {
          main_callback(false)
          // eslint-disable-next-line @typescript-eslint/no-empty-function, no-param-reassign
          main_callback = function () {}
        }
        callback()
      })
    },
    (err) => {
      main_callback(true)
    }
  )
}
// all alias
exports.all = exports.every

exports.sortBy = function (arr, iterator, callback) {
  exports.map(
    arr,
    (x, callback) => {
      iterator(x, (err, criteria) => {
        if (err) {
          callback(err)
        } else {
          callback(null, { value: x, criteria })
        }
      })
    },
    (err, results) => {
      if (err) {
        return callback(err)
      }
      callback(
        null,
        results
          .sort((left, right) => {
            const a = left.criteria
            const b = right.criteria
            // eslint-disable-next-line no-nested-ternary
            return a < b ? -1 : a > b ? 1 : 0
          })
          .map((x) => x.value)
      )
    }
  )
}

exports.auto = function (tasks, callback) {
  // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-empty-function
  callback = callback || function () {}
  const keys = Object.keys(tasks)
  if (!keys.length) {
    return callback(null)
  }

  const completed = []
  const emitter = new events.EventEmitter()
  emitter.addListener('taskComplete', () => {
    if (completed.length === keys.length) {
      callback(null)
    }
  })

  keys.forEach((k) => {
    const task = tasks[k] instanceof Function ? [tasks[k]] : tasks[k]
    const taskCallback = function (err) {
      if (err) {
        callback(err)
        // stop subsequent errors hitting the callback multiple times
        // eslint-disable-next-line @typescript-eslint/no-empty-function, no-param-reassign
        callback = function () {}
      } else {
        completed.push(k)
        emitter.emit('taskComplete')
      }
    }
    const requires = task.slice(0, Math.abs(task.length - 1)) || []
    const ready = function () {
      return requires.reduce((a, x) => a && completed.indexOf(x) !== -1, true)
    }
    if (ready()) {
      task[task.length - 1](taskCallback)
    } else {
      const listener = function () {
        if (ready()) {
          emitter.removeListener('taskComplete', listener)
          task[task.length - 1](taskCallback)
        }
      }
      emitter.addListener('taskComplete', listener)
    }
  })
}

exports.waterfall = function (tasks, callback) {
  if (!tasks.length) {
    return callback()
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-param-reassign
  callback = callback || function () {}
  const wrapIterator = function (iterator) {
    return function (err) {
      if (err) {
        callback(err)
        // eslint-disable-next-line @typescript-eslint/no-empty-function, no-param-reassign
        callback = function () {}
      } else {
        const args = Array.prototype.slice.call(arguments, 1)
        const next = iterator.next()
        if (next) {
          args.push(wrapIterator(next))
        } else {
          args.push(callback)
        }
        process.nextTick(() => {
          iterator.apply(null, args)
        })
      }
    }
  }
  wrapIterator(exports.iterator(tasks))()
}

exports.parallel = function (tasks, callback) {
  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-param-reassign
  callback = callback || function () {}
  exports.map(
    tasks,
    (fn, callback) => {
      fn(function (err) {
        let args = Array.prototype.slice.call(arguments, 1)
        if (args.length <= 1) {
          args = args[0]
        }
        callback.call(null, err, args || null)
      })
    },
    callback
  )
}

exports.series = function (tasks, callback) {
  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-param-reassign
  callback = callback || function () {}
  exports.mapSeries(
    tasks,
    (fn, callback) => {
      fn(function (err) {
        let args = Array.prototype.slice.call(arguments, 1)
        if (args.length <= 1) {
          args = args[0]
        }
        callback.call(null, err, args || null)
      })
    },
    callback
  )
}

exports.iterator = function (tasks) {
  const makeCallback = function (index) {
    const fn = function () {
      if (tasks.length) {
        tasks[index].apply(null, arguments)
      }
      return fn.next()
    }
    fn.next = function () {
      return index < tasks.length - 1 ? makeCallback(index + 1) : undefined
    }
    return fn
  }
  return makeCallback(0)
}

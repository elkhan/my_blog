const myModule = (() => {
  const _private = {
    i: 5,
    get() {
      console.log(`current value: ${this.i}`)
    },
    set(val) {
      this.i = val
    },
    run() {
      console.log('running')
    },
    jump() {
      console.log('jumping')
    },
  }
  return {
    facade: args => {
      _private.set(args.val)
      _private.get()
      if (args.run) {
        _private.run()
      }
    },
  }
})()

myModule.facade({ run: true, val: 10 })

/**
 * current value: 10
 * running
 */

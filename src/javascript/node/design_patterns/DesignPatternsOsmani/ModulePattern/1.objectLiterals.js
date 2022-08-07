const myModule = {
  // object literals can contain properties and methods.
  // e.g we can define a further object for module configuration:
  myProperty: 'someValue',

  myConfig: {
    useCaching: true,
    language: 'en',
  },

  // a very basic method
  saySomething() {
    console.log('Where in the world is Paul Irish today?')
  },

  // output a value based on the current configuration
  reportMyConfig() {
    console.log(
      `Caching is: ${this.myConfig.useCaching ? 'enabled' : 'disabled'}`
    )
  },

  // override the current configuration
  updateMyConfig(newConfig) {
    if (typeof newConfig === 'object') {
      this.myConfig = newConfig
      console.log(this.myConfig.language)
    }
  },
}

myModule.saySomething() // Where in the world is Paul Irish today?
myModule.reportMyConfig() // Caching is: enabled
myModule.updateMyConfig({ language: 'fr', useCaching: false }) // fr
myModule.reportMyConfig() // Caching is: disabled

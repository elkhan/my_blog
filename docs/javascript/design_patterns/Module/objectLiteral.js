// Additional reading http://rmurphey.com/blog/2009/10/15/using-objects-to-organize-your-code
const myModule = {
  myProperty: 'someValue',

  myConfig: {
    useCaching: true,
    language: 'en',
  },

  saySomething() {
    console.log('Reporting from saySomething function')
  },

  reportMyConfig() {
    console.log(
      `Caching is: ${this.myConfig.useCaching ? 'enabled' : 'disabled'}`
    )
  },

  updateMyConfig(newConfig) {
    if (typeof newConfig === 'object') {
      this.myConfig = newConfig
      console.log(this.myConfig.language)
    }
  },
}

myModule.saySomething()
// Reporting from saySomething function

myModule.reportMyConfig()
// Caching is: enabled

myModule.updateMyConfig({
  language: 'fr',
  useCaching: false,
})
// fr

myModule.reportMyConfig()
// Caching is: disabled

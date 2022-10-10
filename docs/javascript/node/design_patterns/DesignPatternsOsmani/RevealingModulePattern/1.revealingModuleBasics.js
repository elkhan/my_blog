// An updated pattern where we would simply define all of our functions and variables in the private scope
// and return an anonymous object with pointers to the private functionality we wished to reveal as public.
const myRevealingModule = (function() {
  let privateVar = 'Ben Cherry'
  const publicVar = 'Hey there!'

  function privateFunction() {
    console.log(`Name: ${privateVar}`)
  }

  function publicSetName(strName) {
    privateVar = strName
  }

  function publicGetName() {
    privateFunction()
  }

  // Reveal public pointers to private functions and properties
  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName,
  }
})()

myRevealingModule.setName('Paul Kinlan')
myRevealingModule.getName() // Name: Paul Kinlan

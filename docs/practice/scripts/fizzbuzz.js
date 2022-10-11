function fizzBuzz(n) {
  for (let i = 1; i <= n; i += 1) {
    switch (true) {
      case i % 15 === 0:
        console.log('fizzbuzz')
        break
      case i % 3 === 0:
        console.log('fizz')
        break
      case i % 5 === 0:
        console.log('buzz')
        break
      default:
        console.log(i)
        break
    }
  }
}

fizzBuzz(15)

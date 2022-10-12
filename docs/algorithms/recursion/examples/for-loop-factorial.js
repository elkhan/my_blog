const forLoopFactorial = (number) => {
  let product = 1
  for (let i = number; i >= 1; i -= 1) {
    product *= i
  }
  return product
}
console.log(forLoopFactorial(5))

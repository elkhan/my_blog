function nester1() {
  return () => () => 'Found me!'
}

console.log(nester1()()())

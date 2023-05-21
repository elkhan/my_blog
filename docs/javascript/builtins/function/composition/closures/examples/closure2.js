function foo() {
  const bar = 'bar'

  function baz() {
    console.log(bar)
  }

  bam(baz)
}

function bam(qux) {
  qux()
}

foo() // bar

/**
 *
 */

function anotherFoo() {
  const yaaar = 'yaaar'

  return function() {
    console.log(yaaar)
  }
}

function anotherBam() {
  anotherFoo()()
}

anotherBam() // yaaar

/**
 *
 */

function timer() {
  const qux = 'qux'
  setTimeout(() => {
    console.log(qux)
  }, 1000)
}

timer()

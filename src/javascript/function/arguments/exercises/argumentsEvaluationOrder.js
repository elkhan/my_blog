// http://dmitrysoshnikov.com/ecmascript/chapter-8-evaluation-strategy/#arguments-evaluation-order

function foo(...args) {
  console.log('args', args) // args [ 1, 2, 3 ]
}

foo(
  (() => {
    console.log(1) // 1
    return 1
  })(),
  (() => {
    console.log(2) // 2
    return 2
  })(),
  (() => {
    console.log(3) // 3
    return 3
  })()
)

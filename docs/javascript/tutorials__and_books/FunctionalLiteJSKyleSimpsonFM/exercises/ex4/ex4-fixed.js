// function foo() {
//     return 42;
// }

// function bar() {
//     return 100;
// }

function foo(v) {
  return function() {
    return v
  }
}

function add(x, y) {
  return x + y
}

function add2(fn1, fn2) {
  return add(fn1(), fn2())
}

function addn(vals) {
  return args.slice(1).reduce((prev, current) => function addPrevCur() {
      return add2(prev, current)
    }, args[0])()

  // if (vals.length > 2) {
  // 	return addn(
  // 		[
  // 			function() {
  // 				return add2(vals[0],vals[1]);
  // 			}
  // 		]
  // 		.concat(vals.slice(2))
  // 	);
  // }
  // return add2(vals[0],vals[1]);
}

let vals = [10, 100, 30, 100, 42, 10, 15]

vals = vals
  .reduce((a, v) => {
    if (!~a.indexOf(v)) return a.concat(v)
    return a
  }, [])
  // .filter(function(v,i,arr){
  //    return i == arr.lastIndexOf(v);
  // })
  .filter((v) => v % 2 == 0)
  .map(foo)

console.log(addn(vals))

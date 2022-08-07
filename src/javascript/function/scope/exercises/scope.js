// https://medium.com/@mikaelbrevik/variable-declarations-in-detail-29407b4e4802
// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch1.md

function outer() {
  let x = 'outer local'
  function inner() {
    x = 'inner local'
    function local() {
      x = 'func local'
      console.log(x)
    }
    local()
  }
  inner()
}

outer() // func local

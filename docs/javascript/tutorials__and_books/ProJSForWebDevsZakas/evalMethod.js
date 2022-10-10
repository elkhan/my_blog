// eslint-disable-next-line no-eval
eval("console.log('Hi')") // equal to console.log("Hi");
// “This method works like an entire ECMAScript interpreter and accepts one argument, a string of ECMAScript (or JavaScript) to execute.”

// “A function or variables inside an eval() call can be referenced by the code outside, as follows:

// eslint-disable-next-line no-eval
eval("function sayHi() { console.log('hi'); }")
// eslint-disable-next-line no-undef
sayHi() // "hi" - wouldn't work in strict mode

// eslint-disable-next-line no-eval
eval("var msg = 'hello world';")
// eslint-disable-next-line no-undef
console.log(msg) // "hello world” - wouldn't work in strict mode
// “In strict mode, variables and functions created inside of eval() are not accessible outside”

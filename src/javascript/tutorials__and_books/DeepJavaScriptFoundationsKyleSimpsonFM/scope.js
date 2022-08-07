/*
var foo = "bar";

function bar() {
    console.log(foo); // undefined unless declaration below is commented out
    var foo = "baz" // if commented out - foo becomes bar from the global scope
}

function baz(foo) {
    foo = "bam"
    bam = "yay" // creates implicitly globally - bad. Strict mode - error
}
*/

/*
var foo = "bar";

function bar() {
    var foo = "baz"
    function baz(foo) {
        foo = "bam"
        bam = "yay"
    }
    baz()
}

bar()
foo // bar
bam // yay
// baz() // ReferenceError
*/

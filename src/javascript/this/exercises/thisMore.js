// /* eslint-disable no-use-before-define */
// /* eslint-disable func-names */
// /* eslint-disable no-param-reassign */
// /* eslint-disable no-plusplus */
// /* eslint-disable no-underscore-dangle */
//
// // https://www.javascriptjanuary.com/blog/what-is-this-why-is-that
// // https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/
//
// // Creating these closures for every method for every instance of any class in your program would require a large amount of memory usage!
// function Counter(initialValue = 0) {
//     let _count = initialValue
//
//     return {
//         reset() {
//             _count = 0
//         },
//         next() {
//             return ++_count
//         },
//     }
// }
//
// const myCounter = Counter()
// console.log(myCounter.next()) // 1
// console.log(myCounter.next()) // 2
//
// // Better optimized
// const BetterCounter = {
//     reset(counter) {
//         counter._count = 0
//     },
//     next(counter) {
//         return ++counter._count
//     },
//     new(initialValue = 0) {
//         return {
//             _count: initialValue,
//         }
//     },
// }
//
// const myBetterCounter = BetterCounter.new()
// console.log(BetterCounter.next(myBetterCounter)) // 1
// console.log(BetterCounter.next(myBetterCounter)) // 2
// const anotherBetterCounter = BetterCounter.new()
// console.log(BetterCounter.next(anotherBetterCounter)) // 1
//
// // This counter
// /*
// const myCounter = Counter.new();
// Counter.next.call(myCounter);
// */
// const ThisCounter = {
//     reset() {
//         this._count = 0
//     },
//     next() {
//         return ++this._count
//     },
//     value() {
//         return this._count
//     },
//     new(initialValue = 0) {
//         return {
//             _count: initialValue,
//             // Adds a reference to each method for each reference,
//             // but does not create a new function
//             reset: ThisCounter.reset,
//             next: ThisCounter.next,
//             value: ThisCounter.value,
//         }
//     },
// }
//
// const thisCounter = ThisCounter.new()
// thisCounter
//     .next()(
//         // Hopefully calling reset on another instance doesn't reset myCounter
//         // eslint-disable-next-line prettier/prettier
// ThisCounter.new().reset()
// // console.log('thisCounter.next()', thisCounter.next()) // thisCounter.next() 2
//
// // Bind
// // const bindCounter = ThisCounter.new();
// // setInterval(bindCounter.next, 1000);
//
// // setInterval(function() {
// //     bindCounter.next();
// // }, 1000);
//
// // setInterval(() => {
// //     console.log(bindCounter.value());
// // }, 1000);
//
// function Pet(type, legs) {
//     this.type = type
//     this.legs = legs
//     this.logInfo = function() {
//         // console.log(this); // Pet { type: 'Cat', legs: 4, logInfo: [Function] }
//         // console.log(this === cat); // true
//         console.log(`The ${this.type} has ${this.legs} legs`) // The Cat has 4 legs
//     }
//     // Arrow function has lexical binding of this
//     this.display = () => {
//         console.log(`How many legs this cat has? ${this.legs}`)
//     }
// }
//
// const cat = new Pet('Cat', 4)
// cat.logInfo()
// setTimeout(cat.logInfo, 1000) // The undefined has undefined legs
// cat.logInfo = cat.logInfo.bind(cat)
// setTimeout(cat.logInfo, 1000) // The Cat has 4 legs
// // No need to bind explicitly because of an arrow function above
// setTimeout(cat.display, 1000) // How many legs this cat has? 4
//
// // Indirect invocation
// const rabbit = { name: 'White Rabbit' }
//
// function concatName(string) {
//     console.log(this === rabbit) // true
//     console.log(`${string} ${this.name}`)
// }
//
// concatName.call(rabbit, 'Hello') // Hello White Rabbit
// concatName.apply(rabbit, ['Bye']) // Bye White Rabbit
//
// // Another practical example is creating hierarchies of classes in ES5 to call the parent constructor:
// function Rabbit(name, countLegs) {
//     console.log('this instanceof Rabbit', this instanceof Rabbit) // true
//     Runner.call(this, name)
//     this.countLegs = countLegs
// }
//
// function Runner(name) {
//     console.log('this instanceof Rabbit', this instanceof Rabbit) // true
//     this.name = name
// }
//
// const myRabbit = new Rabbit('Rabbit Jo', 4)
// console.log(myRabbit.name) // Rabbit Jo
//
// // Bind
// function multiply(num) {
//     return this * num
// }
//
// const double = multiply.bind(2)
// console.log('double(3)', double(3)) // double(3) 6
// console.log('double(5)', double(5)) // double(5) 10

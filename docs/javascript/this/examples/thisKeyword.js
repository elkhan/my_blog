// https://medium.com/javascript-scene/what-is-this-the-inner-workings-of-javascript-objects-d397bfa0708a
const a = {
  a: 'a',
}

const obj = {
  // arrow functions inherit 'this' from the context in which they're created
  getThis: () => this, // 'this' === global (or window)
  getThis2() {
    return this
  },
}

obj.getThis3 = obj.getThis.bind(obj)
obj.getThis4 = obj.getThis2.bind(obj)
const answers = [
  obj.getThis(), // global {}
  obj.getThis.call(a), // global {} - binding won't work with arrow functions
  obj.getThis2(), // obj
  obj.getThis2.call(a), // { a: 'a' },
  obj.getThis3(), // global {} - binding won't work with arrow functions
  obj.getThis3.call(a), // global {} - binding won't work with arrow functions
  obj.getThis4(), // obj
  obj.getThis4.call(a), // obj - not 'a' or 'global' because it was bound earlier to 'obj'
]

console.log(answers)

/**
 *
 */

class Obj {
  getThis = () => this

  getThis2() {
    return this
  }
}

const obj2 = new Obj()

obj2.getThis3 = obj2.getThis.bind(obj2)
obj2.getThis4 = obj2.getThis2.bind(obj2)

const answers2 = [
  obj2.getThis(),
  obj2.getThis.call(a),
  obj2.getThis2(),
  obj2.getThis2.call(a),
  obj2.getThis3(),
  obj2.getThis3.call(a),
  obj2.getThis4(),
  obj2.getThis4.call(a),
]

console.log(answers2)

/*
[ Obj {
    getThis: [Function],
    getThis3: [Function: bound ],
    getThis4: [Function: bound getThis2] },
  Obj {
    getThis: [Function],
    getThis3: [Function: bound ],
    getThis4: [Function: bound getThis2] },
  Obj {
    getThis: [Function],
    getThis3: [Function: bound ],
    getThis4: [Function: bound getThis2] },
  { a: 'a' }, // 
  Obj {
    getThis: [Function],
    getThis3: [Function: bound ],
    getThis4: [Function: bound getThis2] },
  Obj {
    getThis: [Function],
    getThis3: [Function: bound ],
    getThis4: [Function: bound getThis2] },
  Obj {
    getThis: [Function],
    getThis3: [Function: bound ],
    getThis4: [Function: bound getThis2] },
  Obj {
    getThis: [Function],
    getThis3: [Function: bound ],
    getThis4: [Function: bound getThis2] } ]
 */

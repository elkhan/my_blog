/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable no-void */
/* eslint-disable no-underscore-dangle */
const _this = void 0

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _defineProperties(target, props) {
  for (let i = 0; i < props.length; i += 1) {
    const descriptor = props[i]
    descriptor.enumerable = descriptor.enumerable || false
    descriptor.configurable = true
    if ('value' in descriptor) {
      descriptor.writable = true
    }
    Object.defineProperty(target, descriptor.key, descriptor)
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) {
    _defineProperties(Constructor.prototype, protoProps)
  }
  if (staticProps) {
    _defineProperties(Constructor, staticProps)
  }
  return Constructor
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }
  return obj
}

// https://medium.com/javascript-scene/what-is-this-the-inner-workings-of-javascript-objects-d397bfa0708a
const a = {
  a: 'a',
}
const obj = {
  // arrow functions inherit 'this' from the context in which they're created
  getThis: function getThis() {
    return _this
  },
  // 'this' === global (or window)
  getThis2: function getThis2() {
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
  obj.getThis4.call(a), // obj - not 'a' because it was bound earlier to 'obj'
]
console.log(answers)
/**
 *
 */

const Obj =
  /* #__PURE__ */
  (function () {
    function Obj() {
      const _this2 = this

      _classCallCheck(this, Obj)

      _defineProperty(this, 'getThis', () => _this2)
    }

    _createClass(Obj, [
      {
        key: 'getThis2',
        value: function getThis2() {
          return this
        },
      },
    ])

    return Obj
  })()

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
console.log(answers2) // npx babel thisKeyword.js

// https://learn.co/lessons/js-eventing-js-dom-and-event-listening
// List of events https://developer.mozilla.org/en-US/docs/Web/Events
// Adding an event listener to a DOM node is easy — we just call addEventListener() on the node.
// addEventListener() takes two arguments: the name of the event, and a function to handle the event.

// Adding a listener for click events to the main#main element in setAttrEval.html
const main = document.getElementById('main')
// eslint-disable-next-line func-names,no-unused-vars
main.addEventListener('click', (event) => {
  alert('I was clicked!')
})
// The second argument is a function that accepts the event as its argument.
// The event has a number of useful properties on it — keypress, keydown, and keyup events,
// for example, will have a which property that tells us which key was pressed.
const input1 = document.querySelector('input')
// eslint-disable-next-line func-names
input1.addEventListener('keydown', (e) => {
  console.log(e.which)
}) // pressing "enter" prints 13 in console; pressing "a" prints 65; etc.

// Preventing the default behavior
// Prevent the input from receiving "g"
const input2 = document.querySelector('input')
// eslint-disable-next-line consistent-return,func-names
input2.addEventListener('keydown', (e) => {
  if (e.which === 71) {
    return e.preventDefault()
  }
})
// Every DOM event comes with a preventDefault property —
// preventDefault is a function that, when called, will prevent the default event from taking place.
// It provides us an opportunity to intercept and tweak user interactions
// (usually in more helpful ways than preventing them from typing "g").

// Like preventDefault, stopPropagation is a function that interrupts the event's normal behavior.
// In this case, it stops the event from triggering other nodes in the DOM that might be
// listening for the same event.

// Bubbling and capturing - Events order http://www.quirksmode.org/js/events_order.html
// http://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing

// DOM events propagate by bubbling (starting at the target node and moving up the DOM tree
// to the root) and capturing (starting from the target node's parent elements and propagating down
// the tree until it reaches the target)
const divs1 = document.querySelectorAll('div')

// eslint-disable-next-line no-unused-vars
function bubble(e) {
  // remember all of those fancy DOM node properties?
  // we're making use of them to get the number
  // in each div here!

  // if `this` is a bit confusing, don't worry —
  // for now, know that it refers to the div that
  // is triggering the current event handler.
  console.log(`${this.firstChild.nodeValue.trim()} bubbled`)
}

// eslint-disable-next-line no-plusplus
for (let i = 0, l = divs1.length; i < l; i += 1) {
  divs1[i].addEventListener('click', bubble)
}
// The event starts at div 5, and then it bubbles up to the topmost node.
// Along the way, it triggers any other nodes that are listening for the event -- in this case, 'click'

// Capturing
// In order to capture, we need to set the third argument to addEventListener to true
const divs2 = document.querySelectorAll('div')

// eslint-disable-next-line no-unused-vars
function capture(e) {
  console.log(`${this.firstChild.nodeValue.trim()} captured`)
}

// eslint-disable-next-line no-plusplus
for (let i = 0, l = divs2.length; i < l; i += 1) {
  // set the third argument to `true`!
  divs2[i].addEventListener('click', capture, true)
}
// Now, the event propagates from the top of the page towards the target node,
// triggering event handlers as appropriate along the way.

// The target node is the last node to capture the event,
// whereas it's the first node to bubble the event up.

// Let's rewrite the bubbling example to stop propagation so that only one event is triggered
const divs3 = document.querySelectorAll('div')

function bubble2(e) {
  // stop! that! propagation!
  e.stopPropagation()

  console.log(`${this.firstChild.nodeValue.trim()} bubbled`)
}

// eslint-disable-next-line no-plusplus
for (let i = 0, l = divs3.length; i < l; i += 1) {
  divs3[i].addEventListener('click', bubble2)
}

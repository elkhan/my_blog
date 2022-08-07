// Creating an element
const element = document.createElement('div')

// Setting properties
element.innerHTML = 'Hello, DOM!'
element.style.backgroundColor = '#f9f9f9'

// To get an element to appear in the DOM, we have to append it to an existing DOM node.
document.body.appendChild(element)
element.style.textAlign = 'center' // Text is centered

// We can append elements to that element:
const ul = document.createElement('ul')
// eslint-disable-next-line no-plusplus
for (let i = 0; i < 3; i += 1) {
  const li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}
element.appendChild(ul)
ul.style.textAlign = 'left'

// Removing an element
ul.removeChild(ul.querySelector('li:nth-child(2)')) // Second element removed

ul.remove()

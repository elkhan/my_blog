// https://learn.co/lessons/js-deli-counter

/* eslint-disable no-unused-vars,consistent-return */

// Build a function that a new customer will use when entering the deli.
// The function, takeANumber, should accept the current line of people, katzDeliLine, along with
// the new person's name as parameters. The function should return their position in line.
// And don't go being too programmer-y and give them their index. These are normal people.
// If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.
const katzDeliLine = []

function takeANumber(deliLine, name) {
  deliLine.push(name)
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < deliLine.length; i += 1) {
    if (deliLine[i] === name) {
      return `Welcome, ${name}. You are number ${i + 1} in line.`
    }
  }
}

// Build a function nowServing. This function should return the first person in line
// and then remove that individual from the line. If there is nobody in line,
// it should return "There is nobody waiting to be served!"
function nowServing(deliLine) {
  let name
  if (deliLine.length > 0) {
    name = deliLine.shift()
    return `Currently serving ${name}.`
  }
  return 'There is nobody waiting to be served!'
}

// Build a function currentLine that returns the current line.
// For example, if katzDeliLine is currently ["Ada", "Grace"], currentLine(katzDeliLine)
// would return "The line is currently: 1. Ada 2. Grace". If there is nobody in line,
// it should return "The line is currently empty."
function currentLine(line) {
  if (line.length > 0) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < line.length; i += 1) {
      katzDeliLine.push(` ${i + 1}. ${line[i]}`)
    }
    return `The line is currently:${katzDeliLine}`
  }
  return 'The line is currently empty.'
}

/*
https://learn.co/lessons/js-basics-online-shopping-lab
 */

// Define a global variable (use var at the top level) called cart.
// Initialize it as an empty array.
let cart = []

// Define a function getCart that takes no arguments and returns the cart.
function getCart() {
  return cart
}

// We've given you a function setCart() which takes one argument, an array,
// and sets cart (a variable that we've provided) to that array.
function setCart(newCart) {
  cart = newCart
}

// We've also given you a function total which does not accept any arguments.
// It iterates over the items in cart and adds up their prices, then returns the total.
function total() {
  let t = 0

  // eslint-disable-next-line no-plusplus
  for (let i = 0, l = cart.length; i < l; i += 1) {
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

// Define a function addToCart. This function should accept one argument,
// the item the user wants to purchase.
// This function should automatically set a price for this item by generating a random number
// between 0 and 100. (Hint: Math.random() generates a random number in 0, 1;
// Math.floor() rounds a number down to the nearest integer.)
// This function should add the item and the price as an object ({item: price}) to the cart array.
// This function should print out to the console <item> has been added to your cart.
// and return the cart.
function addToCart(item) {
  const price = Math.floor(Math.random() * 100)
  cart.push({ [item]: price })
  console.log(`${item} has been added to your cart.`)
  return cart
}

// Define a function viewCart which does not accept any arguments.
// This function should loop over every item in cart to print out "In your cart,
// you have [item and price pairs].". If there isn't anything in your cart,
// the function should print out "Your shopping cart is empty.".
function viewCart() {
  const newArray = []
  if (cart.length === 0) {
    return console.log('Your shopping cart is empty.')
  }
  // eslint-disable-next-line no-plusplus
  for (let item = 0; item < cart.length; item += 1) {
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const i in cart[item]) {
      newArray.push(`${i} at $${cart[item][i]}`)
    }
  }
  console.log(`In your cart, you have ${newArray.join(', ')}.`)
}

// Define a function removeFromCart which accepts one argument,
// the name of the item you wish to remove. If the item isn't in the cart,
// the function should print out "That item is not in your cart.".
// If the item is in your cart, it should remove the object from the cart array.
// Then return the cart. (HINT: Check each object's key to see if it matches the parameter,
// then remove it if it matches. You might find hasOwnProperty to be useful.)
function removeFromCart(item) {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < cart.length; i += 1) {
    // eslint-disable-next-line no-prototype-builtins
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1)
      return cart
    }
  }
  console.log('That item is not in your cart.')
}

// Define a function placeOrder which accepts one argument, a credit card number.
// If no argument is received, then the function should print out
// "We don't have a credit card on file for you to place your order.".
// If there is a credit card on file, the function should print out
// "Your total cost is $${total()}, which will be charged to the card ${cardNumber}.".
// The function should empty the cart array.
function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log(
      "We don't have a credit card on file for you to place your order."
    )
  } else {
    console.log(
      `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    )
  }
  cart = []
}

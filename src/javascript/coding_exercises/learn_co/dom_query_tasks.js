// https://github.com/learn-co-students/javascript-hide-and-seek-v-000
// https://learn.co/lessons/javascript-hide-and-seek
// Define a function getFirstSelector(selector), which accepts a selector and returns
// the first element that matches.
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

// Define a function nestedTarget() that pulls a .target out of #nested
// (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ).
// (Note that in setAttrEval.html #nested and .target just happen to be divs.
// This method should work with arbitrary elements.)
function nestedTarget() {
  return document.querySelector('#nested .target')
}

// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n.
// (You might need to make use of parseInt()
function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < lis.length; i += 1) {
    lis[i].innerHTML = parseInt(n * lis[i].innerHTML, 10)
  }
  return lis
}

// Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node.
// (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them.
// This is challenging to implement correctly, but not beyond your ability!)
function deepestChild() {
  let grand = document.getElementById('grand-node')
  let next = grand.children[0]

  while (next) {
    grand = next
    // eslint-disable-next-line prefer-destructuring
    next = grand.children[0]
  }
  return grand
}

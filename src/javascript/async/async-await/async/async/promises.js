/* eslint-disable no-undef */
// https://www.youtube.com/watch?v=PoRJizFvM7s

const posts = [
  { title: 'Post One', body: 'This is a post one' },
  { title: 'Post Two', body: 'This is a post two' },
]

function getPosts() {
  setTimeout(() => {
    let output = ''
    posts.forEach(post => {
      output += `<li>${post.title}</li>`
    })
    // eslint-disable-next-line no-undef
    document.body.innerHTML = output
  }, 1000)
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)

      const error = false

      if (!error) {
        resolve()
      } else {
        const err = new Error('Error: Something went wrong')
        reject(err)
      }
    }, 2000)
  })
}

// createPost({ title: "Post Three", body: "This is a post three" })
//   .then(getPosts)
//   .catch(error => {
//     console.log(error);
//   });

/**
 * Promise.all
 */

const promise1 = Promise.resolve('Hello World') // instead of new Promise(...)
const promise2 = 10
// eslint-disable-next-line no-unused-vars
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Goodbye')
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>
  res.json()
)

Promise.all([promise1, promise2, promise3]).then(values => {
  values.forEach(value => {
    // eslint-disable-next-line no-undef
    const li = document.createElement('li')
    li.innerHTML = value
    document.body.insertBefore(li, document.body.firstChild)
  })
}) // ["Hello World", 10, "Goodbye"]

Promise.all([promise4]).then(values => console.log(values))

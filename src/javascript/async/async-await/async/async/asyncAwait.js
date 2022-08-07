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

async function init() {
  await createPost({ title: 'Post Three', body: 'This is a post three' })
  getPosts()
}

init()

async function fetchUsers() {
  // eslint-disable-next-line no-undef
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  console.log(data)
}

fetchUsers()

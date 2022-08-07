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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post)
    callback()
  }, 2000)
}

createPost({ title: 'Post Three', body: 'This is a post three' }, getPosts)

/*
1. Async Await
 */
// async function getData() {
//   const response = await fetch('https://ironhack-pokeapi.herokuapp.comb/pokemon/1')
//   // assuming response.ok
//   try {
//     if (response.ok) {
//       const data = await response.json()
//       console.log(data.name)
//     }
//     return 'Response not ok'
//   } catch (error) {
//     console.log(error.message)
//     return false
//   }
// }
// getData()
// getData()
//   .then((r) => console.log(`Pokemon name ${r.name}`))
//   .catch((error) => error.message)

/*
2. Async Control Flow
 */
let myData = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]

function updateData(newData) {
  myData = myData.map((el) => {
    if (el.id === myData.id) {
      return newData
    }
    return el
  })
}

async function fetchData(dataSet) {
  // eslint-disable-next-line no-restricted-syntax
  for (const entry of dataSet) {
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(
      `https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}`
    )
    // eslint-disable-next-line no-await-in-loop
    const data = await response.json()
    console.log(data)
  }
}

fetchData(myData)

/*
3. Promise.all
 */
async function fetchPokemonData(dataSet) {
  const pokemonPromises = await dataSet.map((entry) =>
    fetch(`https://ironhack-pokeapi.herokuapp.com/pokemon/${entry.id}`)
  )
  const results = await Promise.all(pokemonPromises)
  results.forEach((result) => {
    updateData(result.data)
  })
}

fetchPokemonData(myData)

// https://www.youtube.com/watch?v=PoRJizFvM7s

const posts = [
  { title: 'Post One', body: 'This is a post one' },
  { title: 'Post Two', body: 'This is a post two' },
]

function getPosts() {
  setTimeout(() => {
    let output = ''
    posts.forEach((post) => {
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

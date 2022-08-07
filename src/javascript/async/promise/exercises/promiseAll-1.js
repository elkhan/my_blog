const fetchJSON = fetch('input') // FIXME: stub

fetchJSON('/user-profile')
  .then(user => fetchJSON(`/users/${user.id}/friends`))
  .then(friendIDs => {
    const promises = friendIDs.map(id => fetchJSON(`/users/${id}`))
    return Promise.all(promises)
  })
  .then(friends => console.log(friends))

async function getUserFriends() {
  const user = await fetchJSON('/users/me')
  const friendIDs = await fetchJSON(`friends/${user.id}`)
  const promises = friendIDs.map(id => fetchJSON(`users/${id}`))
  const friends = await Promise.all(promises)
  console.log(friends)
}

const promise = getUserFriends()

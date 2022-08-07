const debounce = (fn, ms = 0) => {
  let timeoutId
  // eslint-disable-next-line func-names
  return function(...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

window.addEventListener(
  'resize',
  debounce(() => {
    const widthToInsert = `<p>${window.innerWidth}</p>`
    const heightToInsert = `<p>${window.innerHeight}</p>`
    document
      .getElementById('window_inner_width')
      .insertAdjacentHTML('beforeend', widthToInsert)
    document
      .getElementById('window_inner_height')
      .insertAdjacentHTML('beforeend', heightToInsert)
    console.log(window.innerWidth)
    console.log(window.innerHeight)
  }, 250)
) // Will log the window dimensions at most every 250ms

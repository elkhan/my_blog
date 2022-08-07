// eslint-disable-next-line consistent-return
function scanForText(node, string) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    for (const child of node.childNodes) {
      if (scanForText(child, string)) {
        return true
      }
    }
    return false
  }
  if (node.nodeType === Node.TEXT_NODE) {
    if (node.nodeValue.indexOf(string) > -1) {
      // eslint-disable-next-line no-param-reassign
      node.parentElement.style.backgroundColor = 'purple'
      alert(node)
    }
  }
}

scanForText(window.document.body, 'book')

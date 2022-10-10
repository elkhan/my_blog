const names = ['John', 'Jane', 'Paul']

exports.getName = name => {
  if (names.includes(name)) {
    return name
  }
  return 'Not found'
}

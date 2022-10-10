const originalSpreadsheet = {
  author: 'Elkhan',
  cells: 100,
  metadata: {
    title: 'This is a file metadata title',
  },
}

function duplicateSpreadsheet(original) {
  if (original.hasPendingChanges) {
    throw new Error('You need to save the file before you can duplicate it.')
  }
  const copy = {
    created: Date.now(),
    author: original.author,
    cells: original.cells,
    metadata: original.metadata,
  }
  copy.metadata.title = `Copy of ${original.metadata.title}`
  return copy
}

console.log(duplicateSpreadsheet(originalSpreadsheet))
console.log(originalSpreadsheet)

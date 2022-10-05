function listBookAuthors(listOfBooks) {
  const listOfAuthors = [];
  listOfBooks.forEach(book => {
      if (!listOfAuthors.includes(book.author)) {
          listOfAuthors.push(book.author);
      }
  });
  return listOfAuthors;
}

const myBooks = [
  {title: 'Harry Potter', author: 'J. K. Rowling'},
  {title: 'Lord of the Rings', author: 'J. R. R. Tolkien'},
  {title: 'The Hobbit', author: 'J. R. R. Tolkien'}
];

console.log(listBookAuthors(myBooks))
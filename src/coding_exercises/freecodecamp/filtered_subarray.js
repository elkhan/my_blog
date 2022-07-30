// eslint-disable-next-line max-len
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-data-structures/iterate-through-all-an-arrays-items-using-for-loops

const { expect } = require('chai');

const filteredArray = (arr, elem) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].indexOf(elem));
    if (arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

expect(
  filteredArray(
    [
      [10, 8, 3],
      [14, 6, 23],
      [3, 18, 6],
    ],
    18
  )
).to.deep.equal([
  [10, 8, 3],
  [14, 6, 23],
]);

expect(
  filteredArray(
    [
      ['trumpets', 2],
      ['flutes', 4],
      ['saxophones', 2],
    ],
    2
  )
).to.deep.equal([['flutes', 4]]);

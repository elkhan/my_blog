// https://flaviocopes.com/binary-search-javascript/
// https://medium.com/@jeffrey.allen.lewis/javascript-algorithms-explained-binary-search-25064b896470

const { expect } = require('chai');

const binarySearch = (arr, num) => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);

    if (arr[midIndex] === num) {
      return midIndex;
    }

    if (num > arr[midIndex]) {
      startIndex = midIndex + 1;
    } else {
      endIndex = midIndex - 1;
    }
  }
  return null; // not found
};

expect(binarySearch([1, 2, 3, 4, 5], 1)).to.equal(0);
expect(binarySearch([1, 2, 3, 4, 5], 5)).to.equal(4);
expect(binarySearch([1, 2, 3, 4, 5], 6)).to.equal(null);

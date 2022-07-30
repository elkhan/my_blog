const { expect } = require('chai');

const multiplyAll = (arr) => {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
};

expect(multiplyAll([[1], [2], [3]])).to.equal(6);

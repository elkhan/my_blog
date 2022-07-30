// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

const { expect } = require('chai');

const arr = [0, 1, 0, 3, 12];
const arr1 = [0, 0, 1];

const moveZeros = (nums) => {
  const n = nums.length;
  for (let i = n; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

expect(moveZeros(arr)).to.deep.equal([1, 3, 12, 0, 0]);
expect(moveZeros(arr1)).to.deep.equal([1, 0, 0]);

/*

 */

const moveZeroesAlt = (nums) => {
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      length--;
      i--;
    }
  }
  return nums;
};

expect(moveZeroesAlt(arr)).to.deep.equal([1, 3, 12, 0, 0]);
expect(moveZeroesAlt(arr1)).to.deep.equal([1, 0, 0]);

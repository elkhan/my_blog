// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

const {expect} = require('chai');

const arr = [1, 2, 3, 4, 5, 6, 7];
const smallArr = [1, 2];
const rotateArray = (nums, k) => {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};
rotateArray(arr, 3);
rotateArray(smallArr, 3);
expect(arr).to.deep.equal([5, 6, 7, 1, 2, 3, 4]);
expect(smallArr).to.deep.equal([2, 1]);

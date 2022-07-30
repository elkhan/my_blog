// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

const { expect } = require('chai');

const arr = [2, 7, 11, 15];
const n = 9;

const arr1 = [3, 2, 3];
const n1 = 6;

const arr2 = [2, 7];
const n2 = 9;

// Brute force O(n2)
const twoSum = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (nums[i] + nums[j] === target) {
        result.push(i);
      }
    }
  }
  return result;
};

expect(twoSum(arr, n)).to.deep.equal([0, 1]);
expect(twoSum(arr1, n1)).to.deep.equal([0, 2]);

/*
Map
 */

const twoSumMap = (nums, target) => {
  const map = new Map();
  const n = nums.length;
  const result = [];
  for (let i = 0; i < n; i++) {
    const sum = target - nums[i];
    if (map.has(nums[i])) {
      result.push(map.get(nums[i]), i);
    }
    map.set(sum, i);
  }
  return result;
};

expect(twoSumMap(arr, n)).to.deep.equal([0, 1]);
expect(twoSumMap(arr1, n1)).to.deep.equal([0, 2]);
expect(twoSumMap(arr2, n2)).to.deep.equal([0, 1]);

/*
Hash
 */
const twoSumHash = (nums, target) => {
  const hash = {};
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const sum = target - nums[i];
    if (sum in hash) {
      return [hash[sum], i];
    }
    hash[nums[i]] = i;
  }
};

expect(twoSumHash(arr, n)).to.deep.equal([0, 1]);
expect(twoSumHash(arr1, n1)).to.deep.equal([0, 2]);
expect(twoSumHash(arr2, n2)).to.deep.equal([0, 1]);

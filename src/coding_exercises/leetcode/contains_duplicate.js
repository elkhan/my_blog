// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

const { expect } = require('chai');

const dupes = [1, 2, 3, 1];
const uniques = [1, 2, 3, 4];
const containsDuplicate = (nums) => {
  const hash = {};
  let result = false;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] in hash) {
      hash[nums[i]] += 1;
    } else {
      hash[nums[i]] = 1;
    }
  }
  for (const j in hash) {
    if (hash[j] > 1) {
      result = true;
    }
  }
  return result;
};

expect(containsDuplicate(dupes)).to.equal(true);
expect(containsDuplicate(uniques)).to.equal(false);

/*

 */
const containsDuplicateSet = (array) => {
  return new Set(array).size !== array.length;
};

expect(containsDuplicateSet(dupes)).to.equal(true);
expect(containsDuplicateSet(uniques)).to.equal(false);

/*

 */
const containsDuplicateSorted = (nums) => {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }
  return false;
};
expect(containsDuplicateSorted(dupes)).to.equal(true);
expect(containsDuplicateSorted(uniques)).to.equal(false);

/*

 */
const containsDuplicateMap = (nums) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], i);
  }
  return false;
};
expect(containsDuplicateMap(dupes)).to.equal(true);
expect(containsDuplicateMap(uniques)).to.equal(false);

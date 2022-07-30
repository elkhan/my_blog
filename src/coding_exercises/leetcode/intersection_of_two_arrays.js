// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

// eslint-disable-next-line max-len
// Solution https://leetcode.com/problems/intersection-of-two-arrays-ii/discuss/1100793/JavaScript-2-Solutions-Using-Sorting-and-HashMap

const { expect } = require('chai');

const arr1 = [1, 2, 2, 1]; // nums1
const arr2 = [2, 2];
const arr3 = [4, 9, 5]; // nums1
const arr4 = [9, 4, 9, 8, 4];
const arr5 = [1]; // nums1
const arr6 = [1];
const arr7 = [1]; // nums1
const arr8 = [1, 1];
const arr9 = [1, 2]; // nums1
const arr10 = [1, 1];
const arr11 = [1, 2, 2, 1]; // nums1
const arr12 = [2];
const arr13 = [1, 2, 2, 1]; // nums1
const arr14 = [1, 2];

const intersect = (nums1, nums2) => {
  const nums1Map = new Map();
  const answer = [];

  for (const n of nums1) {
    nums1Map.set(n, (nums1Map.get(n) || 0) + 1);
  }

  for (const n of nums2) {
    if (nums1Map.has(n)) {
      answer.push(n);
      nums1Map.set(n, nums1Map.get(n) - 1);
      if (!nums1Map.get(n)) {
        nums1Map.delete(n);
      }
    }
  }
  return answer;
};
expect(intersect(arr1, arr2)).to.deep.equal([2, 2]);
expect(intersect(arr3, arr4)).to.deep.equal([9, 4]);
expect(intersect(arr5, arr6)).to.deep.equal([1]);
expect(intersect(arr7, arr8)).to.deep.equal([1]);
expect(intersect(arr9, arr10)).to.deep.equal([1]);
expect(intersect(arr11, arr12)).to.deep.equal([2]);
expect(intersect(arr13, arr14)).to.deep.equal([1, 2]);

/*
Sorting
 */
const intersectSort = (nums1, nums2) => {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const answer = [];

  let n1 = 0;
  let n2 = 0;

  while (n1 < nums1.length && n2 < nums2.length) {
    if (nums1[n1] === nums2[n2]) {
      answer.push(nums1[n1]);
      n1++;
      n2++;
    } else if (nums1[n1] < nums2[n2]) {
      n1++;
    } else {
      n2++;
    }
  }
  return answer;
};

expect(intersectSort(arr1, arr2)).to.deep.equal([2, 2]);
expect(intersectSort(arr3, arr4)).to.deep.equal([4, 9]);
expect(intersectSort(arr5, arr6)).to.deep.equal([1]);
expect(intersectSort(arr7, arr8)).to.deep.equal([1]);
expect(intersectSort(arr9, arr10)).to.deep.equal([1]);
expect(intersectSort(arr11, arr12)).to.deep.equal([2]);
expect(intersectSort(arr13, arr14)).to.deep.equal([1, 2]);

/*
Hash
 */

const intersectHash = (nums1, nums2) => {
  const hash = {};
  const result = [];
  for (const num1 of nums1) {
    hash[num1] ? (hash[num1] += 1) : (hash[num1] = 1);
  }
  for (const num2 of nums2) {
    if (hash[num2]) {
      result.push(num2);
      hash[num2] -= 1;
      if (!hash[num2]) {
        delete hash[num2];
      }
    }
  }
  return result;
};

expect(intersectHash(arr1, arr2)).to.deep.equal([2, 2]);
expect(intersectHash(arr3, arr4)).to.deep.equal([4, 9]);
expect(intersectHash(arr5, arr6)).to.deep.equal([1]);
expect(intersectHash(arr7, arr8)).to.deep.equal([1]);
expect(intersectHash(arr9, arr10)).to.deep.equal([1]);
expect(intersectHash(arr11, arr12)).to.deep.equal([2]);
expect(intersectHash(arr13, arr14)).to.deep.equal([1, 2]);

/*

 */

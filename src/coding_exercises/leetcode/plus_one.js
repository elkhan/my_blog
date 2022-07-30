// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/
// eslint-disable-next-line max-len
// Explanation https://www.youtube.com/watch?v=uQdy914JRKQ&list=PLBZBJbE_rGRVnpitdvpdY9952IsKMDuev&index=6

const { expect } = require('chai');

let nums1 = [1, 2, 3, 4];
let nums2 = [0];
let nums3 = [9, 9, 9];
let nums4 = [9];

const plusOne = (arr) => {
  let carry = 1;
  const result = Array(arr.length).fill(0);
  for (let i = arr.length - 1; i >= 0; i--) {
    const total = arr[i] + carry;
    if (total === 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    result[i] = total % 10;
  }
  if (carry === 1) {
    result.unshift(1);
  }
  return result;
};

expect(plusOne(nums1)).to.deep.equal([1, 2, 3, 5]);
expect(plusOne(nums2)).to.deep.equal([1]);
expect(plusOne(nums3)).to.deep.equal([1, 0, 0, 0]);
expect(plusOne(nums4)).to.deep.equal([1, 0]);

/*

 */

const plusOneAlt = (arr) => {
  for (let i = arr.length - 1; i >= 0; --i) {
    if (arr[i] === 9) {
      arr[i] = 0;
      if (i === 0) {
        arr.unshift(1);
      }
    } else {
      arr[i]++;
      break;
    }
  }
  return arr;
};

nums1 = [1, 2, 3, 4];
nums2 = [0];
nums3 = [9, 9, 9];
nums4 = [9];

expect(plusOneAlt(nums1)).to.deep.equal([1, 2, 3, 5]);
expect(plusOneAlt(nums2)).to.deep.equal([1]);
expect(plusOneAlt(nums3)).to.deep.equal([1, 0, 0, 0]);
expect(plusOneAlt(nums4)).to.deep.equal([1, 0]);

/*

 */

const plusOneAlt2 = (arr) => {
  let carry = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] += carry;
    if (carry > 0) carry = 0;
    if (arr[i] > 9) {
      carry = 1;
      arr[i] = 0;
    }
  }
  if (carry > 0) arr.unshift(carry);
  return arr;
};

nums1 = [1, 2, 3, 4];
nums2 = [0];
nums3 = [9, 9, 9];
nums4 = [9];

expect(plusOneAlt2(nums1)).to.deep.equal([1, 2, 3, 5]);
expect(plusOneAlt2(nums2)).to.deep.equal([1]);
expect(plusOneAlt2(nums3)).to.deep.equal([1, 0, 0, 0]);
expect(plusOneAlt2(nums4)).to.deep.equal([1, 0]);

/*

 */
const plusOneFastest = (arr) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 9) {
      arr[i] = 0;
    } else {
      arr[i] += 1;
      return arr;
    }
  }
  if (arr[0] === 0) {
    arr.unshift(1);
  }
  return arr;
};

nums1 = [1, 2, 3, 4];
nums2 = [0];
nums3 = [9, 9, 9];
nums4 = [9];

expect(plusOneFastest(nums1)).to.deep.equal([1, 2, 3, 5]);
expect(plusOneFastest(nums2)).to.deep.equal([1]);
expect(plusOneFastest(nums3)).to.deep.equal([1, 0, 0, 0]);
expect(plusOneFastest(nums4)).to.deep.equal([1, 0]);

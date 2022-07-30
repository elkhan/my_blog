// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

/*
Sorted array examples!
 */

const { expect } = require('chai');
/*

 */

// noinspection JSUnusedLocalSymbols
const removeDups = (nms) => {
  let curr = 0;
  for (let i = 0; i < nms.length; i++) {
    if (nms[i] === nms[curr]) {
      continue;
    }
    nms[++curr] = nms[i];
  }
  return curr + 1;
};

/*
splice() and hashTable
 */
const arrSplice = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4];
const arrSpliceMid = [1, 1, 2];
const arrSpliceSmall = [1, 2];

const removeDuplicates = (nums) => {
  const seen = {};
  for (let i = nums.length - 1; i >= 0; i--) {
    const curr = nums[i];
    if (seen[curr] === true) {
      nums.splice(i, 1);
    }
    seen[curr] = true;
  }
};
removeDuplicates(arrSplice);
removeDuplicates(arrSpliceSmall);
removeDuplicates(arrSpliceMid);

expect(arrSplice).to.deep.equal([0, 1, 2, 3, 4]);
expect(arrSpliceMid).to.deep.equal([1, 2]);
expect(arrSpliceSmall).to.deep.equal([1, 2]);

/*
filter()
 */
const filterDuplicates = (arr) => {
  return arr.filter((item, index, array) => !index || item !== array[index - 1]);
};

const numArrFilter = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7];
const smallArrFilter = [0, 0, 1, 1, 2];

expect(filterDuplicates(numArrFilter)).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
expect(filterDuplicates(smallArrFilter)).to.deep.equal([0, 1, 2]);

expect(numArrFilter).to.deep.equal([1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7]);

/*
Hash table
 */
const numArrHash = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7];
const smallArrHash = [0, 0, 1, 1, 2];

const removeDuplicatesHashTable = (numsArr) => {
  const seen = {};
  return numsArr.filter((item) => (seen.hasOwnProperty(item) ? false : (seen[item] = true)));
};

expect(removeDuplicatesHashTable(numArrHash)).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
expect(removeDuplicatesHashTable(smallArrHash)).to.deep.equal([0, 1, 2]);

/*
indexOf() and filter()
 */
const numArrIndexOf = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7];
const smallArrIndexOf = [0, 0, 1, 1, 2];

const removeDuplicatesIndexOf = (n) => n.filter((item, index) => n.indexOf(item) === index);

expect(removeDuplicatesIndexOf(numArrIndexOf)).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
expect(removeDuplicatesIndexOf(smallArrIndexOf)).to.deep.equal([0, 1, 2]);

/*
Set
 */
const removeDuplicatesSet = (ns) => [...new Set(ns)];
const numArrIndexSet = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7];
const smallArrIndexSet = [0, 0, 1, 1, 2];

expect(removeDuplicatesSet(numArrIndexSet)).to.deep.equal([1, 2, 3, 4, 5, 6, 7]);
expect(removeDuplicatesSet(smallArrIndexSet)).to.deep.equal([0, 1, 2]);

/*
indexOf()
 */

const numbers = [1, 1, 2, 2, 3, 4, 5];
numbers.forEach((item, index) => {
  return `Item: ${item}, index: ${index}, indexOf: ${numbers.indexOf(item)}`;
});
/*
Item: 1, index: 0, indexOf: 0
Item: 1, index: 1, indexOf: 0
Item: 2, index: 2, indexOf: 2
Item: 2, index: 3, indexOf: 2 // Duplicate
Item: 3, index: 4, indexOf: 4
Item: 4, index: 5, indexOf: 5
Item: 5, index: 6, indexOf: 6
 */
